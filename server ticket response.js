/*
curl--location 'https://nextuple.atlsassian.net/rest/api/2/issue/KTLO-263?maxresults=100' \
--header 'Authorization: Basic cHJhbmF5LnJlZGR5QG5leHR1cGxlLmNvbTpBVEFUVDN4RmZHRjBQcElrcmFGellTWHdqN2hZRjFqX3BqV1NLNzNBbFN4VmQ2UjlrUGNSbk1uOWRmZmRSQ3RDUk1FX1lPZTkxNllpQm9NZkZCMEl2NnVHMjE3TnJQNVgyM2RhcGxYTXFQdE4zU2Z0S2RJZllaRXlCQ2VpQUVlbDRtMXc2NzhyTWoxRVAzRU9wajMybUdGNU13ZXlwbzZOVHN2SWxhWFFxMk9lYURxOEhHc0pzYVk9NUIzM0RCOUU=' \
--header 'Cookie: atlassian.xsrf.token=890802352e8e6df4a49c3f1e439b86527c4f1678_lin'
*/
const ticket = {
    "expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations,customfield_10018.requestTypePractice",
    "id": "35505",
    "key": "KTLO-263",
    "fields": {
        "statuscategorychangedate": "2024-05-22T21:29:19.264-0700",
        "issuetype": {
            "id": "10001",
            "description": "A task that needs to be done.",
            "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
            "name": "Task",
            "subtask": false,
            "avatarId": 10318,
            "hierarchyLevel": 0
        },
        "customfield_10070": null,
        "timespent": 219600,
        "customfield_10074": null,
        "customfield_10075": null,
        "project": {
            "id": "10066",
            "key": "KTLO",
            "name": "KTLO",
            "projectTypeKey": "software",
            "simplified": false,
            "avatarUrls": {
                "48x48": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10424",
                "24x24": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10424?size=small",
                "16x16": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                "32x32": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10424?size=medium"
            }
        },
        "fixVersions": [],
        "aggregatetimespent": 219600,
        "resolution": null,
        "resolutiondate": null,
        "workratio": 50,
        "watches": {
            "watchCount": 1,
            "isWatching": true
        },
        "issuerestriction": {
            "issuerestrictions": {},
            "shouldDisplay": false
        },
        "lastViewed": "2024-06-28T12:08:29.726-0700",
        "customfield_10060": null,
        "customfield_10061": null,
        "created": "2024-05-22T21:28:38.126-0700",
        "customfield_10062": null,
        "customfield_10063": null,
        "customfield_10064": null,
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_10066": null,
        "customfield_10023": null,
        "priority": {
            "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
            "name": "Medium",
            "id": "3"
        },
        "customfield_10024": null,
        "customfield_10069": null,
        "customfield_10025": null,
        "labels": [
            "KTLO"
        ],
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": [],
        "aggregatetimeoriginalestimate": 432000,
        "timeestimate": 0,
        "versions": [],
        "issuelinks": [],
        "assignee": {
            "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
            "emailAddress": "pranay.reddy@nextuple.com",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
            },
            "displayName": "Ravula Pranay Kumar Reddy",
            "active": true,
            "timeZone": "Asia/Kolkata",
            "accountType": "atlassian"
        },
        "updated": "2024-06-28T06:29:06.215-0700",
        "status": {
            "description": "",
            "iconUrl": "https://nextuple.atlassian.net/",
            "name": "In Dev",
            "id": "10020",
            "statusCategory": {
                "id": 4,
                "key": "indeterminate",
                "colorName": "yellow",
                "name": "In Progress"
            }
        },
        "components": [],
        "customfield_10091": null,
        "customfield_10092": null,
        "timeoriginalestimate": 432000,
        "description": "* Write test cases for kafka validation using python-utility-poc.\n* Comment node creation step in inv-api-automation, in all the testcases possible. Replace the dependancy with the existing nodes from test.properties.\n* Node ATP flag on Eligibility of node requires changes in the automation.",
        "customfield_10010": [
            {
                "id": 433,
                "name": "KTLO-Sprint-21",
                "state": "closed",
                "boardId": 94,
                "goal": "",
                "startDate": "2024-06-10T04:30:26.377Z",
                "endDate": "2024-06-21T18:00:00.000Z",
                "completeDate": "2024-06-24T09:08:53.125Z"
            },
            {
                "id": 418,
                "name": "KTLO-Sprint-19",
                "state": "closed",
                "boardId": 94,
                "goal": "",
                "startDate": "2024-05-13T03:30:22.162Z",
                "endDate": "2024-05-24T18:00:00.000Z",
                "completeDate": "2024-05-28T04:42:01.703Z"
            },
            {
                "id": 426,
                "name": "KTLO-Sprint-20",
                "state": "closed",
                "boardId": 94,
                "goal": "",
                "startDate": "2024-05-27T05:13:20.360Z",
                "endDate": "2024-06-07T18:00:00.000Z",
                "completeDate": "2024-06-11T04:38:05.060Z"
            },
            {
                "id": 461,
                "name": "KTLO-Sprint-22",
                "state": "active",
                "boardId": 94,
                "goal": "",
                "startDate": "2024-06-24T04:13:26.923Z",
                "endDate": "2024-07-05T18:00:00.000Z"
            }
        ],
        "customfield_10011": "0|i045db:",
        "customfield_10056": null,
        "customfield_10012": null,
        "customfield_10013": null,
        "customfield_10057": null,
        "customfield_10058": null,
        "customfield_10059": null,
        "timetracking": {
            "originalEstimate": "3w",
            "remainingEstimate": "0m",
            "timeSpent": "1w 2d 5h",
            "originalEstimateSeconds": 432000,
            "remainingEstimateSeconds": 0,
            "timeSpentSeconds": 219600
        },
        "security": null,
        "customfield_10008": null,
        "customfield_10009": {
            "hasEpicLinkFieldDependency": false,
            "showField": false,
            "nonEditableReason": {
                "reason": "PLUGIN_LICENSE_ERROR",
                "message": "The Parent Link is only available to Jira Premium users."
            }
        },
        "attachment": [],
        "aggregatetimeestimate": 0,
        "summary": "[INV-BACKLOG-AUTOMATION-POC]",
        "creator": {
            "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
            "emailAddress": "pranay.reddy@nextuple.com",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
            },
            "displayName": "Ravula Pranay Kumar Reddy",
            "active": true,
            "timeZone": "Asia/Kolkata",
            "accountType": "atlassian"
        },
        "subtasks": [],
        "customfield_10040": null,
        "customfield_10084": null,
        "customfield_10041": null,
        "customfield_10042": null,
        "reporter": {
            "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
            "emailAddress": "pranay.reddy@nextuple.com",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
            },
            "displayName": "Ravula Pranay Kumar Reddy",
            "active": true,
            "timeZone": "Asia/Kolkata",
            "accountType": "atlassian"
        },
        "customfield_10120": null,
        "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=3}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":3,\"lastUpdated\":\"2024-06-28T23:04:42.871+0530\",\"stateCount\":3,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"bitbucket\":{\"count\":3,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
        "aggregateprogress": {
            "progress": 219600,
            "total": 219600,
            "percent": 100
        },
        "customfield_10044": null,
        "customfield_10001": null,
        "customfield_10046": null,
        "customfield_10047": null,
        "customfield_10048": null,
        "customfield_10004": null,
        "customfield_10038": null,
        "customfield_10039": null,
        "environment": null,
        "customfield_10119": null,
        "duedate": null,
        "progress": {
            "progress": 219600,
            "total": 219600,
            "percent": 100
        },
        "votes": {
            "votes": 0,
            "hasVoted": false
        },
        "comment": {
            "comments": [],
            "maxResults": 0,
            "total": 0,
            "startAt": 0
        },
        "worklog": {
            "startAt": 0,
            "maxResults": 20,
            "total": 32,
            "worklogs": [
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-22T21:30:23.630-0700",
                    "updated": "2024-05-22T21:30:23.630-0700",
                    "started": "2024-05-22T10:30:00.000-0700",
                    "timeSpent": "2h 30m",
                    "timeSpentSeconds": 9000,
                    "id": "13172",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-22T21:31:05.876-0700",
                    "updated": "2024-05-22T21:31:05.876-0700",
                    "started": "2024-05-22T14:00:00.000-0700",
                    "timeSpent": "1h",
                    "timeSpentSeconds": 3600,
                    "id": "13173",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-22T21:31:27.066-0700",
                    "updated": "2024-05-22T21:31:27.066-0700",
                    "started": "2024-05-22T16:00:00.000-0700",
                    "timeSpent": "2h",
                    "timeSpentSeconds": 7200,
                    "id": "13174",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-23T04:28:20.601-0700",
                    "updated": "2024-05-23T04:28:20.601-0700",
                    "started": "2024-05-23T10:30:00.000-0700",
                    "timeSpent": "3h",
                    "timeSpentSeconds": 10800,
                    "id": "13180",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-23T04:29:10.032-0700",
                    "updated": "2024-05-23T04:29:10.032-0700",
                    "started": "2024-05-23T14:30:00.000-0700",
                    "timeSpent": "2h",
                    "timeSpentSeconds": 7200,
                    "id": "13181",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-24T05:18:17.163-0700",
                    "updated": "2024-05-24T05:18:17.163-0700",
                    "started": "2024-05-24T11:30:00.000-0700",
                    "timeSpent": "1h 30m",
                    "timeSpentSeconds": 5400,
                    "id": "13200",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-24T05:19:33.843-0700",
                    "updated": "2024-05-24T05:19:33.843-0700",
                    "started": "2024-05-24T17:00:00.000-0700",
                    "timeSpent": "15m",
                    "timeSpentSeconds": 900,
                    "id": "13201",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Feature file, data & I/O adjustments",
                    "created": "2024-05-27T11:34:02.892-0700",
                    "updated": "2024-05-27T11:35:35.331-0700",
                    "started": "2024-05-27T14:00:00.000-0700",
                    "timeSpent": "4h",
                    "timeSpentSeconds": 14400,
                    "id": "13223",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Fixed the flow of the input and expected output",
                    "created": "2024-05-28T21:46:54.505-0700",
                    "updated": "2024-05-28T21:46:54.505-0700",
                    "started": "2024-05-28T11:00:00.000-0700",
                    "timeSpent": "2h",
                    "timeSpentSeconds": 7200,
                    "id": "13245",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Completed flow of 1 testcases. When try the same for the rest. Faced vpn issue & kafka unexpected behaviour too.",
                    "created": "2024-05-28T21:48:30.356-0700",
                    "updated": "2024-05-28T21:48:30.356-0700",
                    "started": "2024-05-28T18:46:56.162-0700",
                    "timeSpent": "3h",
                    "timeSpentSeconds": 10800,
                    "id": "13246",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Tried to run kafka validation. But, Still it’s behavior is unexpected.",
                    "created": "2024-05-28T21:49:28.473-0700",
                    "updated": "2024-05-28T21:49:28.473-0700",
                    "started": "2024-05-28T20:00:00.000-0700",
                    "timeSpent": "1h",
                    "timeSpentSeconds": 3600,
                    "id": "13247",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Connected with pankaj for the reporting of kafka issue. Waiting for the fix.",
                    "created": "2024-05-28T21:51:18.271-0700",
                    "updated": "2024-05-28T21:51:18.271-0700",
                    "started": "2024-05-28T21:19:29.090-0700",
                    "timeSpent": "30m",
                    "timeSpentSeconds": 1800,
                    "id": "13248",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-29T06:27:09.058-0700",
                    "updated": "2024-05-29T06:27:09.058-0700",
                    "started": "2024-05-29T11:00:00.000-0700",
                    "timeSpent": "2h",
                    "timeSpentSeconds": 7200,
                    "id": "13264",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Final review & few changes",
                    "created": "2024-05-29T06:27:43.883-0700",
                    "updated": "2024-05-29T06:27:43.883-0700",
                    "started": "2024-05-29T14:30:00.000-0700",
                    "timeSpent": "1h",
                    "timeSpentSeconds": 3600,
                    "id": "13265",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "tried execution but Kafka inconsistent exists",
                    "created": "2024-05-30T09:00:36.713-0700",
                    "updated": "2024-05-30T09:00:36.713-0700",
                    "started": "2024-05-30T01:30:00.000-0700",
                    "timeSpent": "15m",
                    "timeSpentSeconds": 900,
                    "id": "13302",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "tried execution but Kafka inconsistent still exists",
                    "created": "2024-05-30T09:01:14.593-0700",
                    "updated": "2024-05-30T09:01:14.593-0700",
                    "started": "2024-05-30T04:15:00.000-0700",
                    "timeSpent": "15m",
                    "timeSpentSeconds": 900,
                    "id": "13303",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Execution ",
                    "created": "2024-05-31T05:19:09.295-0700",
                    "updated": "2024-05-31T05:19:09.295-0700",
                    "started": "2024-05-31T11:30:00.000-0700",
                    "timeSpent": "1h 30m",
                    "timeSpentSeconds": 5400,
                    "id": "13346",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "created": "2024-05-31T05:19:41.968-0700",
                    "updated": "2024-05-31T05:19:41.968-0700",
                    "started": "2024-05-31T14:00:00.000-0700",
                    "timeSpent": "1h",
                    "timeSpentSeconds": 3600,
                    "id": "13347",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Facing issue connect with Tejas.",
                    "created": "2024-06-03T04:23:57.512-0700",
                    "updated": "2024-06-03T04:23:57.512-0700",
                    "started": "2024-06-02T22:00:00.000-0700",
                    "timeSpent": "1h",
                    "timeSpentSeconds": 3600,
                    "id": "13376",
                    "issueId": "35505"
                },
                {
                    "author": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "updateAuthor": {
                        "accountId": "712020:5755e3d2-9c73-4f64-885c-7ba2ba7e77dc",
                        "emailAddress": "pranay.reddy@nextuple.com",
                        "avatarUrls": {
                            "48x48": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "24x24": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "16x16": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png",
                            "32x32": "https://secure.gravatar.com/avatar/767364cc5e888fe43b28068e582141e2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRR-1.png"
                        },
                        "displayName": "Ravula Pranay Kumar Reddy",
                        "active": true,
                        "timeZone": "Asia/Kolkata",
                        "accountType": "atlassian"
                    },
                    "comment": "Still facing issue connect with Pankaj & Tejas",
                    "created": "2024-06-03T04:27:24.805-0700",
                    "updated": "2024-06-03T04:27:24.805-0700",
                    "started": "2024-06-03T03:00:00.000-0700",
                    "timeSpent": "1h",
                    "timeSpentSeconds": 3600,
                    "id": "13377",
                    "issueId": "35505"
                }
            ]
        }
    }
}