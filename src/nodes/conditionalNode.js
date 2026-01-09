import { makeNode } from "./makeNode";
export const ConditionalNode = makeNode({
    title: 'If',
    fields: [
        { name: 'cond', label: 'Condition', type: 'text', default: 'x > 0' },
    ],
    handles: [
        { id: 'input', io: 'target', position: 'Left' },
        { id: 'true', io: 'source', position: 'Right', style: { top: '33%' } },
        { id: 'false', io: 'source', position: 'Right', style: { top: '66%' } },
    ]
});
