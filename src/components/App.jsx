import React, { useState } from 'react';
import ResourceList from './ResourceList';

export default () => {
    const [resource, setResourece] = useState("posts");
    
    return (
        <div>
            <div>
                <button onClick={() => setResourece('posts')}>
                    Posts
                </button>
                <button onClick={() => setResourece('todos')}>
                    Todos
                </button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
};