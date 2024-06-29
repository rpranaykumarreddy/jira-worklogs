import axios from 'axios';
import dotenv from 'dotenv';
import XLSX from 'xlsx';
import { filterAndFlattenTicketData, filterAndFlattenWorkLogData } from './filter.js';

dotenv.config();

const JIRA_API_URL = process.env.JIRA_API_URL;
const WORKLOG_API_URL = process.env.WORKLOG_API_URL;
const BASIC_TOKEN = process.env.BASIC_TOKEN;
const MONDAY_WEEK_START = process.env.MONDAY_WEEK_START;
const WORKING_HOURS = process.env.WORKING_HOURS;
const JQL = process.env.JQL;
const testLimit = 10000;
const requestHeaders = {
    headers: {
        'Authorization': `Basic ${BASIC_TOKEN}`
    }
}
async function getAllTickets(startAt = 0) {
    console.log(JIRA_API_URL);
    const url = `${JIRA_API_URL}?jql=${JQL}&startAt=${startAt}&maxResults=100&fields=summary,priority,issuetype,status,description`;
    let TICKET_DATA = {};

    const response = await axios.get(url, requestHeaders);

    const { issues, total, startAt: currentStartAt, maxResults } = response.data;
    console.log(`Fetched ${issues.length} tickets, startAt: ${currentStartAt}, total: ${total}`);
    const flattenTicketsData = filterAndFlattenTicketData(issues);
    TICKET_DATA = { ...TICKET_DATA, ...flattenTicketsData };

    const nextStartAt = currentStartAt + maxResults;
    if (Math.min(testLimit, total) && nextStartAt < Math.min(testLimit, total)) {
        const nextBatchTickets = await getAllTickets(nextStartAt);
        TICKET_DATA = { ...TICKET_DATA, ...nextBatchTickets };
    }
    return TICKET_DATA;
}

async function getWorklog(ticketKey) {
    const url = `${WORKLOG_API_URL}/${ticketKey}/worklog`;
    console.log(url);
    try {
        const response = await axios.get(url, requestHeaders);
        const worklogs = response.data.worklogs;
        console.log(`Fetched ${worklogs.length} worklogs for ${ticketKey}`);
        const flattenWorklogs = filterAndFlattenWorkLogData(worklogs);
        return flattenWorklogs;
    } catch (error) {
        console.error(`Error getting worklog for ${ticketKey}:`, error.response ? error.response.data : error.message);
    }
}

async function startProgram() {
    const [day, month, year] = MONDAY_WEEK_START.split('-').map(Number);
    const startDate = new Date(year, month - 1, day, 0, 0, 0, 0);
    const istOffset = 5.5 * 60 * 60 * 1000;
    const startDateInIST = new Date(startDate.getTime() + istOffset);
    if (startDateInIST.getDay() !== 1) {
        console.error("MONDAY_WEEK_START is not a Monday or not in 'DD-MM-YYYY' format. Please provide a valid Monday date in DD-MM-YYYY format.");
        return;
    }

    const TICKET_DATA = await getAllTickets(0);

    let WORKLOG_DATA = [];
    for (const ticketKey in TICKET_DATA) {
        const worklogs = await getWorklog(ticketKey);
        WORKLOG_DATA = [...WORKLOG_DATA, ...worklogs];
    }

    const UNIQUE_AUTHORS = [...new Set(WORKLOG_DATA.map(worklog => worklog.author))].sort();
    const UNIQUE_ISSUES = [...new Set(Object.values(TICKET_DATA).map(ticket => ticket.key))].sort();
    const COMBINED_ENTITY = prepareCombinedDayIssueAuthorEntities(WORKLOG_DATA, TICKET_DATA, UNIQUE_AUTHORS, UNIQUE_ISSUES);
    console.log("combined entity", COMBINED_ENTITY, "unique authors", UNIQUE_AUTHORS, "unique issues", UNIQUE_ISSUES);

    prepareExcel(COMBINED_ENTITY, UNIQUE_AUTHORS, UNIQUE_ISSUES);
}

startProgram();

function prepareExcel(combinedEntities, uniqueAuthors, uniqueIssues) {
    const workbook = XLSX.utils.book_new();
    const summarySheet = prepareSummarySheet(combinedEntities, uniqueAuthors, uniqueIssues);
    const authorWiseSheet = prepareAuthorWiseSheet(combinedEntities, uniqueAuthors, uniqueIssues);

    XLSX.utils.book_append_sheet(workbook, summarySheet, "Summary");
    XLSX.utils.book_append_sheet(workbook, authorWiseSheet, "Author Wise Effort");
    XLSX.writeFile(workbook, MONDAY_WEEK_START + '_Week_Wise_Effort.xlsx');
}

function prepareAuthorWiseSheet(combinedEntities, uniqueAuthors, uniqueIssues) {

    const sheetData = [];

    const headers = ["S.No", "Author (Primary key)",
        "Jira No (Sec key)",
        "Week Effort", "",
        "Issue", "Status", "IssueType", "Priority",
        "Monday's Effort", "", "",
        "Tuesday's Effort", "", "",
        "Wednesday's Effort", "", "",
        "Thursday's Effort", "", "",
        "Friday's Effort", "", "",
        "Saturday's Effort", "", "",
        "Sunday's Effort", "", "",
        "Description"];
    sheetData.push(headers);
    const sheetContentArr = populateAuthorWiseSheetData(combinedEntities, uniqueAuthors, uniqueIssues);
    sheetData.push(...sheetContentArr);
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    return worksheet;
}


function populateAuthorWiseSheetData(combinedEntities, uniqueAuthors, uniqueIssues) {
    const sheetContentArr = [];
    const uniqueCombinedKeys = Object.keys(combinedEntities);
    let sNo = 1;
    for (const author of uniqueAuthors) {
        let authorWiseDayEfforts = { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0, Sunday: 0 };
        let authorWiseDayEffortsText = { Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: '' };
        for (const issueKey of uniqueIssues) {
            const filteredKeys = uniqueCombinedKeys.filter(key => key.split(':')[0] === issueKey && key.split(':')[1] === author);
            if (filteredKeys.length) {
                let weekEffort = 0;
                let effortPerDay = { Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: '' };
                let effortPerDayInSec = { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0, Saturday: 0, Sunday: 0 };
                let commentsPerDay = { Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '', Sunday: '' };
                for (const key of filteredKeys) {
                    const entity = combinedEntities[key];
                    const { totalTimeSpentSecondsInADay, date, comments } = entity;
                    if (isInSameWeek(date)) {
                        weekEffort += totalTimeSpentSecondsInADay;
                        const dayOfWeek = getDayOfWeek(date);
                        effortPerDay[dayOfWeek] = secondsToText(totalTimeSpentSecondsInADay);
                        effortPerDayInSec[dayOfWeek] = totalTimeSpentSecondsInADay;
                        commentsPerDay[dayOfWeek] = comments.map(comment => {
                            const { comment: commentText, timeSpentSeconds, started } = comment;
                            let text = `${convertToTimeInIST(started)} (${secondsToText(timeSpentSeconds)}): `;
                            if (commentText.length > 20 && commentText.charAt(commentText.length - 1) !== '\n') {
                                text += '\n';
                            }
                            if (commentText.length > 4) {
                                text += commentText;
                            }
                            return text;
                        }).join('\n');
                        authorWiseDayEfforts[dayOfWeek] += totalTimeSpentSecondsInADay;
                    }
                }
                const weekEffortText = secondsToText(weekEffort);

                const lastKey = filteredKeys[filteredKeys.length - 1];
                const lastEntity = combinedEntities[lastKey];
                const { issueNo, summary, issueType, priority, status, description } = lastEntity;
                if (weekEffort > 0) {
                    sheetContentArr.push([sNo++, author, issueNo, weekEffortText, weekEffort, summary, status, issueType, priority,
                    effortPerDay.Monday, effortPerDayInSec.Monday, commentsPerDay.Monday,
                    effortPerDay.Tuesday, effortPerDayInSec.Tuesday, commentsPerDay.Tuesday,
                    effortPerDay.Wednesday, effortPerDayInSec.Wednesday, commentsPerDay.Wednesday,
                    effortPerDay.Thursday, effortPerDayInSec.Thursday, commentsPerDay.Thursday,
                    effortPerDay.Friday, effortPerDayInSec.Friday, commentsPerDay.Friday,
                    effortPerDay.Saturday, effortPerDayInSec.Saturday, commentsPerDay.Saturday,
                    effortPerDay.Sunday, effortPerDayInSec.Sunday, commentsPerDay.Sunday,
                        description]);
                }
            }
        }
        const authorWiseTotalEffort = Object.values(authorWiseDayEfforts).reduce((acc, curr) => acc + curr, 0);
        const authorWiseTotalEffortText = secondsToText(authorWiseTotalEffort);
        if (authorWiseTotalEffort > 0) {
            for (const day in authorWiseDayEfforts) {
                authorWiseDayEffortsText[day] = secondsToText(authorWiseDayEfforts[day]);
            }
            sheetContentArr.push([sNo++, author, "Total Effort",
                authorWiseTotalEffortText, authorWiseTotalEffort, "", "", "", "",
            authorWiseDayEffortsText.Monday, authorWiseDayEfforts.Monday, "",
            authorWiseDayEffortsText.Tuesday, authorWiseDayEfforts.Tuesday, "",
            authorWiseDayEffortsText.Wednesday, authorWiseDayEfforts.Wednesday, "",
            authorWiseDayEffortsText.Thursday, authorWiseDayEfforts.Thursday, "",
            authorWiseDayEffortsText.Friday, authorWiseDayEfforts.Friday, "",
            authorWiseDayEffortsText.Saturday, authorWiseDayEfforts.Saturday, "",
            authorWiseDayEffortsText.Sunday, authorWiseDayEfforts.Sunday, "",
                ""]);
        }

    }
    return sheetContentArr;
}


