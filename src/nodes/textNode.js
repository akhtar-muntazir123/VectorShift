import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const update = useStore(s => s.updateNodeField);
  const deleteNode = useStore(s => s.deleteNode);

  const [text, setText] = useState(data.text ?? '');
  const [vars, setVars] = useState([]);
  const textareaRef = useRef(null);

  // detect {{vars}}
  useEffect(() => {
    const matches = Array.from(text.matchAll(/\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g));
    const unique = [...new Set(matches.map(m => m[1]))];
    setVars(unique);

    update(id, 'text', text);
  }, [text]);

  // auto-size textarea (width + height)
  useEffect(() => {
    if (!textareaRef.current) return;

    const t = textareaRef.current;
    t.style.height = 'auto';
    t.style.width = 'auto';

    t.style.height = t.scrollHeight + 'px';
    t.style.width = Math.max(120, t.scrollWidth) + 'px';
  }, [text]);

  return (
    <div style={{
      padding: 10,
      border: '1px solid #D6D3F5',
      borderRadius: 10,
      background: '#FFFFFF',
      display: 'inline-block',
      position: 'relative',
      fontSize: 12
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: '#F3F1FE',
        borderBottom: '1px solid #E0DDFB',
        padding: 6
      }}>
        <span style={{ fontWeight: 600 }}>Text</span>
        <button
          onClick={() => deleteNode(id)}
          style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 14 }}
        >
          ×
        </button>
      </div>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          resize: 'none',
          overflow: 'hidden',
          border: 'none',
          outline: 'none',
          width: 'auto',
          minWidth: 120,
          maxWidth: 300,
          fontSize: 12,
          background: 'transparent'
        }}
      />

      {vars.map((v, idx) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          style={{
            top: `${30 + idx * 22}px`
          }}
        />
      ))}

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
