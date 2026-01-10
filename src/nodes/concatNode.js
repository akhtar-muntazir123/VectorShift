import { makeNode } from './makeNode';

export const ConcatNode = makeNode({
  title: 'Concat',
  fields: [
    { name: 'sep', label: 'Separator', type: 'text', default: '' }
  ],
  handles: [
    { id: 'left', io: 'target', position: 'Left', style: { top: '33%' } },
    { id: 'right', io: 'target', position: 'Left', style: { top: '66%' } },
    { id: 'out', io: 'source', position: 'Right' }
  ]
});