function prepareSummarySheet(combinedEntities, uniqueAuthors, uniqueIssues) {

    const sheetData = [];

    const headers = ["S.No", "Jira No (Primary key)", "Author (Sec key)", "Total Effort", "In seconds", "Week Effort", "In seconds", "Issue", "Status", "IssueType", "Priority", "Description"];
    sheetData.push(headers);
    const sheetContentArr = populateSummarySheetData(combinedEntities, uniqueAuthors, uniqueIssues);
    sheetData.push(...sheetContentArr);
    const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    return worksheet;
}

function populateSummarySheetData(combinedEntities, uniqueAuthors, uniqueIssues) {
    const sheetContentArr = [];
    const uniqueCombinedKeys = Object.keys(combinedEntities);
    let sNo = 1;

    for (const issueKey of uniqueIssues) {
        let issuesWiseTotalEffort = 0;
        let issuesWiseWeekEffort = 0;
        let issueDataArr = [];
        for (const author of uniqueAuthors) {
            const filteredKeys = uniqueCombinedKeys.filter(key => key.split(':')[0] === issueKey && key.split(':')[1] === author);
            if (filteredKeys.length) {
                let totalEffort = 0;
                let weekEffort = 0;
                for (const key of filteredKeys) {
                    const entity = combinedEntities[key];
                    const { totalTimeSpentSecondsInADay, date } = entity;
                    totalEffort += totalTimeSpentSecondsInADay;
                    if (isInSameWeek(date)) {
                        weekEffort += totalTimeSpentSecondsInADay;
                    }
                }
                issuesWiseTotalEffort += totalEffort;
                issuesWiseWeekEffort += weekEffort;
                const totalEffortText = secondsToText(totalEffort);
                const weekEffortText = secondsToText(weekEffort);
                const lastKey = filteredKeys[filteredKeys.length - 1];
                const lastEntity = combinedEntities[lastKey];
                const { issueNo, author, summary, issueType, priority, status, description } = lastEntity;
                if (weekEffort > 0) {
                    sheetContentArr.push([sNo++, issueNo, author, totalEffortText, totalEffort, weekEffortText, weekEffort, summary, status, issueType, priority, description]);
                    issueDataArr = [summary, status, issueType, priority, description];
                }
            }
        }
        if (issuesWiseWeekEffort > 0) {
            const issuesWiseTotalEffortText = secondsToText(issuesWiseTotalEffort);
            const issuesWiseWeekEffortText = secondsToText(issuesWiseWeekEffort);
            sheetContentArr.push([sNo++, issueKey, "Total Effort", issuesWiseTotalEffortText, issuesWiseTotalEffort, issuesWiseWeekEffortText, issuesWiseWeekEffort, ...issueDataArr]);
        }
    }
    return sheetContentArr;
}

