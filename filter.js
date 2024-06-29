function extractTextFromContent(content) {
    let text = '';
    let textArray = [];

    function traverse(node) {
        if (node.type === 'codeBlock' || node.type === 'table') {
            return;
        }
        if (Object.keys(node).includes('text') && node.text.trim() !== '') {
            const trimmedText = node?.text.trim();
            textArray.push(trimmedText);
        } else if (Object.keys(node).includes('content') && Array.isArray(node.content)) {
            node.content.forEach(traverse);
        }
    }

    content.forEach(traverse);
    for (let i = 0; i < textArray.length - 1; i++) {
        const trimmedText = textArray[i].trim();
        const lastChar = textArray[i].charAt(trimmedText.length - 1);
        if (trimmedText.length > 0 && trimmedText.length < 50) {
            text += trimmedText;
            if (lastChar !== '.' && lastChar !== ',') {
                text += ';';
            }
            text += ' ';
        } else if (trimmedText.length > 50) {
            text += trimmedText;
            if (lastChar !== '.' && lastChar !== ',') {
                text += '.';
            }
            text += '\n';
        }
    }
    if (textArray.length > 0)
        text += textArray[textArray.length - 1];
    return text.trim();
}

function flattenTicketData(ticket) {
    if (ticket?.id) {
        return {
            [ticket.id]: {
                id: ticket.id,
                key: ticket.key,
                summary: ticket.fields?.summary,
                issueType: ticket.fields?.issuetype?.name,
                priority: ticket.fields?.priority?.name,
                status: ticket.fields?.status?.name,
                description: extractTextFromContent(ticket.fields?.description?.content || [])
            }
        };
    }
}

export function filterAndFlattenTicketData(data) {
    return data.reduce((acc, ticket) => {
        const flattenedTicket = flattenTicketData(ticket);
        if (flattenedTicket) {
            acc = { ...acc, ...flattenedTicket };
        }
        return acc;
    }, {});
}

function flattenWorkLogData(workLog) {
    if (workLog?.issueId) {
        return {
            issueId: workLog?.issueId,
            id: workLog?.id,
            author: workLog?.author?.displayName,
            started: workLog?.started,
            timeSpent: workLog?.timeSpent,
            timeSpentSeconds: workLog?.timeSpentSeconds,
            comment: extractTextFromContent(workLog?.comment?.content || [])
        };
    }
};

export function filterAndFlattenWorkLogData(data) {
    return data.map(flattenWorkLogData).filter(Boolean);
}