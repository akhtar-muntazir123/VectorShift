// submit.js

// export const SubmitButton = () => {

//     return (
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
//             <button type="submit" style={{ marginTop: 8 }}>Submit</button>
//         </div>
//     );
// }


import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore(s => s.nodes);
  const edges = useStore(s => s.edges);

  const handleSubmit = () => {
    console.log('GRAPH SUBMIT:');
    console.log({
      nodes,
      edges
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="submit" style={{ marginTop: 8 }} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
