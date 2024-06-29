

const getWeekDates = (weekOffset) => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const daysUntilMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    const firstDayOfWeek = new Date(
        currentDate.setDate(
            currentDate.getDate() - daysUntilMonday + weekOffset * 7
        )
    );

    const weekDates = [firstDayOfWeek];

    for (let i = 1; i < 7; i++) {
        const nextDay = new Date(firstDayOfWeek);
        nextDay.setDate(firstDayOfWeek.getDate() + i);
        weekDates.push(nextDay);
    }

    return weekDates;
};

function getWeekId(startedData) {
    const worklogDate = new Date(startedData);
    const currentDate = new Date();

    // Find the Monday of the current week
    const currentDayOfWeek = currentDate.getDay();
    const currentMonday = new Date(currentDate);
    currentMonday.setDate(currentDate.getDate() - (currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1));
    currentMonday.setHours(0, 0, 0, 0);

    // Find the Monday of the week for worklogDate
    const worklogDayOfWeek = worklogDate.getDay();
    const worklogMonday = new Date(worklogDate);
    worklogMonday.setDate(worklogDate.getDate() - (worklogDayOfWeek === 0 ? 6 : worklogDayOfWeek - 1));
    worklogMonday.setHours(0, 0, 0, 0);

    return Math.floor((worklogMonday - currentMonday) / (7 * 24 * 60 * 60 * 1000));
}

function workLogsToAuthors(worklogsArr, weekWiseData, issueData) {
    /*
    weekWiseData schema:
    {
      weekId(from current week as 0 and old weeks as -1, -2, ... & coming weeks as 1, 2, ...): {
        {
          data: {(array of days data whole data)},
          author: {
            authorKey: {
              data: {(worklog author whole data)},
              issues: {
                issueKey: {
                  data: {(issue whole data)},
                  worklogs: [worklogId1, worklogId2, ...]
                }
              }
            }
          }
        }
      }
    */
    worklogsArr.map((worklog) => {
        // 1. calculate the weekId w.r.t current week for this worklog
        // 2. get the author key from the worklog
        // 3. get the issue key from the worklog
        // 4. if weekWiseData does not have the weekId, create the weekId with empty object
        // 5. if weekWiseData[weekId] does not have the authorKey, create the authorKey with data from the worklog
        // 6. if weekWiseData[weekId].author[authorKey].issues does not have the issueKey, create the issueKey with data from the issue
        // 7. push the worklogId to the issueKey worklogs array
        // 8. return the weekWiseData
        if (worklog?.comment) {
            const commentArray = worklog?.comment?.content.map((content) => content?.content.map((content) => { if (content?.type == "text") return content?.text }).flat());
            worklog.comment = commentArray.join("\n");
        }

        //step-1 
        const weekId = getWeekId(worklog.started);
        //step-2
        const authorKey = worklog.author.accountId;
        //step-3
        const issueKey = issueData.key;
        //step-4
        if (!weekWiseData[weekId]) {
            weekWiseData[weekId] = {
                data: getWeekDates(weekId),
                author: {}
            };
        }
        //step-5
        if (!weekWiseData[weekId].author[authorKey]) {
            weekWiseData[weekId].author[authorKey] = {
                data: worklog.author,
                issues: {}
            };
        }
        //step-6
        if (!weekWiseData[weekId].author[authorKey].issues[issueKey]) {
            weekWiseData[weekId].author[authorKey].issues[issueKey] = {
                data: issueData,
                worklogs: []
            };
        }
        const worklogData = {
            comment: worklog?.comment,
            started: worklog?.started,
            timeSpentSeconds: worklog?.timeSpentSeconds,
            timeSpent: worklog?.timeSpent,
            worklogId: worklog?.id,
            issueId: worklog?.issueId,
            issueName: issueData?.key,
            authorId: worklog?.author?.accountId,
        };
        //step-7
        weekWiseData[weekId].author[authorKey].issues[issueKey].worklogs.push(worklogData);
        return weekWiseData;
    });
}

