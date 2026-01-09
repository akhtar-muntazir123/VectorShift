// // textNode.js

// textNode.js
import { makeNode } from './makeNode';

export const TextNode = makeNode({
  title: 'Text',
  fields: [
    { name: 'text', label: 'Text', type: 'text', default: '{{input}}' }
  ],
  handles: [
    { id: 'output', io: 'source', position: 'Right' }
  ]
});


// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }
