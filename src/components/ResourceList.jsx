import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ResourceList = ({ resource }) =>{
  const resources = useResources(resource);
    return(
      <ul>
        {resources.map((record) => 
            (<li key={record.id}>{record.title}</li>)
        )}
      </ul>
    );
};

export default ResourceList;