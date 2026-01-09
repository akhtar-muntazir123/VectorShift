import { makeNode } from "./makeNode";
export const DelayNode = makeNode({
    title: 'Delay',
    fields: [
        { name: 'ms', label: 'Milliseconds', type: 'text', default: '500' },
    ],
    handles: [
        { id: 'input', io: 'target', position: 'Left' },
        { id: 'output', io: 'source', position: 'Right' },
    ]
});
