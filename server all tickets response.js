/*
curl --location 'https://nextuple.atlassian.net/rest/api/3/search?jql=project%3DKTLO&startAt=0&maxResults=100&fields=priority%2Cstatus%2Csummary%2Caggregateprogress%2Cissuetype' \
--header 'Authorization: Basic cHJhbmF5LnJlZGR5QG5leHR1cGxlLmNvbTpBVEFUVDN4RmZHRjBQcElrcmFGellTWHdqN2hZRjFqX3BqV1NLNzNBbFN4VmQ2UjlrUGNSbk1uOWRmZmRSQ3RDUk1FX1lPZTkxNllpQm9NZkZCMEl2NnVHMjE3TnJQNVgyM2RhcGxYTXFQdE4zU2Z0S2RJZllaRXlCQ2VpQUVlbDRtMXc2NzhyTWoxRVAzRU9wajMybUdGNU13ZXlwbzZOVHN2SWxhWFFxMk9lYURxOEhHc0pzYVk9NUIzM0RCOUU=' \
--header 'Cookie: atlassian.xsrf.token=890802352e8e6df4a49c3f1e439b86527c4f1678_lin'
*/

const jiraAllTickets = {
    "expand": "schema,names",
    "startAt": 0,
    "maxResults": 50,
    "total": 313,
    "issues": [
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36822",
            "key": "KTLO-316",
            "fields": {
                "statuscategorychangedate": "2024-06-26T21:42:35.953-0700",
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
                "timespent": 14400,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 14400,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": true
                },
                "lastViewed": "2024-06-28T11:25:52.632-0700",
                "customfield_10060": null,
                "created": "2024-06-26T21:42:29.614-0700",
                "customfield_10061": null,
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
                "aggregatetimeoriginalestimate": null,
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
                "updated": "2024-06-27T23:45:07.490-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/statuses/generic.png",
                    "name": "In QA",
                    "id": "10021",
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
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Local run of following branches in the resolving-security-vulnerabilities"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-node"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-carrier"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-node-carrier"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-transit"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-calendar"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-postal-code"
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i04d13:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "[local run testing] Spring boot and mockito bumpup",
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
                "aggregateprogress": {
                    "progress": 14400,
                    "total": 14400,
                    "percent": 100
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
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
                    "progress": 14400,
                    "total": 14400,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36807",
            "key": "KTLO-315",
            "fields": {
                "statuscategorychangedate": "2024-06-26T05:02:59.464-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-26T05:02:58.833-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "July2024Release",
                    "SDD"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bfecf424db79672124417b",
                    "emailAddress": "sudheendra.panganamala@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png"
                    },
                    "displayName": "Sudheendra Panganamala",
                    "active": true,
                    "timeZone": "Asia/Calcutta",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-26T07:46:23.204-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Hello Team,"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Please reduce the replica count from 3 to 1 for sdd-portal-ui-uservice."
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                }
                            ]
                        },
                        {
                            "type": "codeBlock",
                            "attrs": {},
                            "content": [
                                {
                                    "type": "text",
                                    "text": "    prod:\n      ingress: yes\n      middleman: no\n      prometheus: no\n      scale:\n        replicas: 3\n      resources:\n        min:\n          memory: \"512Mi\"\n          cpu: \"500m\"\n        max:\n          memory: \"512Mi\"\n          cpu: \"500m\""
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Thanks & Regards,"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Suma Devadiga"
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i04cxz:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "sdd-portal-ui-uservice  : Reduce the replica count",
                "creator": {
                    "accountId": "642a9679729d7d06db74ca6f",
                    "emailAddress": "suma.devadiga@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png"
                    },
                    "displayName": "Suma Devadiga",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "642a9679729d7d06db74ca6f",
                    "emailAddress": "suma.devadiga@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png"
                    },
                    "displayName": "Suma Devadiga",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10048": null,
                "customfield_10004": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-06-28",
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36793",
            "key": "KTLO-314",
            "fields": {
                "statuscategorychangedate": "2024-06-26T02:21:33.005-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-26T02:21:32.694-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "July2024Release",
                    "PSE",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "33864",
                        "type": {
                            "id": "10003",
                            "name": "Relates",
                            "inward": "relates to",
                            "outward": "relates to",
                        },
                        "outwardIssue": {
                            "id": "36884",
                            "key": "NOMS-18",
                            "fields": {
                                "summary": "Increase in Promise Engine error count",
                                "status": {
                                    "description": "",
                                    "iconUrl": "https://nextuple.atlassian.net/",
                                    "name": "To Do",
                                    "id": "10215",
                                    "statusCategory": {
                                        "id": 2,
                                        "key": "new",
                                        "colorName": "blue-gray",
                                        "name": "To Do"
                                    }
                                },
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10136",
                                    "description": "A small, distinct piece of work.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                                    "name": "Task",
                                    "subtask": false,
                                    "avatarId": 10318,
                                    "entityId": "3fb362f8-63ef-4c87-aca2-c9f94919080a",
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-28T03:14:12.944-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Hi KTLO Team,"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "We are seeing more no of errors in Promise Engine after yesterday’s IV V2 deployment (25-06-24). Before deployment the count of these errors used to be less approx 10 per day. PFA the error count for before and after the deployment. Please help to validate the errors and take action accordingly. "
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "PFB the Error messages:"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "1. Error while executing inventory user exit."
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "2. Error: \"ConfigDataNotFoundException(errorCode=2000, lineId=null)\""
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "3. Unexpected exception occurred invoking async method: public void com.nextuple.promise.listener.ConsoleLogListener.receiveEvent(com.nextuple.promise.events.BaseEvent)"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Thanks"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Farheen"
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i04cuv:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "Increase in Promise Engine error count",
                "creator": {
                    "accountId": "712020:c669ed09-2ad6-4285-bda7-cbad0f345249",
                    "emailAddress": "farheen.siddiqui@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/37133948ded73f96cf11ce3e4ca4de72?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFS-5.png",
                        "24x24": "https://secure.gravatar.com/avatar/37133948ded73f96cf11ce3e4ca4de72?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFS-5.png",
                        "16x16": "https://secure.gravatar.com/avatar/37133948ded73f96cf11ce3e4ca4de72?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFS-5.png",
                        "32x32": "https://secure.gravatar.com/avatar/37133948ded73f96cf11ce3e4ca4de72?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFS-5.png"
                    },
                    "displayName": "Farheen Siddiqui",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "712020:c669ed09-2ad6-4285-bda7-cbad0f345249",
                    "emailAddress": "farheen.siddiqui@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/37133948ded73f96cf11ce3e4ca4de72?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFS-5.png",
                        "24x24": "https://secure.gravatar.com/avatar/37133948ded73f96cf11ce3e4ca4de72?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFS-5.png",
                        "16x16": "https://secure.gravatar.com/avatar/37133948ded73f96cf11ce3e4ca4de72?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFS-5.png",
                        "32x32": "https://secure.gravatar.com/avatar/37133948ded73f96cf11ce3e4ca4de72?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FFS-5.png"
                    },
                    "displayName": "Farheen Siddiqui",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{}",
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36791",
            "key": "KTLO-313",
            "fields": {
                "statuscategorychangedate": "2024-06-26T02:02:44.075-0700",
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
                "timespent": 34200,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 34200,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": "2024-06-28T06:28:16.918-0700",
                "watches": {
                    "watchCount": 1,
                    "isWatching": true
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-26T01:59:15.881-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
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
                "timeestimate": 0,
                "aggregatetimeoriginalestimate": null,
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
                "updated": "2024-06-28T05:30:29.774-0700",
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
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Working on SDD-monolithic, SDD-portal-dashboard-uservice, delivery-tracking-ui, sdd-portal-ui. "
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i04cuf:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 0,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "SDD Trivy vulnerability fix",
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
                "customfield_10120": null,
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
                "aggregateprogress": {
                    "progress": 34200,
                    "total": 34200,
                    "percent": 100
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 34200,
                    "total": 34200,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36785",
            "key": "KTLO-312",
            "fields": {
                "statuscategorychangedate": "2024-06-26T00:10:58.463-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-26T00:10:58.141-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "July2024Release",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-26T07:50:56.076-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Hello Team,"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "There is one observation after the June release:"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": " "
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "We are seeing the same events getting published multiple times for the same session ID."
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Attaching the session ID and events for reference:"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": " "
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Session id: 6DE832BE52820F3A986B28D88B7764EE|"
                                }
                            ]
                        },
                        {
                            "type": "orderedList",
                            "attrs": {
                                "order": 1
                            },
                            "content": [
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "OrderRequestEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "NodesScoreEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "NodeEligibilityEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "SourcingRulesEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "OrderRequestEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "OrderResponseEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "NodesScoreEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "NodeEligibilityEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "SourcingRulesEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "OrderRequestEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "OrderResponseEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "NodesScoreEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "NodeEligibilityEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "SourcingRulesEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "OrderRequestEvent"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "OrderResponseEvent"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Please check the issue ."
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Thanks & Regards,"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Suma Devadiga"
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i04ct3:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "PE : Duplicate Event Publishing Post-June Release Deployment",
                "creator": {
                    "accountId": "642a9679729d7d06db74ca6f",
                    "emailAddress": "suma.devadiga@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png"
                    },
                    "displayName": "Suma Devadiga",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "642a9679729d7d06db74ca6f",
                    "emailAddress": "suma.devadiga@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png"
                    },
                    "displayName": "Suma Devadiga",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{}",
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36769",
            "key": "KTLO-311",
            "fields": {
                "statuscategorychangedate": "2024-06-25T21:18:48.536-0700",
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
                "timespent": 7200,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 7200,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-25T21:18:48.527-0700",
                "workratio": 100,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-25T21:16:54.272-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 7200,
                "timeestimate": 0,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-25T21:19:30.934-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 7200,
                "description": null,
                "customfield_10010": [
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
                "customfield_10011": "0|i04cpj:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": "10000_*:*_1_*:*_114283_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "Create a trivy report on SKU",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "aggregateprogress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36747",
            "key": "KTLO-310",
            "fields": {
                "statuscategorychangedate": "2024-06-25T00:29:36.504-0700",
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
                "timespent": 6300,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 6300,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-25T00:29:36.491-0700",
                "workratio": -1,
                "watches": {
                    "watchCount": 2,
                    "isWatching": true
                },
                "lastViewed": "2024-06-25T00:59:50.597-0700",
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-24T23:15:11.468-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/low.svg",
                    "name": "Low",
                    "id": "4"
                },
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 0,
                "aggregatetimeoriginalestimate": null,
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
                "updated": "2024-06-25T00:57:28.713-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Run the trivy tool on arrivals-eventconsumer, arrivals-customer-ui, arrivals-store-associate-ui."
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i04cl3:",
                "customfield_10012": "2024-06-25T00:29:27.351-0700",
                "customfield_10056": null,
                "customfield_10013": "10181_*:*_1_*:*_2801_*|*_10020_*:*_1_*:*_4370476_*|*_10000_*:*_1_*:*_91780_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 0,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "[NLM] Analyse Security Vulnerabilities via Trivy tool",
                "creator": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 6300,
                    "total": 6300,
                    "percent": 100
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-06-25",
                "progress": {
                    "progress": 6300,
                    "total": 6300,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36675",
            "key": "KTLO-309",
            "fields": {
                "statuscategorychangedate": "2024-06-23T22:37:20.886-0700",
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
                "timespent": 34200,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 34200,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": "2024-06-25T00:58:36.113-0700",
                "watches": {
                    "watchCount": 1,
                    "isWatching": true
                },
                "customfield_10060": null,
                "created": "2024-06-23T22:37:11.533-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
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
                "updated": "2024-06-24T10:33:07.453-0700",
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
                "timeoriginalestimate": null,
                "description": null,
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04c5r:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 0,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "[PE-REGRESSION] Testing removal of vulnerable dependencies ",
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
                "customfield_10084": null,
                "customfield_10040": null,
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
                "aggregateprogress": {
                    "progress": 34200,
                    "total": 34200,
                    "percent": 100
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
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
                    "progress": 34200,
                    "total": 34200,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36674",
            "key": "KTLO-308",
            "fields": {
                "statuscategorychangedate": "2024-06-23T22:33:32.871-0700",
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
                "timespent": 7200,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 7200,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 100,
                "lastViewed": "2024-06-28T11:40:49.717-0700",
                "watches": {
                    "watchCount": 1,
                    "isWatching": true
                },
                "customfield_10060": null,
                "created": "2024-06-23T22:32:04.697-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 0,
                "aggregatetimeoriginalestimate": 7200,
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
                "updated": "2024-06-27T03:30:30.150-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/statuses/generic.png",
                    "name": "In QA",
                    "id": "10021",
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
                "timeoriginalestimate": 7200,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Removed all the ion-java dependencies in:"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-node"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-carrier"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-node-carrier"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-transit"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-calendar"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "pe-postal-code"
                                }
                            ]
                        }
                    ]
                },
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04c5j:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 0,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "Fixing vulnerabilities of aws-secrets-manager-config (ion-java)",
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
                "customfield_10084": null,
                "customfield_10040": null,
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
                "customfield_10000": "{}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36666",
            "key": "KTLO-307",
            "fields": {
                "statuscategorychangedate": "2024-06-23T21:38:56.183-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-23T21:38:55.836-0700",
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
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "July2024Release",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-23T21:56:11.397-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Issues in Triage UI-"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": " "
                                }
                            ]
                        },
                        {
                            "type": "orderedList",
                            "attrs": {
                                "order": 1
                            },
                            "content": [
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "If we remove auth context before making any api call, session expire popup does not appear."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "If we remove the auth context and hit backspace after making any api call, session expire popup does not appear."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Hitting DT api (hit enter without any reference id), without reference id is causing session expire popup with 403 error code."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Intermittenlty got FILE NOT Found error on searching with blank reference id."
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Issues in ManagementUI"
                                }
                            ]
                        },
                        {
                            "type": "orderedList",
                            "attrs": {
                                "order": 1
                            },
                            "content": [
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "If we remove auth context and click on add button from transit buffers screen, screen is going blank."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "I do not see yesterdays records in pre prod environment which was uploaded, neither in notifications tab nor in triage screen."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "On clicking on Save sourcing rule after session expire, the api call takes time since it is upload data api hit, so expire session popup comes little late."
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i04c3r:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "Issues in PE Management UI and Triage UI realted to session expire.",
                "creator": {
                    "accountId": "712020:175ab090-957d-404a-a2ca-33382f2744ad",
                    "emailAddress": "ayush.jain@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/04b913ad63c2406c657ac09454babffa?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "24x24": "https://secure.gravatar.com/avatar/04b913ad63c2406c657ac09454babffa?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "16x16": "https://secure.gravatar.com/avatar/04b913ad63c2406c657ac09454babffa?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "32x32": "https://secure.gravatar.com/avatar/04b913ad63c2406c657ac09454babffa?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png"
                    },
                    "displayName": "Ayush Jain",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "712020:175ab090-957d-404a-a2ca-33382f2744ad",
                    "emailAddress": "ayush.jain@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/04b913ad63c2406c657ac09454babffa?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "24x24": "https://secure.gravatar.com/avatar/04b913ad63c2406c657ac09454babffa?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "16x16": "https://secure.gravatar.com/avatar/04b913ad63c2406c657ac09454babffa?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "32x32": "https://secure.gravatar.com/avatar/04b913ad63c2406c657ac09454babffa?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png"
                    },
                    "displayName": "Ayush Jain",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36643",
            "key": "KTLO-306",
            "fields": {
                "statuscategorychangedate": "2024-06-21T01:08:38.183-0700",
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
                "timespent": 7200,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 7200,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 6,
                "lastViewed": null,
                "watches": {
                    "watchCount": 0,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-21T01:07:57.961-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 115200,
                "timeestimate": 108000,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.506-0700",
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
                "timeoriginalestimate": 115200,
                "description": null,
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04byv:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 108000,
                "summary": "Create trivy report for SDD services",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 7200,
                    "total": 115200,
                    "percent": 6
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
                    "progress": 7200,
                    "total": 115200,
                    "percent": 6
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36581",
            "key": "KTLO-305",
            "fields": {
                "statuscategorychangedate": "2024-06-21T00:56:32.325-0700",
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
                "timespent": 21600,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 21600,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-21T00:56:32.318-0700",
                "workratio": 300,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-19T23:20:24.035-0700",
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
                "aggregatetimeoriginalestimate": 7200,
                "timeestimate": 7200,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-21T00:57:38.494-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 7200,
                "description": null,
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
                    }
                ],
                "customfield_10011": "0|i04blz:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": "10000_*:*_1_*:*_92168319_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 7200,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "[SDD] - Regression for June release",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 21600,
                    "total": 28800,
                    "percent": 75
                },
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
                    "progress": 21600,
                    "total": 28800,
                    "percent": 75
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36562",
            "key": "KTLO-304",
            "fields": {
                "statuscategorychangedate": "2024-06-25T21:16:19.152-0700",
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
                "timespent": 21600,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 21600,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-25T21:16:19.144-0700",
                "workratio": 150,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-19T21:17:16.330-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "KTLO",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 14400,
                "timeestimate": 0,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-25T21:20:08.588-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 14400,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Ai of this task is to analyse and create a report for vulnarabilities in NCM services."
                                }
                            ]
                        }
                    ]
                },
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04bin:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": "10000_*:*_1_*:*_518342843_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 0,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "Create a trivy report on NCM services",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 21600,
                    "total": 21600,
                    "percent": 100
                },
                "customfield_10044": null,
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 21600,
                    "total": 21600,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36551",
            "key": "KTLO-303",
            "fields": {
                "statuscategorychangedate": "2024-06-19T11:17:01.447-0700",
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
                "timespent": 14400,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 14400,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 25,
                "watches": {
                    "watchCount": 0,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-19T11:17:01.038-0700",
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
                    "KTLO",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 57600,
                "timeestimate": 43200,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.506-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/",
                    "name": "Ready for Dev",
                    "id": "10181",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 57600,
                "description": null,
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04bg7:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 43200,
                "summary": "INV-BACKLOG-AUTOMATION - Node - item quantity",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "aggregateprogress": {
                    "progress": 14400,
                    "total": 57600,
                    "percent": 25
                },
                "customfield_10044": null,
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-06-28T12:15:11.343+0530\",\"stateCount\":1,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"bitbucket\":{\"count\":1,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
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
                    "progress": 14400,
                    "total": 57600,
                    "percent": 25
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36513",
            "key": "KTLO-302",
            "fields": {
                "statuscategorychangedate": "2024-06-25T21:10:13.632-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-25T21:10:13.625-0700",
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "created": "2024-06-19T02:53:41.955-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "June2024Release",
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-25T21:10:13.631-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Hi Team,"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "After the SDD-Monolithic release, we have noticed that sdd logs are not being received in the traces index in Data ELK. Please help to investigate this issue."
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Thanks,"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Ritesh Baghel"
                                }
                            ]
                        }
                    ]
                },
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
                    }
                ],
                "customfield_10011": "0|i04b7r:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": "10181_*:*_1_*:*_3097_*|*_400_*:*_1_*:*_4675_*|*_10020_*:*_1_*:*_3003_*|*_10000_*:*_1_*:*_441523861_*|*_10035_*:*_1_*:*_2368_*|*_10012_*:*_1_*:*_142654714_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": " Missing Logs in Traces Index Post SDD-Monolithic Release",
                "creator": {
                    "accountId": "63285aad8b75455be45297cf",
                    "emailAddress": "ritesh.baghel@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/52024d442b046a8f083db193e8e982de?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRB-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/52024d442b046a8f083db193e8e982de?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRB-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/52024d442b046a8f083db193e8e982de?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRB-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/52024d442b046a8f083db193e8e982de?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRB-6.png"
                    },
                    "displayName": "Ritesh Baghel",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63285aad8b75455be45297cf",
                    "emailAddress": "ritesh.baghel@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/52024d442b046a8f083db193e8e982de?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRB-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/52024d442b046a8f083db193e8e982de?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRB-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/52024d442b046a8f083db193e8e982de?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRB-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/52024d442b046a8f083db193e8e982de?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRB-6.png"
                    },
                    "displayName": "Ritesh Baghel",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=MERGED, stateCount=2}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":2,\"lastUpdated\":\"2024-06-24T12:19:39.195+0530\",\"stateCount\":2,\"state\":\"MERGED\",\"dataType\":\"pullrequest\",\"open\":false},\"byInstanceType\":{\"bitbucket\":{\"count\":2,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
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
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36485",
            "key": "KTLO-301",
            "fields": {
                "statuscategorychangedate": "2024-06-25T22:42:50.149-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 2,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-18T23:04:52.734-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-26T02:57:52.179-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/statuses/resolved.png",
                    "name": "Ready For Test",
                    "id": "10012",
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
                "timeoriginalestimate": null,
                "description": {
                    "type": "doc",
                    "version": 1,
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Service point creation without time zone Fails in integration  ENV with 500 ISE  but it passes in QA ENV and servicePoint is created "
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Expectation : service point should be created with null timezone "
                                }
                            ]
                        },
                        {
                            "type": "mediaSingle",
                            "content": [
                                {
                                    "type": "media",
                                    "attrs": {
                                        "type": "file",
                                        "id": "d199eda1-2094-40ad-bc95-f9c952eb78dc",
                                        "collection": "",
                                        "width": 1099,
                                        "height": 643,
                                        "alt": "image-20240619-060245.png"
                                    }
                                }
                            ],
                            "attrs": {
                                "layout": "align-start"
                            }
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": " "
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "/stores/storeNo19112521-TS02/service-points"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "input"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": " {"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"name\": \"storeNo19112521-TS02\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"fulfillmentType\": \"PICKUP\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"storeNo\": \"storeNo19112521-TS02\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"fulfillmentStoreNo\": \"storeNo19112521-TS02\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"dispenseStoreNo\": \"storeNo19112521-TS02\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"storeType\": \"STORE\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"timeZone\": \"\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"activeDate\": \"2024-06-19 04:00:00.000Z\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"websiteActiveDate\": \"2024-06-19 04:00:00.000Z\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"isTest\": false,"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"minCartAmount\": 0.0,"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"maxCapacity\": 0,"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"marketName\": \"Atlanta\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    \"address\": {"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "        \"addressLineOne\": \"abc\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "        \"addressLineTwo\": \"def\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "        \"city\": \"Atlanta\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "        \"state\": \"ghi\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "        \"country\": \"US\","
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "        \"zip\": \"00001\""
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "    }"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "}"
                                }
                            ]
                        }
                    ]
                },
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04b27:",
                "customfield_10056": null,
                "customfield_10012": "2024-06-26T02:57:43.201-0700",
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "NCM | Service point creation without time zone Fails in integration  ENV",
                "creator": {
                    "accountId": "608630f05797db0069574762",
                    "emailAddress": "akilesh.nr@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png"
                    },
                    "displayName": "Akilesh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "608630f05797db0069574762",
                    "emailAddress": "akilesh.nr@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png"
                    },
                    "displayName": "Akilesh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36478",
            "key": "KTLO-300",
            "fields": {
                "statuscategorychangedate": "2024-06-19T22:37:05.679-0700",
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
                "timespent": 108000,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 108000,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 75,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-18T22:01:15.762-0700",
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
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 144000,
                "timeestimate": 7200,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.507-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/bamboo.png",
                    "name": "PR Created",
                    "id": "400",
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
                "timeoriginalestimate": 144000,
                "description": null,
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04b0n:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 7200,
                "summary": "[PE] Resolving Security Vulnerabilities - Sainsbury",
                "creator": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=MERGED, stateCount=14}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":14,\"lastUpdated\":\"2024-06-28T10:32:35.330+0530\",\"stateCount\":14,\"state\":\"MERGED\",\"dataType\":\"pullrequest\",\"open\":false},\"byInstanceType\":{\"bitbucket\":{\"count\":14,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 108000,
                    "total": 115200,
                    "percent": 93
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 108000,
                    "total": 115200,
                    "percent": 93
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36445",
            "key": "KTLO-299",
            "fields": {
                "statuscategorychangedate": "2024-06-25T21:10:23.419-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-25T21:10:23.411-0700",
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 2,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-18T00:00:23.609-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
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
                    "June2024Release",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-25T21:10:23.418-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Hello Team,"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "We have observed that the credentials are unmasked in the logs. Attached are the logs for reference. Please assist in masking the username and password values."
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "{\"@timestamp\":\"2024-06-18T05:39:14.558Z\",\"@version\":\"1\",\"message\":\"Kafka consumer context interceptor configured with following configs : {key.deserializer=class org.apache.kafka.common.serialization.StringDeserializer, value.deserializer=class org.springframework.kafka.support.serializer.ErrorHandlingDeserializer, max.poll.records=50, group.id=cg-delivery-events-prod, client.rack=centralus, bootstrap.servers=["
                                },
                                {
                                    "type": "text",
                                    "text": "kbrk-cu.nextuple.net:9092",
                                    "marks": [
                                        {
                                            "type": "link",
                                            "attrs": {
                                                "href": "http://kbrk-cu.nextuple.net:9092"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "text": ", "
                                },
                                {
                                    "type": "text",
                                    "text": "kbrk-eu2-2.nextuple.net:9092",
                                    "marks": [
                                        {
                                            "type": "link",
                                            "attrs": {
                                                "href": "http://kbrk-eu2-2.nextuple.net:9092"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "text": "], security.protocol=SASL_PLAINTEXT, spring.json.trusted.packages=*, enable.auto.commit=true, sasl.mechanism=SCRAM-SHA-256, isolation.level=read_uncommitted, sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username=\\"
                                },
                                {
                                    "type": "text",
                                    "text": "\"grdsyuefdyusayfxya",
                                    "marks": [
                                        {
                                            "type": "textColor",
                                            "attrs": {
                                                "color": "#bf2600"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "text": "\\\" password=\\\""
                                },
                                {
                                    "type": "text",
                                    "text": "asgfyudfxyacxyt",
                                    "marks": [
                                        {
                                            "type": "textColor",
                                            "attrs": {
                                                "color": "#bf2600"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "text": "\\\";, interceptor.classes=com.nextuple.controltower.common.interceptor.KafkaConsumerContextInterceptor, spring.deserializer.value.delegate.class=org.springframework.kafka.support.serializer.JsonDeserializer, auto.offset.reset=latest, client.id=consumer-cg-delivery-events-prod-20}\",\"logger_name\":\"com.nextuple.controltower.common.interceptor.KafkaConsumerContextInterceptor\",\"thread_name\":\"main\",\"level\":\"INFO\",\"level_value\":20000}"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Thanks & Regards,"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Suma Devadiga"
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": null,
                "customfield_10011": "0|i04atj:",
                "customfield_10056": null,
                "customfield_10012": "2024-06-18T08:07:32.024-0700",
                "customfield_10013": "10181_*:*_1_*:*_2836_*|*_400_*:*_1_*:*_2438_*|*_10020_*:*_1_*:*_3942_*|*_10000_*:*_1_*:*_29234188_*|*_10035_*:*_1_*:*_7368_*|*_10012_*:*_1_*:*_651749067_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "SDD - Mask credentials in sdd-monolithic-service in prod",
                "creator": {
                    "accountId": "642a9679729d7d06db74ca6f",
                    "emailAddress": "suma.devadiga@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png"
                    },
                    "displayName": "Suma Devadiga",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "642a9679729d7d06db74ca6f",
                    "emailAddress": "suma.devadiga@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/3bbab1e062bef4ab84fd9fba768b39fc?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSD-0.png"
                    },
                    "displayName": "Suma Devadiga",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36378",
            "key": "KTLO-298",
            "fields": {
                "statuscategorychangedate": "2024-06-17T22:25:21.178-0700",
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
                "timespent": 43200,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 43200,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 100,
                "lastViewed": "2024-06-14T05:18:06.324-0700",
                "watches": {
                    "watchCount": 2,
                    "isWatching": true
                },
                "customfield_10060": null,
                "created": "2024-06-14T04:58:00.871-0700",
                "customfield_10061": null,
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
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 0,
                "aggregatetimeoriginalestimate": 43200,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.506-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/bamboo.png",
                    "name": "PR Created",
                    "id": "400",
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
                "timeoriginalestimate": 43200,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Comment node creation step in inv-api-automation, in all the testcases possible. Replace the dependancy with the existing nodes from test.properties."
                                }
                            ]
                        }
                    ]
                },
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04ag7:",
                "customfield_10056": null,
                "customfield_10012": "2024-06-17T22:25:49.398-0700",
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "[INV-BACKLOG-AUTOMATION-NODE-CREATION]",
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
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-06-28T16:59:29.340+0530\",\"stateCount\":1,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"bitbucket\":{\"count\":1,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "aggregateprogress": {
                    "progress": 43200,
                    "total": 43200,
                    "percent": 100
                },
                "customfield_10044": null,
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 43200,
                    "total": 43200,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36365",
            "key": "KTLO-297",
            "fields": {
                "statuscategorychangedate": "2024-06-14T00:49:58.892-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": "2024-06-28T05:02:55.783-0700",
                "watches": {
                    "watchCount": 3,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-14T00:49:58.547-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "July2024Release",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-26T06:41:02.134-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "type": "doc",
                    "version": 1,
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Steps:"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "1) Create a order outside of store working hours and observe the deliverydate of the order once it is scheduled"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Expected:"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Order should be  delivery scheduled the NextDay"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Actual:"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Order is delivery scheduled the sameday"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Order created date and time - June 14 18:00 IST which will be June 14 08:40 AM EST which is outside of working hours so expected delivery date should be June 15"
                                }
                            ]
                        },
                        {
                            "type": "mediaSingle",
                            "content": [
                                {
                                    "type": "media",
                                    "attrs": {
                                        "type": "file",
                                        "id": "79577839-b707-4c30-b78f-dd5d4258155f",
                                        "collection": "",
                                        "width": 502,
                                        "height": 472,
                                        "alt": "image (13).png"
                                    }
                                }
                            ],
                            "attrs": {
                                "layout": "align-start"
                            }
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "mediaSingle",
                            "content": [
                                {
                                    "type": "media",
                                    "attrs": {
                                        "type": "file",
                                        "id": "73e62019-3a44-497d-8a9c-52eeab9892b1",
                                        "collection": "",
                                        "width": 517,
                                        "height": 623,
                                        "alt": "image (12).png"
                                    }
                                }
                            ],
                            "attrs": {
                                "layout": "align-start"
                            }
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i04adb:",
                "customfield_10056": null,
                "customfield_10012": "2024-06-23T14:20:59.549-0700",
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "SDD | Onerail | Order created outside of working hours is scheduled for delivery the sameDay",
                "creator": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36361",
            "key": "KTLO-296",
            "fields": {
                "statuscategorychangedate": "2024-06-21T01:05:53.238-0700",
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
                "timespent": 14400,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 14400,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 0,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-14T00:11:37.563-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": 0,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.549-0700",
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
                "timeoriginalestimate": null,
                "description": null,
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i04acf:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "Inventory - KT videos",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 14400,
                    "total": 14400,
                    "percent": 100
                },
                "customfield_10044": null,
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 14400,
                    "total": 14400,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36355",
            "key": "KTLO-295",
            "fields": {
                "statuscategorychangedate": "2024-06-13T23:14:43.880-0700",
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
                "timespent": 18000,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 18000,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-13T23:14:43.873-0700",
                "workratio": 100,
                "lastViewed": null,
                "watches": {
                    "watchCount": 0,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-13T21:31:50.500-0700",
                "customfield_10061": null,
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
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 0,
                "aggregatetimeoriginalestimate": 18000,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-21T00:58:52.347-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 18000,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Validate the SDD portal for the automation run."
                                }
                            ]
                        }
                    ]
                },
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
                    }
                ],
                "customfield_10011": "0|i04ab3:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": "10000_*:*_1_*:*_6173398_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "Validating the UI for the updated scripts",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 18000,
                    "total": 18000,
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
                    "progress": 18000,
                    "total": 18000,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36354",
            "key": "KTLO-294",
            "fields": {
                "statuscategorychangedate": "2024-06-13T21:35:05.206-0700",
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
                "timespent": 18000,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 18000,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-13T21:35:05.197-0700",
                "workratio": 100,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-13T21:29:41.089-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 18000,
                "timeestimate": 0,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-21T00:59:20.296-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 18000,
                "description": null,
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
                    }
                ],
                "customfield_10011": "0|i04aav:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": "10000_*:*_1_*:*_324140_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "Onerail migration - Manual testing",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 18000,
                    "total": 18000,
                    "percent": 100
                },
                "customfield_10000": "{}",
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
                    "progress": 18000,
                    "total": 18000,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36294",
            "key": "KTLO-293",
            "fields": {
                "statuscategorychangedate": "2024-06-12T00:27:41.779-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": "2024-06-18T22:04:59.274-0700",
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-12T00:27:40.543-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/highest.svg",
                    "name": "Highest",
                    "id": "1"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bfecf424db79672124417b",
                    "emailAddress": "sudheendra.panganamala@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png"
                    },
                    "displayName": "Sudheendra Panganamala",
                    "active": true,
                    "timeZone": "Asia/Calcutta",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.805-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "type": "doc",
                    "version": 1,
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Store address data needs to be encrypted and stored in DB currently store address data are not "
                                }
                            ]
                        },
                        {
                            "type": "mediaSingle",
                            "content": [
                                {
                                    "type": "media",
                                    "attrs": {
                                        "type": "file",
                                        "id": "cbcd95ff-7b07-485c-9739-8484e55ccd74",
                                        "collection": "",
                                        "width": 1920,
                                        "height": 880,
                                        "alt": "Screenshot from 2024-06-12 12-50-58.png"
                                    }
                                }
                            ],
                            "attrs": {
                                "layout": "align-start"
                            }
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": " encrypted "
                                }
                            ]
                        }
                    ]
                },
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i049yv:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "NCM | Store address data are not encrypted  in DBs",
                "creator": {
                    "accountId": "608630f05797db0069574762",
                    "emailAddress": "akilesh.nr@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png"
                    },
                    "displayName": "Akilesh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "608630f05797db0069574762",
                    "emailAddress": "akilesh.nr@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/d25c25c21d24b771592d2d7b49b113b5?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FA-0.png"
                    },
                    "displayName": "Akilesh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "customfield_10000": "{branch={count=1, dataType=branch}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"branch\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-05-23T18:55:42.000+0530\",\"dataType\":\"branch\"},\"byInstanceType\":{\"bitbucket\":{\"count\":1,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
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
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36275",
            "key": "KTLO-292",
            "fields": {
                "statuscategorychangedate": "2024-06-11T22:02:48.216-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-11T22:02:36.476-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "33203",
                        "type": {
                            "id": "10003",
                            "name": "Relates",
                            "inward": "relates to",
                            "outward": "relates to",
                        },
                        "inwardIssue": {
                            "id": "31640",
                            "key": "KTLO-23",
                            "fields": {
                                "summary": "Observed 403 kong error occurred in the URI  \"/promising-engine/pe-data-upload/org/SIGNET/jobs/filters\"",
                                "status": {
                                    "description": "",
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                                    "name": "Done",
                                    "id": "10001",
                                    "statusCategory": {
                                        "id": 3,
                                        "key": "done",
                                        "colorName": "green",
                                        "name": "Done"
                                    }
                                },
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10001",
                                    "description": "A task that needs to be done.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                                    "name": "Task",
                                    "subtask": false,
                                    "avatarId": 10318,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.809-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/statuses/generic.png",
                    "name": "PR Merged",
                    "id": "10035",
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
                "timeoriginalestimate": null,
                "description": null,
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i049un:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "[PE] Adding a 30 sec wait after session expires before redirecting to login page",
                "creator": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=MERGED, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-06-14T15:24:27.414+0530\",\"stateCount\":1,\"state\":\"MERGED\",\"dataType\":\"pullrequest\",\"open\":false},\"byInstanceType\":{\"bitbucket\":{\"count\":1,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-06-13",
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36271",
            "key": "KTLO-291",
            "fields": {
                "statuscategorychangedate": "2024-06-14T00:50:02.932-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-14T00:50:02.923-0700",
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 2,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-11T20:45:08.101-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/high.svg",
                    "name": "High",
                    "id": "2"
                },
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "6418541f6b29c052ab2da160",
                    "emailAddress": "rajesh.srinivasan@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6418541f6b29c052ab2da160/e241869d-8708-496d-b3a8-88dadd9728bb/48",
                        "24x24": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6418541f6b29c052ab2da160/e241869d-8708-496d-b3a8-88dadd9728bb/24",
                        "16x16": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6418541f6b29c052ab2da160/e241869d-8708-496d-b3a8-88dadd9728bb/16",
                        "32x32": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6418541f6b29c052ab2da160/e241869d-8708-496d-b3a8-88dadd9728bb/32"
                    },
                    "displayName": "Raj Srinivasan (Raj)",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-14T00:50:02.931-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Unable to reschedule the SDD one rail order post onerail webhook calls."
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Steps:"
                                }
                            ]
                        },
                        {
                            "type": "orderedList",
                            "attrs": {
                                "order": 1
                            },
                            "content": [
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Create OneRail Order"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Assign driver - Reschedule order and verify the order status"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Driver to pickup location - Reschedule order and verify the order status"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Driver picked up - Reschedule order and verify the order status"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Driver to delivery location - Reschedule order and verify the order status"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Expected:"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Order should be rescheduled and status should be updated to Delivery scheduled"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Actual:"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Order is not getting rescheduled"
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": null,
                "customfield_10011": "0|i049tr:",
                "customfield_10012": "2024-06-12T09:04:11.089-0700",
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": "10000_*:*_1_*:*_187494853_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "QA || SDD || OneRail - Unable to reschedule the order post onerail webhooks calls",
                "creator": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
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
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36270",
            "key": "KTLO-290",
            "fields": {
                "statuscategorychangedate": "2024-06-12T03:09:57.459-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-11T20:43:35.582-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/highest.svg",
                    "name": "Highest",
                    "id": "1"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "July2024Release",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-23T21:56:34.179-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/bamboo.png",
                    "name": "PR Created",
                    "id": "400",
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
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "PII data is not encrypted in below dbs:"
                                },
                                {
                                    "type": "hardBreak"
                                }
                            ]
                        },
                        {
                            "type": "orderedList",
                            "attrs": {
                                "order": 1
                            },
                            "content": [
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Delivery Event Logs - Driver name and contact number"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Delivery Webhook Logs - Raw request, raw response"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Delivery Information - Delivery location, pickup location, driver information"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
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
                "customfield_10011": "0|i049tj:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "SDD | PII data is not encrypted in few DBs",
                "creator": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=3}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":3,\"lastUpdated\":\"2024-06-27T10:20:42.432+0530\",\"stateCount\":3,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"bitbucket\":{\"count\":3,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
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
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36265",
            "key": "KTLO-289",
            "fields": {
                "statuscategorychangedate": "2024-06-11T21:54:16.355-0700",
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
                "timespent": 10800,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 10800,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 100,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "created": "2024-06-11T06:30:53.370-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "HotFix",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 10800,
                "timeestimate": 0,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-21T00:59:59.233-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 10800,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "In OrderDeliveryDetail POJO, the rawRequest and rawResponse which may contain customer information is stored as plain strings. Since this is a information security issue, the two fields will be encrypted."
                                }
                            ]
                        }
                    ]
                },
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
                    }
                ],
                "customfield_10011": "0|i049sf:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "[SDD] Encrypting rawResponse and rawRequest fields",
                "creator": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 10800,
                    "total": 10800,
                    "percent": 100
                },
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
                    "progress": 10800,
                    "total": 10800,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36230",
            "key": "KTLO-288",
            "fields": {
                "statuscategorychangedate": "2024-06-13T21:30:25.053-0700",
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
                "timespent": 57600,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 57600,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-13T21:30:25.046-0700",
                "workratio": 100,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "created": "2024-06-10T08:21:39.579-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 0,
                "aggregatetimeoriginalestimate": 57600,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-21T01:00:51.116-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 57600,
                "description": null,
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
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i049kn:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": "10181_*:*_1_*:*_4883_*|*_10020_*:*_1_*:*_306504757_*|*_10000_*:*_1_*:*_15853_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "Updating automation scripts for Onerail-CANADA",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 57600,
                    "total": 57600,
                    "percent": 100
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 57600,
                    "total": 57600,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36229",
            "key": "KTLO-287",
            "fields": {
                "statuscategorychangedate": "2024-06-13T21:30:45.094-0700",
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
                "timespent": 57600,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 57600,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-13T21:30:45.087-0700",
                "workratio": 100,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-10T08:20:44.277-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 57600,
                "timeestimate": 0,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-21T01:01:11.678-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 57600,
                "description": null,
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
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i049kf:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": "10181_*:*_1_*:*_2337_*|*_10020_*:*_1_*:*_306591229_*|*_10000_*:*_1_*:*_7272_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "Updating automation scripts for Onerail-US",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 57600,
                    "total": 57600,
                    "percent": 100
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 57600,
                    "total": 57600,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36226",
            "key": "KTLO-286",
            "fields": {
                "statuscategorychangedate": "2024-06-10T06:05:14.887-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-10T06:05:14.538-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/highest.svg",
                    "name": "Highest",
                    "id": "1"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "61d205f59ee70a0068481edd",
                    "emailAddress": "shashank.pakhare@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/892e0d23dcb8e15412b4199b37a5a79a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-1.png",
                        "24x24": "https://secure.gravatar.com/avatar/892e0d23dcb8e15412b4199b37a5a79a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-1.png",
                        "16x16": "https://secure.gravatar.com/avatar/892e0d23dcb8e15412b4199b37a5a79a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-1.png",
                        "32x32": "https://secure.gravatar.com/avatar/892e0d23dcb8e15412b4199b37a5a79a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-1.png"
                    },
                    "displayName": "Shashank Pakhare",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-10T07:06:51.243-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Rebooking an order post cancellation is going to Invalid status"
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": null,
                "customfield_10011": "0|i049jr:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "SDD | Roadie -> OneRail migration Rebook isnt working",
                "creator": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
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
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "36100",
            "key": "KTLO-285",
            "fields": {
                "statuscategorychangedate": "2024-06-05T22:44:13.813-0700",
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
                "timespent": 21600,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 21600,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 75,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-05T21:26:00.432-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 7200,
                "aggregatetimeoriginalestimate": 28800,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.854-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/bamboo.png",
                    "name": "PR Created",
                    "id": "400",
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
                "timeoriginalestimate": 28800,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Integrating endpoint to perform soft deletion of stores."
                                }
                            ]
                        }
                    ]
                },
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
                "customfield_10011": "0|i048tb:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 7200,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "[SDD] Store Automation - Deletion of Stores",
                "creator": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 21600,
                    "total": 28800,
                    "percent": 75
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=2}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":2,\"lastUpdated\":\"2024-06-19T14:14:36.022+0530\",\"stateCount\":2,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"bitbucket\":{\"count\":2,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10048": null,
                "customfield_10004": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-06-07",
                "progress": {
                    "progress": 21600,
                    "total": 28800,
                    "percent": 75
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35975",
            "key": "KTLO-284",
            "fields": {
                "statuscategorychangedate": "2024-06-23T23:34:33.108-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-23T23:34:33.101-0700",
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 2,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-06-04T21:24:23.064-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "June2024Release",
                    "KTLO",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-23T23:34:33.107-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": null,
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
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i0483b:",
                "customfield_10012": "2024-06-20T05:19:51.390-0700",
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": "10181_*:*_1_*:*_11577_*|*_400_*:*_1_*:*_149853787_*|*_10020_*:*_1_*:*_3599_*|*_10000_*:*_1_*:*_1147012624_*|*_10035_*:*_1_*:*_13072_*|*_10012_*:*_1_*:*_352515411_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "Resolving issue in pe-traige-ui regarding the mozilla observatory score",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10044": null,
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-06-05",
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35887",
            "key": "KTLO-283",
            "fields": {
                "statuscategorychangedate": "2024-06-07T02:30:27.667-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 0,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-06-03T03:14:54.247-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.909-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/statuses/generic.png",
                    "name": "PR Merged",
                    "id": "10035",
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
                "timeoriginalestimate": null,
                "description": null,
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
                "customfield_10011": "0|i047lb:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "Migrate pojos to common library",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=MERGED, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-06-05T09:51:13.070+0530\",\"stateCount\":1,\"state\":\"MERGED\",\"dataType\":\"pullrequest\",\"open\":false},\"byInstanceType\":{\"bitbucket\":{\"count\":1,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
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
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35864",
            "key": "KTLO-282",
            "fields": {
                "statuscategorychangedate": "2024-06-23T22:25:17.009-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-23T22:25:16.999-0700",
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": true
                },
                "lastViewed": "2024-06-23T21:49:45.573-0700",
                "customfield_10060": null,
                "created": "2024-06-02T21:58:56.199-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
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
                "updated": "2024-06-23T22:25:17.009-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": null,
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
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i047gv:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": "10181_*:*_1_*:*_3336_*|*_10020_*:*_1_*:*_2997_*|*_10000_*:*_1_*:*_1815974497_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "SDD perf script fix",
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
                "customfield_10120": null,
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
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{}",
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
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35797",
            "key": "KTLO-281",
            "fields": {
                "statuscategorychangedate": "2024-05-31T06:15:31.067-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": true
                },
                "lastViewed": "2024-06-19T01:47:02.653-0700",
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-05-31T06:15:30.655-0700",
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
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "32627",
                        "type": {
                            "id": "10003",
                            "name": "Relates",
                            "inward": "relates to",
                            "outward": "relates to",
                        },
                        "inwardIssue": {
                            "id": "34172",
                            "key": "KTLO-180",
                            "fields": {
                                "summary": "Deletion of zipcode from market region",
                                "status": {
                                    "description": "",
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                                    "name": "Done",
                                    "id": "10001",
                                    "statusCategory": {
                                        "id": 3,
                                        "key": "done",
                                        "colorName": "green",
                                        "name": "Done"
                                    }
                                },
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10004",
                                    "description": "A problem which impairs or prevents the functions of the product.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                                    "name": "Bug",
                                    "subtask": false,
                                    "avatarId": 10303,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
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
                "updated": "2024-06-06T06:05:54.002-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "We configure ZipCodes with both space after the prefix & without space. So, space factor should also be considered for the validation."
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": null,
                "customfield_10011": "0|i04733:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "Space in the ZipCode should be accepted for the sourcingNode & destination validations",
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
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
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
                "customfield_10000": "{branch={count=1, dataType=branch}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"branch\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-05-31T14:50:44.000+0530\",\"dataType\":\"branch\"},\"byInstanceType\":{\"bitbucket\":{\"count\":1,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10044": null,
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35783",
            "key": "KTLO-280",
            "fields": {
                "statuscategorychangedate": "2024-06-04T12:54:38.135-0700",
                "issuetype": {
                    "id": "10003",
                    "description": "Stories track functionality or features expressed as user goals.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    "name": "Story",
                    "subtask": false,
                    "avatarId": 10315,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "created": "2024-05-31T02:28:05.949-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10016": null,
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "32615",
                        "type": {
                            "id": "10003",
                            "name": "Relates",
                            "inward": "relates to",
                            "outward": "relates to",
                        },
                        "inwardIssue": {
                            "id": "34018",
                            "key": "KTLO-163",
                            "fields": {
                                "summary": "SDD: Enhance the SDD portal to include multiple filters for searching orders.",
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
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10001",
                                    "description": "A task that needs to be done.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                                    "name": "Task",
                                    "subtask": false,
                                    "avatarId": 10318,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-04T12:54:38.134-0700",
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
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "The order screens should have the functionality to export data to Excel directly from within the SDD portal "
                                }
                            ]
                        }
                    ]
                },
                "customfield_10054": null,
                "customfield_10010": null,
                "customfield_10011": "0|i046zz:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "Add functionality to export data to Excel directly from within the SDD portal (Add a button named ‘Export’ on each tab).",
                "creator": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=2}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":2,\"lastUpdated\":\"2024-06-27T14:52:24.464+0530\",\"stateCount\":2,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"bitbucket\":{\"count\":2,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
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
                "duedate": "2024-06-05",
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35782",
            "key": "KTLO-279",
            "fields": {
                "statuscategorychangedate": "2024-06-03T13:33:05.055-0700",
                "issuetype": {
                    "id": "10003",
                    "description": "Stories track functionality or features expressed as user goals.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                    "name": "Story",
                    "subtask": false,
                    "avatarId": 10315,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "created": "2024-05-31T02:25:46.986-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10016": null,
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "32614",
                        "type": {
                            "id": "10003",
                            "name": "Relates",
                            "inward": "relates to",
                            "outward": "relates to",
                        },
                        "inwardIssue": {
                            "id": "34018",
                            "key": "KTLO-163",
                            "fields": {
                                "summary": "SDD: Enhance the SDD portal to include multiple filters for searching orders.",
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
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10001",
                                    "description": "A task that needs to be done.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                                    "name": "Task",
                                    "subtask": false,
                                    "avatarId": 10318,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-04T12:54:29.436-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/bamboo.png",
                    "name": "PR Created",
                    "id": "400",
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
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "The api should be able to query through the orders using multiple added filters : "
                                }
                            ]
                        },
                        {
                            "type": "bulletList",
                            "content": [
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": " Date Range filter "
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Cancel Code filter"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Cancel Reason filter (enable wildcard search , eg. %distance% )"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Invalid Reason filter ( enable wildcard search for this as well )"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": null,
                "customfield_10054": null,
                "customfield_10011": "0|i046zr:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "Enhance the existing arrival filters to filter to add - cancellation code , cancellation Reason , invalid reason , date range filters",
                "creator": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=MERGED, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-06-05T17:21:19.831+0530\",\"stateCount\":1,\"state\":\"MERGED\",\"dataType\":\"pullrequest\",\"open\":false},\"byInstanceType\":{\"bitbucket\":{\"count\":1,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "customfield_10044": null,
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-06-05",
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35757",
            "key": "KTLO-278",
            "fields": {
                "statuscategorychangedate": "2024-05-30T22:46:37.627-0700",
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
                "timespent": 7200,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 7200,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-05-30T22:46:37.620-0700",
                "workratio": 100,
                "lastViewed": "2024-06-06T03:44:06.012-0700",
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-05-30T22:43:35.342-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 7200,
                "timeestimate": 0,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-02T20:52:10.490-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 7200,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Testing service points created before and after elasticsearch upgrade to ensure that no data loss has occurred."
                                }
                            ]
                        },
                        {
                            "type": "bulletList",
                            "content": [
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Deploying ES:6 code to QA"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Creating 6 service points and activating two of them"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Deploying Es:8 code to QA"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Ensuring newly created service points show up in their respective active and draft pages"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "Activating draft stores and stepping up active stores"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
                    {
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i046u7:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": "10181_*:*_1_*:*_4704_*|*_10020_*:*_1_*:*_4260_*|*_10000_*:*_1_*:*_173342_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 0,
                "summary": "[NCM] Testing service points created before and after Es upgrade",
                "creator": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10048": null,
                "customfield_10004": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-05-28",
                "progress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35748",
            "key": "KTLO-277",
            "fields": {
                "statuscategorychangedate": "2024-05-30T18:53:24.213-0700",
                "issuetype": {
                    "id": "10002",
                    "description": "The sub-task of the issue",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    "name": "Sub-task",
                    "subtask": true,
                    "avatarId": 10316,
                    "hierarchyLevel": -1
                },
                "parent": {
                    "id": "35746",
                    "key": "KTLO-275",
                    "fields": {
                        "summary": "UI changes to enhance SDD portal for advance filters",
                        "status": {
                            "description": "",
                            "iconUrl": "https://nextuple.atlassian.net/images/icons/bamboo.png",
                            "name": "PR Created",
                            "id": "400",
                            "statusCategory": {
                                "id": 4,
                                "key": "indeterminate",
                                "colorName": "yellow",
                                "name": "In Progress"
                            }
                        },
                        "priority": {
                            "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                            "name": "Medium",
                            "id": "3"
                        },
                        "issuetype": {
                            "id": "10001",
                            "description": "A task that needs to be done.",
                            "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            "name": "Task",
                            "subtask": false,
                            "avatarId": 10318,
                            "hierarchyLevel": 0
                        }
                    }
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-05-30T18:53:23.836-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": null,
                "updated": "2024-05-30T18:53:24.329-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": null,
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
                "customfield_10011": "0|i046s7:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "Implementation of the advance filters in the SDD portal",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35747",
            "key": "KTLO-276",
            "fields": {
                "statuscategorychangedate": "2024-05-30T18:53:08.166-0700",
                "issuetype": {
                    "id": "10002",
                    "description": "The sub-task of the issue",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                    "name": "Sub-task",
                    "subtask": true,
                    "avatarId": 10316,
                    "hierarchyLevel": -1
                },
                "parent": {
                    "id": "35746",
                    "key": "KTLO-275",
                    "fields": {
                        "summary": "UI changes to enhance SDD portal for advance filters",
                        "status": {
                            "description": "",
                            "iconUrl": "https://nextuple.atlassian.net/images/icons/bamboo.png",
                            "name": "PR Created",
                            "id": "400",
                            "statusCategory": {
                                "id": 4,
                                "key": "indeterminate",
                                "colorName": "yellow",
                                "name": "In Progress"
                            }
                        },
                        "priority": {
                            "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                            "name": "Medium",
                            "id": "3"
                        },
                        "issuetype": {
                            "id": "10001",
                            "description": "A task that needs to be done.",
                            "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                            "name": "Task",
                            "subtask": false,
                            "avatarId": 10318,
                            "hierarchyLevel": 0
                        }
                    }
                },
                "customfield_10070": null,
                "timespent": 7200,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 7200,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 66,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-05-30T18:53:07.834-0700",
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
                "labels": [],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 3600,
                "aggregatetimeoriginalestimate": 10800,
                "versions": [],
                "issuelinks": [],
                "assignee": null,
                "updated": "2024-05-30T18:55:29.504-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/",
                    "name": "In Business Review",
                    "id": "10179",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 10800,
                "description": null,
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
                "customfield_10011": "0|i046rz:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 3600,
                "summary": "Design of the advance filters for SDD portal",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 7200,
                    "total": 10800,
                    "percent": 66
                },
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
                    "progress": 7200,
                    "total": 10800,
                    "percent": 66
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35746",
            "key": "KTLO-275",
            "fields": {
                "statuscategorychangedate": "2024-06-05T11:43:10.846-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 7200,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 0,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": "2024-06-06T06:08:41.731-0700",
                "customfield_10060": null,
                "created": "2024-05-30T18:52:29.145-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "July2024Release",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 86400,
                "aggregatetimeoriginalestimate": 97200,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "32601",
                        "type": {
                            "id": "10003",
                            "name": "Relates",
                            "inward": "relates to",
                            "outward": "relates to",
                        },
                        "inwardIssue": {
                            "id": "34018",
                            "key": "KTLO-163",
                            "fields": {
                                "summary": "SDD: Enhance the SDD portal to include multiple filters for searching orders.",
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
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10001",
                                    "description": "A task that needs to be done.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                                    "name": "Task",
                                    "subtask": false,
                                    "avatarId": 10318,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-24T02:08:53.950-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/bamboo.png",
                    "name": "PR Created",
                    "id": "400",
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
                "timeoriginalestimate": 86400,
                "description": null,
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
                "customfield_10011": "0|i046rr:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 90000,
                "summary": "UI changes to enhance SDD portal for advance filters",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [
                    {
                        "id": "35747",
                        "key": "KTLO-276",
                        "fields": {
                            "summary": "Design of the advance filters for SDD portal",
                            "status": {
                                "description": "",
                                "iconUrl": "https://nextuple.atlassian.net/",
                                "name": "In Business Review",
                                "id": "10179",
                                "statusCategory": {
                                    "id": 2,
                                    "key": "new",
                                    "colorName": "blue-gray",
                                    "name": "To Do"
                                }
                            },
                            "priority": {
                                "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                "name": "Medium",
                                "id": "3"
                            },
                            "issuetype": {
                                "id": "10002",
                                "description": "The sub-task of the issue",
                                "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                                "name": "Sub-task",
                                "subtask": true,
                                "avatarId": 10316,
                                "hierarchyLevel": -1
                            }
                        }
                    },
                    {
                        "id": "35748",
                        "key": "KTLO-277",
                        "fields": {
                            "summary": "Implementation of the advance filters in the SDD portal",
                            "status": {
                                "description": "",
                                "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                                "name": "To Do",
                                "id": "10000",
                                "statusCategory": {
                                    "id": 2,
                                    "key": "new",
                                    "colorName": "blue-gray",
                                    "name": "To Do"
                                }
                            },
                            "priority": {
                                "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                "name": "Medium",
                                "id": "3"
                            },
                            "issuetype": {
                                "id": "10002",
                                "description": "The sub-task of the issue",
                                "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10316?size=medium",
                                "name": "Sub-task",
                                "subtask": true,
                                "avatarId": 10316,
                                "hierarchyLevel": -1
                            }
                        }
                    }
                ],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2024-06-27T13:35:32.211+0530\",\"stateCount\":1,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"bitbucket\":{\"count\":1,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 7200,
                    "total": 97200,
                    "percent": 7
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-06-06",
                "progress": {
                    "progress": 0,
                    "total": 86400,
                    "percent": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35745",
            "key": "KTLO-274",
            "fields": {
                "statuscategorychangedate": "2024-06-23T21:58:27.753-0700",
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
                "timespent": 7200,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 7200,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-23T21:58:27.748-0700",
                "workratio": 100,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": null,
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-05-30T18:48:45.615-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
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
                    "KTLO",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": 7200,
                "timeestimate": 0,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-23T21:58:27.752-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 7200,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "As per the request from the signet DOM team, change the configuration to migrate IV v2 from DEV3 to DEV2."
                                }
                            ]
                        }
                    ]
                },
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
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i046rj:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": "10181_*:*_1_*:*_9808_*|*_400_*:*_1_*:*_356312522_*|*_10020_*:*_1_*:*_2647_*|*_10000_*:*_1_*:*_10228_*|*_10035_*:*_1_*:*_3330_*|*_10012_*:*_1_*:*_1728643635_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 0,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "MIgration of IV v2 to DEV2",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
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
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35739",
            "key": "KTLO-273",
            "fields": {
                "statuscategorychangedate": "2024-06-23T21:58:35.677-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": 1800,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": 1800,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-23T21:58:35.672-0700",
                "workratio": 50,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": "2024-06-06T06:07:27.892-0700",
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-05-30T04:36:52.778-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10064": null,
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "June2024Release",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 1800,
                "aggregatetimeoriginalestimate": 3600,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "32594",
                        "type": {
                            "id": "10003",
                            "name": "Relates",
                            "inward": "relates to",
                            "outward": "relates to",
                        },
                        "inwardIssue": {
                            "id": "34017",
                            "key": "KTLO-162",
                            "fields": {
                                "summary": "SDD: Enhance SDD Portal to include completed orders ",
                                "status": {
                                    "description": "",
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                                    "name": "Done",
                                    "id": "10001",
                                    "statusCategory": {
                                        "id": 3,
                                        "key": "done",
                                        "colorName": "green",
                                        "name": "Done"
                                    }
                                },
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10001",
                                    "description": "A task that needs to be done.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium",
                                    "name": "Task",
                                    "subtask": false,
                                    "avatarId": 10318,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "6368de294bca78179baa31fb",
                    "emailAddress": "vaibhav.singh@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "24x24": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "16x16": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png",
                        "32x32": "https://secure.gravatar.com/avatar/8c6ac51f54a0f5525ba6b95acb975dc4?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FVS-6.png"
                    },
                    "displayName": "Vaibhav Singh",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-23T21:58:35.676-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": 3600,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "We would like to have a few updates to our new completed orders tab. Below are the changes we require:"
                                }
                            ]
                        },
                        {
                            "type": "bulletList",
                            "content": [
                                {
                                    "type": "listItem",
                                    "content": [
                                        {
                                            "type": "paragraph",
                                            "content": [
                                                {
                                                    "type": "text",
                                                    "text": "The values will be only in days , instead of week and month, ranging from 1 day to 30 days."
                                                },
                                                {
                                                    "type": "hardBreak"
                                                },
                                                {
                                                    "type": "hardBreak"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "cc: "
                                                },
                                                {
                                                    "type": "mention",
                                                    "attrs": {
                                                        "id": "6418541f6b29c052ab2da160",
                                                        "text": "@Raj Srinivasan (Raj)",
                                                        "accessLevel": ""
                                                    }
                                                },
                                                {
                                                    "type": "text",
                                                    "text": " "
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
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
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i046q7:",
                "customfield_10012": "2024-05-30T23:25:56.448-0700",
                "customfield_10056": null,
                "customfield_10013": "10181_*:*_1_*:*_3255_*|*_400_*:*_1_*:*_6308496_*|*_10020_*:*_1_*:*_2903_*|*_10000_*:*_1_*:*_61325373_*|*_10035_*:*_1_*:*_2737_*|*_10012_*:*_1_*:*_2068460155_*|*_10001_*:*_1_*:*_0",
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 1800,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "SDD: Few changes in completed orders tab in SDD portal",
                "creator": {
                    "accountId": "712020:ec5d81e4-6463-41af-ac9e-9ce454009b4b",
                    "emailAddress": "ayushi.jain@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1fbc74a44e7bea5bee327ff981ff1517?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "24x24": "https://secure.gravatar.com/avatar/1fbc74a44e7bea5bee327ff981ff1517?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "16x16": "https://secure.gravatar.com/avatar/1fbc74a44e7bea5bee327ff981ff1517?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "32x32": "https://secure.gravatar.com/avatar/1fbc74a44e7bea5bee327ff981ff1517?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png"
                    },
                    "displayName": "Ayushi Jain",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "712020:ec5d81e4-6463-41af-ac9e-9ce454009b4b",
                    "emailAddress": "ayushi.jain@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1fbc74a44e7bea5bee327ff981ff1517?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "24x24": "https://secure.gravatar.com/avatar/1fbc74a44e7bea5bee327ff981ff1517?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "16x16": "https://secure.gravatar.com/avatar/1fbc74a44e7bea5bee327ff981ff1517?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png",
                        "32x32": "https://secure.gravatar.com/avatar/1fbc74a44e7bea5bee327ff981ff1517?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAJ-2.png"
                    },
                    "displayName": "Ayushi Jain",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10044": null,
                "customfield_10000": "{pullrequest={dataType=pullrequest, state=MERGED, stateCount=2}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":2,\"lastUpdated\":\"2024-05-31T11:40:03.584+0530\",\"stateCount\":2,\"state\":\"MERGED\",\"dataType\":\"pullrequest\",\"open\":false},\"byInstanceType\":{\"bitbucket\":{\"count\":2,\"name\":\"Bitbucket Cloud\"}}}}},\"isStale\":true}}",
                "aggregateprogress": {
                    "progress": 1800,
                    "total": 3600,
                    "percent": 50
                },
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
                    "progress": 1800,
                    "total": 3600,
                    "percent": 50
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35721",
            "key": "KTLO-272",
            "fields": {
                "statuscategorychangedate": "2024-05-29T23:53:36.363-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": null,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-05-29T23:53:36.065-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/high.svg",
                    "name": "High",
                    "id": "2"
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
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bfecf424db79672124417b",
                    "emailAddress": "sudheendra.panganamala@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/db9c7658d16967a90b6ff0a1bf18ee9b?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FSP-3.png"
                    },
                    "displayName": "Sudheendra Panganamala",
                    "active": true,
                    "timeZone": "Asia/Calcutta",
                    "accountType": "atlassian"
                },
                "updated": "2024-05-30T00:02:16.533-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "To Do",
                    "id": "10000",
                    "statusCategory": {
                        "id": 2,
                        "key": "new",
                        "colorName": "blue-gray",
                        "name": "To Do"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "type": "doc",
                    "version": 1,
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Once login, we are not able to see any data on the portal under Active, cancelled, invalid, completed orders tab."
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Looks like a cache issue"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "The issue was persitant for almost about 8 mins, upon refreshing/logout and login post 8 mins, also no results were returned."
                                },
                                {
                                    "type": "hardBreak"
                                }
                            ]
                        },
                        {
                            "type": "mediaSingle",
                            "content": [
                                {
                                    "type": "media",
                                    "attrs": {
                                        "type": "file",
                                        "id": "33d2bcee-b95a-46c3-a99a-3836b9125bed",
                                        "collection": "",
                                        "width": 1920,
                                        "height": 1080,
                                        "alt": "Screenshot from 2024-05-30 12-24-39.png"
                                    }
                                }
                            ],
                            "attrs": {
                                "layout": "align-start"
                            }
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "mediaSingle",
                            "content": [
                                {
                                    "type": "media",
                                    "attrs": {
                                        "type": "file",
                                        "id": "8b2fc38b-3725-4e57-a5da-e89712dad4a6",
                                        "collection": "",
                                        "width": 1920,
                                        "height": 1080,
                                        "alt": "Screenshot from 2024-05-30 12-24-54.png"
                                    }
                                }
                            ],
                            "attrs": {
                                "layout": "align-start"
                            }
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "mediaSingle",
                            "content": [
                                {
                                    "type": "media",
                                    "attrs": {
                                        "type": "file",
                                        "id": "acfc376d-9c01-4e0d-ab88-26e55d5d6025",
                                        "collection": "",
                                        "width": 1920,
                                        "height": 1080,
                                        "alt": "Screenshot from 2024-05-30 12-24-51.png"
                                    }
                                }
                            ],
                            "attrs": {
                                "layout": "align-start"
                            }
                        },
                        {
                            "type": "paragraph",
                            "content": []
                        },
                        {
                            "type": "mediaSingle",
                            "content": [
                                {
                                    "type": "media",
                                    "attrs": {
                                        "type": "file",
                                        "id": "9004ff58-e2cc-4488-ba8c-12f73178e305",
                                        "collection": "",
                                        "width": 1920,
                                        "height": 1080,
                                        "alt": "Screenshot from 2024-05-30 12-24-48.png"
                                    }
                                }
                            ],
                            "attrs": {
                                "layout": "align-start"
                            }
                        }
                    ]
                },
                "customfield_10010": null,
                "customfield_10011": "0|i046mn:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "SDD Portal | Unable to see any data on portal in QA env",
                "creator": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "60f5bc9b52162b0068d55c78",
                    "emailAddress": "tejas.patil@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/01b30e52788c207bf598c2a6cb4078c8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FTP-0.png"
                    },
                    "displayName": "Tejas Patil",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35717",
            "key": "KTLO-271",
            "fields": {
                "statuscategorychangedate": "2024-05-31T00:20:15.147-0700",
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
                "timespent": 28800,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 28800,
                "resolution": null,
                "resolutiondate": null,
                "workratio": 50,
                "lastViewed": null,
                "watches": {
                    "watchCount": 0,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-05-29T12:05:01.353-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 28800,
                "aggregatetimeoriginalestimate": 57600,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-05-31T00:20:15.146-0700",
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
                "timeoriginalestimate": 57600,
                "description": null,
                "customfield_10010": null,
                "customfield_10011": "0|i046lr:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": 28800,
                "summary": "Store automation - adding a new field ACTION(create and update stores)",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 28800,
                    "total": 57600,
                    "percent": 50
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
                    "progress": 28800,
                    "total": 57600,
                    "percent": 50
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35716",
            "key": "KTLO-270",
            "fields": {
                "statuscategorychangedate": "2024-06-14T05:04:48.704-0700",
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
                "timespent": 7200,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": 7200,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": "2024-06-17T21:16:29.234-0700",
                "watches": {
                    "watchCount": 0,
                    "isWatching": false
                },
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-05-29T12:02:28.593-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
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
                "labels": [],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": 0,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "32568",
                        "type": {
                            "id": "10003",
                            "name": "Relates",
                            "inward": "relates to",
                            "outward": "relates to",
                        },
                        "inwardIssue": {
                            "id": "35358",
                            "key": "PSE-2171",
                            "fields": {
                                "summary": "CRUD ACTIONS | EDD Constraint - If no solution satisfy the EDD constraint, we should pick the closest possible solution to EDD",
                                "status": {
                                    "description": "",
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/statuses/resolved.png",
                                    "name": "Ready For Test",
                                    "id": "10012",
                                    "statusCategory": {
                                        "id": 4,
                                        "key": "indeterminate",
                                        "colorName": "yellow",
                                        "name": "In Progress"
                                    }
                                },
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10003",
                                    "description": "Stories track functionality or features expressed as user goals.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
                                    "name": "Story",
                                    "subtask": false,
                                    "avatarId": 10315,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-14T05:05:00.881-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/statuses/resolved.png",
                    "name": "Ready For Test",
                    "id": "10012",
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
                "timeoriginalestimate": null,
                "description": null,
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
                    }
                ],
                "customfield_10011": "0|i046lj:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10057": null,
                "customfield_10013": null,
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": 0,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "CRUD ACTIONS | EDD Constraint - If no solution satisfy the EDD constraint, we should pick the closest possible solution to EDD",
                "creator": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63eb354cbc0f9b3a16fbfa49",
                    "emailAddress": "saiprabha.timmapur@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/1da8e7873ffcf28b34196b7b2577e7f2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FST-3.png"
                    },
                    "displayName": "Saiprabha Timmapur",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10000": "{}",
                "customfield_10044": null,
                "aggregateprogress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 7200,
                    "total": 7200,
                    "percent": 100
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35700",
            "key": "KTLO-269",
            "fields": {
                "statuscategorychangedate": "2024-06-25T05:47:34.215-0700",
                "issuetype": {
                    "id": "10004",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10303,
                    "hierarchyLevel": 0
                },
                "customfield_10070": null,
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": "2024-06-18T08:18:33.817-0700",
                "customfield_10060": null,
                "created": "2024-05-29T01:56:57.119-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/high.svg",
                    "name": "High",
                    "id": "2"
                },
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "accountId": "63bd08ff56176e219bec6cc7",
                    "emailAddress": "prajna.udupa@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "24x24": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "16x16": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png",
                        "32x32": "https://secure.gravatar.com/avatar/5f654de1668266cf09409ff6bddff1a1?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FPU-4.png"
                    },
                    "displayName": "Prajna Udupa",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-25T05:47:34.214-0700",
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
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "In the NCM application, active service point is not in sync with the DB. All the active stores which are appearing in DB must also reflect in the NCM UI for Dollar General. Current active store in NCM UI is 10,000 whereas in DB 19,837."
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "This observation was made while performing the smoke testing after May 2024 release."
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Please find the screenshot below for your reference -"
                                }
                            ]
                        }
                    ]
                },
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
                        "id": 461,
                        "name": "KTLO-Sprint-22",
                        "state": "active",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-06-24T04:13:26.923Z",
                        "endDate": "2024-07-05T18:00:00.000Z"
                    }
                ],
                "customfield_10011": "0|i046i7:",
                "customfield_10012": null,
                "customfield_10056": null,
                "customfield_10013": null,
                "customfield_10057": null,
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "Active Service Point discrepancy with DB",
                "creator": {
                    "accountId": "60b516d28cf91900694a2c7a",
                    "emailAddress": "aditya.mishra@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/a36bf3774d80887042f601da05b5f056?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAM-5.png",
                        "24x24": "https://secure.gravatar.com/avatar/a36bf3774d80887042f601da05b5f056?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAM-5.png",
                        "16x16": "https://secure.gravatar.com/avatar/a36bf3774d80887042f601da05b5f056?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAM-5.png",
                        "32x32": "https://secure.gravatar.com/avatar/a36bf3774d80887042f601da05b5f056?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAM-5.png"
                    },
                    "displayName": "Aditya Mishra",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10084": null,
                "customfield_10040": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "60b516d28cf91900694a2c7a",
                    "emailAddress": "aditya.mishra@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/a36bf3774d80887042f601da05b5f056?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAM-5.png",
                        "24x24": "https://secure.gravatar.com/avatar/a36bf3774d80887042f601da05b5f056?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAM-5.png",
                        "16x16": "https://secure.gravatar.com/avatar/a36bf3774d80887042f601da05b5f056?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAM-5.png",
                        "32x32": "https://secure.gravatar.com/avatar/a36bf3774d80887042f601da05b5f056?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAM-5.png"
                    },
                    "displayName": "Aditya Mishra",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "customfield_10044": null,
                "customfield_10000": "{}",
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": "2024-06-12",
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35668",
            "key": "KTLO-268",
            "fields": {
                "statuscategorychangedate": "2024-06-03T21:54:37.349-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "customfield_10075": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-03T21:54:37.342-0700",
                "workratio": -1,
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "lastViewed": "2024-06-17T21:16:48.065-0700",
                "customfield_10060": null,
                "customfield_10061": null,
                "created": "2024-05-28T21:33:38.541-0700",
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "customfield_10023": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10024": null,
                "customfield_10025": null,
                "customfield_10069": null,
                "labels": [
                    "KTLO",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "32513",
                        "type": {
                            "id": "10002",
                            "name": "Duplicate",
                            "inward": "is duplicated by",
                            "outward": "duplicates",
                        },
                        "inwardIssue": {
                            "id": "35359",
                            "key": "PSE-2172",
                            "fields": {
                                "summary": "CRUD ACTIONS | Inactivation of sourcing definition",
                                "status": {
                                    "description": "",
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                                    "name": "Done",
                                    "id": "10001",
                                    "statusCategory": {
                                        "id": 3,
                                        "key": "done",
                                        "colorName": "green",
                                        "name": "Done"
                                    }
                                },
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10004",
                                    "description": "A problem which impairs or prevents the functions of the product.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                                    "name": "Bug",
                                    "subtask": false,
                                    "avatarId": 10303,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-03T21:54:37.348-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "If a sourcing definiton is created, mutiple rules are created"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "inactive the current definition and create a new sourcing definition with same attributes"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "If user tries to create a new rule similar to the previous ones, it wouldn't allow"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "hardBreak"
                                },
                                {
                                    "type": "text",
                                    "text": "Discussed solution: "
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Add validation in UPDATE sourcing definition API to check if there are any rules present with the current active def, if yes then throw error saying all the rules needs to be deleted before inactivating the current rule. (this validation applies when user tries to update any of the field) This applies for all the rules (Sourcing, Optimisation, HCO)."
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
                    {
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i046bb:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": "10181_*:*_1_*:*_62962_*|*_400_*:*_1_*:*_432368824_*|*_10020_*:*_1_*:*_2107_*|*_10000_*:*_1_*:*_87224936_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
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
                "aggregatetimeestimate": null,
                "summary": "CRUD ACTIONS | Inactivation of sourcing definition",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "customfield_10120": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10000": "{}",
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
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,customfield_10018.requestTypePractice,changelog,renderedFields",
            "id": "35667",
            "key": "KTLO-267",
            "fields": {
                "statuscategorychangedate": "2024-06-07T05:38:23.844-0700",
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
                "timespent": null,
                "customfield_10074": null,
                "project": {
                    "id": "10066",
                    "key": "KTLO",
                    "name": "KTLO",
                    "projectTypeKey": "software",
                    "simplified": false,
                    "avatarUrls": {
                        "48x48": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424",
                        "24x24": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=small",
                        "16x16": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=xsmall",
                        "32x32": "https://nextuple.atlassian.net/rest/api/3/universal_avatar/view/type/project/avatar/10424?size=medium"
                    }
                },
                "customfield_10075": null,
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": {
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2024-06-07T05:38:23.836-0700",
                "workratio": -1,
                "lastViewed": "2024-06-20T01:07:20.322-0700",
                "watches": {
                    "watchCount": 1,
                    "isWatching": false
                },
                "customfield_10060": null,
                "created": "2024-05-28T21:31:00.381-0700",
                "customfield_10061": null,
                "customfield_10062": null,
                "customfield_10063": null,
                "customfield_10020": null,
                "customfield_10064": null,
                "customfield_10021": null,
                "customfield_10066": null,
                "priority": {
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": null,
                "customfield_10024": null,
                "customfield_10069": null,
                "customfield_10025": null,
                "labels": [
                    "KTLO",
                    "ktlo"
                ],
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": [],
                "aggregatetimeoriginalestimate": null,
                "timeestimate": null,
                "versions": [],
                "issuelinks": [
                    {
                        "id": "32512",
                        "type": {
                            "id": "10002",
                            "name": "Duplicate",
                            "inward": "is duplicated by",
                            "outward": "duplicates",
                        },
                        "inwardIssue": {
                            "id": "35356",
                            "key": "PSE-2169",
                            "fields": {
                                "summary": "CRUD ACTIONS | Deletion of service option",
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
                                "priority": {
                                    "iconUrl": "https://nextuple.atlassian.net/images/icons/priorities/medium.svg",
                                    "name": "Medium",
                                    "id": "3"
                                },
                                "issuetype": {
                                    "id": "10004",
                                    "description": "A problem which impairs or prevents the functions of the product.",
                                    "iconUrl": "https://nextuple.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10303?size=medium",
                                    "name": "Bug",
                                    "subtask": false,
                                    "avatarId": 10303,
                                    "hierarchyLevel": 0
                                }
                            }
                        }
                    }
                ],
                "assignee": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "updated": "2024-06-07T05:38:23.843-0700",
                "status": {
                    "description": "",
                    "iconUrl": "https://nextuple.atlassian.net/images/icons/status_generic.gif",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "customfield_10091": null,
                "customfield_10092": null,
                "timeoriginalestimate": null,
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Validate the deletion of serviceOption in the tenant config table. If the serviceOption is associated to one or more nodes or carrier services then the delete shouldn’t be allowed."
                                }
                            ]
                        }
                    ]
                },
                "customfield_10010": [
                    {
                        "id": 426,
                        "name": "KTLO-Sprint-20",
                        "state": "closed",
                        "boardId": 94,
                        "goal": "",
                        "startDate": "2024-05-27T05:13:20.360Z",
                        "endDate": "2024-06-07T18:00:00.000Z",
                        "completeDate": "2024-06-11T04:38:05.060Z"
                    }
                ],
                "customfield_10011": "0|i046b3:",
                "customfield_10056": null,
                "customfield_10012": null,
                "customfield_10057": null,
                "customfield_10013": "10000_*:*_1_*:*_806843495_*|*_10001_*:*_1_*:*_0",
                "customfield_10058": null,
                "customfield_10059": null,
                "security": null,
                "customfield_10008": null,
                "aggregatetimeestimate": null,
                "customfield_10009": {
                    "hasEpicLinkFieldDependency": false,
                    "showField": false,
                    "nonEditableReason": {
                        "reason": "PLUGIN_LICENSE_ERROR",
                        "message": "The Parent Link is only available to Jira Premium users."
                    }
                },
                "summary": "CRUD ACTIONS | Deletion of service option",
                "creator": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "subtasks": [],
                "customfield_10040": null,
                "customfield_10084": null,
                "customfield_10041": null,
                "customfield_10042": null,
                "customfield_10120": null,
                "reporter": {
                    "accountId": "63bd08fddf0fa548e8e87476",
                    "emailAddress": "jeewan.khatiwara@nextuple.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "24x24": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "16x16": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png",
                        "32x32": "https://secure.gravatar.com/avatar/6c2906526fd7aef1aba336033d9944a8?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJK-0.png"
                    },
                    "displayName": "Jeewan Khatiwara",
                    "active": true,
                    "timeZone": "America/Los_Angeles",
                    "accountType": "atlassian"
                },
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10044": null,
                "customfield_10000": "{}",
                "customfield_10001": null,
                "customfield_10046": null,
                "customfield_10047": null,
                "customfield_10004": null,
                "customfield_10048": null,
                "customfield_10038": null,
                "customfield_10039": null,
                "environment": null,
                "customfield_10119": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "votes": 0,
                    "hasVoted": false
                }
            }
        }
    ]
}