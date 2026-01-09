import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

export const BaseNode = ({ id, data, config, onFieldChange }) => {
  const { title, subtitle, fields = [], handles = [], style = {} } = config;
  const deleteNode = useStore((s) => s.deleteNode);


  return (
    <div style={{
      width: 240,
      borderRadius: 10,
      border: '1px solid #D6D3F5',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Inter, sans-serif',
      fontSize: 12,
      color: '#333',
      ...style
    }}>

      {/* HEADER SECTION */}
      <div style={{
        background: '#F3F1FE',
        borderBottom: '1px solid #E0DDFB',
        borderRadius: '10px 10px 0 0',
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 3
      }}>

        <div style={{ fontWeight: 600 }}>{title}</div>
        <button
          onClick={() => deleteNode(id)}
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
            padding: 0,
            margin: 0,
            lineHeight: '14px'
          }}
        >
          ×
        </button>

        {subtitle && (
          <div style={{ fontSize: 11, color: '#666' }}>
            {subtitle}
          </div>
        )}
      </div>

      {/* BODY SECTION */}
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: 8 }}>

        {/* Field Rendering */}
        {fields.map((f) => {
          return (
            <label key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <div style={{ fontSize: 11, color: '#444', fontWeight: 500 }}>
                {f.label}
                {f.type === 'select' && (
                  <span style={{
                    marginLeft: 6,
                    fontSize: 10,
                    padding: '1px 4px',
                    background: '#E3E0FF',
                    borderRadius: 4
                  }}>Dropdown</span>
                )}
              </div>

              {f.type === 'text' && (
                <input
                  type="text"
                  value={data[f.name] ?? f.default ?? ''}
                  onChange={(e) => onFieldChange(f.name, e.target.value)}
                  style={{
                    border: '1px solid #CCC',
                    borderRadius: 6,
                    padding: '6px',
                    fontSize: 12
                  }}
                />
              )}

              {f.type === 'select' && (
                <select
                  value={data[f.name] ?? f.default}
                  onChange={(e) => onFieldChange(f.name, e.target.value)}
                  style={{
                    border: '1px solid #CCC',
                    borderRadius: 6,
                    padding: '6px',
                    fontSize: 12
                  }}
                >
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              )}
            </label>
          );
        })}
      </div>

      {/* HANDLES */}
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.io}
          position={Position[h.position]}
          id={`${id}-${h.id}`}
          style={h.style ?? {}}
        />
      ))}
    </div>
  );
};


// import { Handle, Position } from 'reactflow';

// export const BaseNode = ({ id, data, config, onFieldChange }) => {
//   const { title, fields = [], handles = [], style = {} } = config;

//   return (
//     <div style={{
//       width: 240,
//       minHeight: 120,
//       borderRadius: 8,
//       border: '1px solid #ddd',
//       background: '#fafafa',
//       padding: '10px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '6px',
//       ...style
//     }}>

//       <div><span>{title}</span></div>

//       {fields.map((f) => {
//         if (f.type === 'text') {
//           return (
//             <label key={f.name}>
//               {f.label}:
//               <input
//                 type="text"
//                 value={data[f.name] ?? f.default ?? ''}
//                 onChange={(e) => onFieldChange(f.name, e.target.value)}
//               />
//             </label>
//           );
//         }
//         if (f.type === 'select') {
//           return (
//             <label key={f.name}>
//               {f.label}:
//               <select
//                 value={data[f.name] ?? f.default}
//                 onChange={(e) => onFieldChange(f.name, e.target.value)}
//               >
//                 {f.options.map((o) => (
//                   <option key={o} value={o}>{o}</option>
//                 ))}
//               </select>
//             </label>
//           );
//         }
//         return null;
//       })}

//       {handles.map((h) => (
//         <Handle
//           key={h.id}
//           type={h.io}
//           position={Position[h.position]}
//           id={`${id}-${h.id}`}
//           style={h.style ?? {}}
//         />
//       ))}
//     </div>
//   );
// };
