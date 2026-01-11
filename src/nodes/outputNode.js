// // outputNode.js

// outputNode.js
import { makeNode } from './makeNode';

export const OutputNode = makeNode({
  title: 'Output',
  fields: [
    { name: 'outputName', label: 'Name', type: 'text', default: 'output' },
    { name: 'outputType', label: 'Type', type: 'select', default: 'Text', options: ['Text', 'Image'] }
  ],
  handles: [
    { id: 'value', io: 'target', position: 'Left' }
  ]
});

