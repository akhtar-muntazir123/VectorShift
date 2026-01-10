import { useStore } from '../store';
import { BaseNode } from './baseNode.js';

export const makeNode = (config) => {
    return ({ id, data }) => {
        const updateField = useStore((s) => s.updateNodeField);
        const onFieldChange = (name, val) => updateField(id, name, val);

        return (
            <BaseNode
                id={id}
                // data={data}
                // config={config}
                onFieldChange={onFieldChange}
                data={data}
                config={{
                    subtitle: config.subtitle ?? null,
                    style: config.style ?? {},
                    title: config.title,
                    fields: config.fields ?? [],
                    handles: config.handles ?? []
                }}
            />
        );
    };
};
