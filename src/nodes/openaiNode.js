
import { makeNode } from './makeNode';

export const OpenAINode = makeNode({
    title: 'OpenAI',
    fields: [
        {
            name: 'system',
            label: 'System (Instructions)',
            type: 'textarea',
            default: 'Answer the Question based on Context'
        },
        {
            name: 'question',
            label: 'Question',
            type: 'text',
            default: ''
        },
        {
            name: 'context',
            label: 'Context',
            type: 'text',
            default: ''
        },
        {
            name: 'model',
            label: 'Model',
            type: 'select',
            default: 'gpt-4o-latest',
            options: [
                'gpt-4o-latest',
                'gpt-4o-mini',
                'gpt-3.5-turbo',
                'gpt-4.1',
                'gpt-4.1-mini'
            ]
        }
    ],
    handles: [
        { id: 'input', io: 'target', position: 'Left' },
        { id: 'output', io: 'source', position: 'Right' }
    ],
});
