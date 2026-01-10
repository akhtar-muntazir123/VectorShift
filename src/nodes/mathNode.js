import { makeNode } from './makeNode';

export const MathNode = makeNode({
  title: 'Math',
  fields: [
    { name: 'expr', label: 'Expression', type: 'text', default: 'a + b' }
  ],
  handles: [
    { id: 'a', io: 'target', position: 'Left', style: { top: '35%' } },
    { id: 'b', io: 'target', position: 'Left', style: { top: '65%' } },
    { id: 'out', io: 'source', position: 'Right' }
  ]
});
