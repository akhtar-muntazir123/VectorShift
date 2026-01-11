

// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    const toolbarStyle = {
        padding: 10,
        background: '#ffffff',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
    };


    const titleStyle = {
        fontSize: 14,
        fontWeight: 600,
        color: '#444',
        textTransform: 'uppercase'
    };

    const groupStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10
    };

    const itemStyle = {
        padding: '6px 12px',
        borderRadius: 6,
        background: '#fff',
        border: '1px solid #d5d5d5',
        fontSize: 13,
        cursor: 'grab',
        transition: '0.15s all ease'
    };

    const renderNode = (type, label) => (
        <div style={itemStyle}>
            <DraggableNode type={type} label={label} />
        </div>
    );

    return (
        <div style={toolbarStyle}>
            <div style={titleStyle}>Nodes</div>

            <div style={groupStyle}>
                {renderNode('customInput', 'Input')}
                {renderNode('llm', 'LLM')}
                {renderNode('customOutput', 'Output')}
                {renderNode('text', 'Text')}
                {renderNode('openai', 'OpenAI')}
                {renderNode('conditionalNode', 'Conditional')}
                {renderNode('delayNode', 'Delay')}
                {renderNode('mathNode', 'Math')}
                {renderNode('concatNode', 'Concat')}
                {renderNode('fetchNode', 'Fetch')}
            </div>
        </div>
    );
};