function transformWeekWiseData(weekWiseData) {
    /*
    transformed data schema:
      1. author (total time below his/her name with avatar)
      2. issue link (with icon of task type, prority)
      3. status of the issue, total time on this issue for a week
      4. weekDay1,weekDay2,weekDay3, weekDay4, weekDay5,weekDay6,weekDay7.
  
      Step to create the tableData:
      1. transform the data.weekWiseData to mapped array of objects:
      {
        weekId(same as orginal weekId):{
          data: (same as orginal data),
          weekData: (mapped data of days as Mon Jun 21 2021, Tue Jun 22 2021, ...),
          author: {
            authorKey: {
              data: (same as orginal data),
              authorData: (mapped data of author as schema: {
                avatarUrl: author's avatar url,
                name: author's name,
                totalTimeSpentSeconds: (total time spent by this author in this week),
                totalTimeSpent: (total time spent by this author in this week as 1h 30m),
              })
              issues: {
                issueKey: {
                  data: (same as orginal data),
                  issueData:( mapped data of issue as schema: {
                    summay: issue's summary,
                    issueTypeIconUrl: issue's type icon url,
                    priorityIconUrl: issue's priority icon url,
                    key: issue's key,
                  })
                  statusData:{
                    status: issue's status,
                    totalTimeSpentSeconds: (total time spent on this issue by this author in this week),
                    totalTimeSpent: (total time spent on this issue by this author in this week as 1h 30m),
                    color: (color based on the status of the issue),
                  }
                  worklogsDayWise: {
                    weekDay1: {
                      totalTimeSpentSeconds: (addition of all worklogs time spent on this issue on this day by this author),
                      comments: (mapped all worklogs comments on this issue on this day by this author as schema:
                        "1. ${worklogId1.started to only time. ex: 09:00 pm} (${worklogId1.timeSpent as 1h 30m})\n
                        ${worklogId1.comment}\n",
                        "2. ${worklogId2.started to only time. ex: 09:00 pm} (${worklogId2.timeSpent as 1h 30m})\n
                        ${worklogId2.comment}\n",
                        ...
                      )
                    }
                  }
                  worklogs: [worklogId1, worklogId2, ...]
                }
              }
            }
          }
        }
      }
  */

    const transformedData = {};
    Object.keys(weekWiseData).map((weekId) => {
        const weekData = weekWiseData[weekId];
        transformedData[weekId] = {
            data: weekData.data,
            weekData: weekData.data.map((date) => (date.toDateString())),
            author: {},
        };

        Object.keys(weekData.author).map((authorKey) => {
            const authorData = weekData.author[authorKey];
            let authorTotalTimeSpentSeconds = 0;
            const issues = {};

            Object.keys(authorData.issues).map((issueKey) => {
                const issueData = authorData.issues[issueKey];
                let issueTotalTimeSpentSeconds = 0;
                const worklogsDayWise = {};
                issueData.worklogs.sort((a, b) => new Date(a.started) - new Date(b.started));

                issueData.worklogs.map((worklog) => {
                    const worklogDate = new Date(worklog.started);
                    const weekDay = worklogDate.toDateString();
                    if (!worklogsDayWise[weekDay]) {
                        worklogsDayWise[weekDay] = {
                            timeSpent: formatTimeSpent(0),
                            totalTimeSpentSeconds: 0,
                            comments: "",
                        };
                    }
                    worklogsDayWise[weekDay].comments += formatWorklog(worklog);
                    worklogsDayWise[weekDay].totalTimeSpentSeconds += worklog.timeSpentSeconds;
                    issueTotalTimeSpentSeconds += worklog.timeSpentSeconds;
                    authorTotalTimeSpentSeconds += worklog.timeSpentSeconds;
                    worklogsDayWise[weekDay].timeSpent = formatTimeSpent(worklogsDayWise[weekDay].totalTimeSpentSeconds);
                });

                const issueStatusData = {
                    status: issueData.data.fields.status.name,
                    totalTimeSpentSeconds: issueTotalTimeSpentSeconds,
                    totalTimeSpent: formatTimeSpent(issueTotalTimeSpentSeconds),
                    color: issueData.data.fields.status.statusCategory.colorName,
                };

                const issueDataTransformed = {
                    summary: issueData.data.fields.summary,
                    issueTypeName: issueData.data.fields.issuetype.name,
                    priorityName: issueData.data.fields.priority.name,
                    key: issueKey,
                };

                issues[issueKey] = {
                    data: issueData.data,
                    issueData: issueDataTransformed,
                    statusData: issueStatusData,
                    worklogsDayWise,
                    worklogs: issueData.worklogs,
                };
            });

            const authorDataTransformed = {
                avatarUrl: authorData.data.avatarUrls["48x48"],
                name: authorData.data.displayName,
                totalTimeSpentSeconds: authorTotalTimeSpentSeconds,
                totalTimeSpent: formatTimeSpent(authorTotalTimeSpentSeconds),
            };

            transformedData[weekId].author[authorKey] = {
                data: authorData.data,
                authorData: authorDataTransformed,
                issues,
            };
        });
    });
    return transformedData;
}

function formatWorklog(worklog) {
    const started = new Date(worklog.started);
    const hours = started.getHours();
    const minutes = started.getMinutes();

    const period = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${formattedHours}:${formattedMinutes} ${period} (${worklog.timeSpent})${worklog?.comment ? ":\n" + worklog.comment + ".\n" : ";"}\n`;
}

const formatTimeSpent = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (days === 0 && hours === 0 && minutes === 0) {
        return null;
    }
    return `${days > 0 ? days + 'd ' : ''}${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm' : ''}`;
};

function exportToExcel(data) {
    Object.keys(data).forEach((weekKey) => {
        const weekData = data[weekKey];

        Object.keys(weekData.author).forEach((authorKey) => {
            const authorData = weekData.author[authorKey];
            const ws = XLSX.utils.aoa_to_sheet(getAuthorSheetData(authorData));

            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, authorData.authorData.name);
            const excelFilePath = `./${authorData.authorData.name}_week${weekKey}.xlsx`;
            XLSX.writeFile(wb, excelFilePath);

            console.log(`Excel file saved successfully for ${authorData.authorData.name} at ${excelFilePath}`);
        });
    });
}

function getAuthorSheetData(authorData) {
    const headers = [
        "Author Effort",
        null,
        null,
        "Issue Effort",
        null,
        null,
        null,
        null,
        null,
    ];

    const subHeaders = [
        "Name",
        "totalTimeSpentSeconds",
        "totalTimeSpent",
        "Key",
        "Summary",
        "totalTimeSpentSeconds",
        "totalTimeSpent",
        "Status",
        "IssueType",
        "Priority",
    ];

    const excelData = [headers, subHeaders];

    Object.keys(authorData.issues).forEach((issueKey) => {
        const issueData = authorData.issues[issueKey];
        const row = [
            authorData.authorData.name,
            authorData.authorData.totalTimeSpentSeconds,
            authorData.authorData.totalTimeSpent,
            issueData.issueData.key,
            issueData.issueData.summary,
            issueData.statusData.totalTimeSpentSeconds,
            issueData.statusData.totalTimeSpent,
            issueData.statusData.status,
            issueData.issueData.issueTypeName,
            issueData.issueData.priorityName
        ];

        excelData.push(row);
    });

    return excelData;
}
