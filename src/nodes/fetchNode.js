import { makeNode } from './makeNode';

export const FetchNode = makeNode({
  title: 'Fetch',
  fields: [
    { name: 'url', label: 'URL', type: 'text', default: 'https://api.com' }
  ],
  handles: [
    { id: 'response', io: 'source', position: 'Right' }
  ]
});