function prepareCombinedDayIssueAuthorEntities(worklogs, issues) {
    const combinedEntities = {};

    worklogs.forEach(worklog => {
        const issue = issues[worklog.issueId];
        if (issue) {
            const dateInIST = convertToDateInIST(worklog.started);
            const key = `${issue.key}:${worklog.author}:${dateInIST}`;

            if (!combinedEntities[key]) {
                combinedEntities[key] = {
                    issueNo: issue.key,
                    summary: issue.summary,
                    issueType: issue.issueType,
                    priority: issue.priority,
                    status: issue.status,
                    description: issue.description,
                    author: worklog.author,
                    date: dateInIST,
                    totalTimeSpentSecondsInADay: 0,
                    comments: []
                };
            }

            combinedEntities[key].totalTimeSpentSecondsInADay += worklog.timeSpentSeconds;
            combinedEntities[key].comments.push({
                comment: worklog.comment,
                timeSpentSeconds: worklog.timeSpentSeconds,
                started: worklog.started
            });
        }
    });

    return combinedEntities;
}

function secondsToText(seconds) {
    const days = Math.floor(seconds / (WORKING_HOURS * 3600));
    const hours = Math.floor((seconds % (WORKING_HOURS * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (days === 0 && hours === 0 && minutes === 0) {
        return '';
    }
    return `${days}d ${hours}h ${minutes}m`;
}

function isInSameWeek(dateStr) {
    const [day, month, year] = MONDAY_WEEK_START.split('-').map(Number);
    const startDate = new Date(year, month - 1, day, 0, 0, 0, 0);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7);

    const [dd, mm, yyyy] = dateStr.split('-').map(Number);
    const dateToCheck = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);

    const istOffset = 5.5 * 60 * 60 * 1000;
    const dateToCheckInIST = new Date(dateToCheck.getTime() + istOffset);
    const startDateInIST = new Date(startDate.getTime() + istOffset);
    const endDateInIST = new Date(endDate.getTime() + istOffset);

    return dateToCheckInIST >= startDateInIST && dateToCheckInIST < endDateInIST;
}

function convertToDateInIST(dateStr) {
    const date = new Date(dateStr);
    const istOffset = 5.5 * 60 * 60 * 1000;
    const dateInIST = new Date(date.getTime() + istOffset);
    const dd = String(dateInIST.getDate()).padStart(2, '0');
    const mm = String(dateInIST.getMonth() + 1).padStart(2, '0');
    const yyyy = dateInIST.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

function convertToTimeInIST(dateStr) {
    const date = new Date(dateStr);

    const hh = date.getHours() % 12 ? String(date.getHours() % 12).padStart(2, '0') : 12;
    const mm = String(date.getMinutes()).padStart(2, '0');
    const suffix = date.getHours() >= 12 ? "PM" : "AM";
    return `${hh}:${mm} ${suffix}`;
}

function getDayOfWeek(dateStr) {
    const [dd, mm, yyyy] = dateStr.split('-').map(Number);
    const date = new Date(yyyy, mm - 1, dd);
    const istOffset = 5.5 * 60 * 60 * 1000;
    const dateInIST = new Date(date.getTime() + istOffset);
    const dayOfWeek = dateInIST.getUTCDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[dayOfWeek];
}
