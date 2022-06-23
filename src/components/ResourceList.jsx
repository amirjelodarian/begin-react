import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ResourceList = ({ resource }) =>{
    const [resources, setResources] = useState([]);
    const fetchResource  = async (resource) =>{
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(data);
    }
    useEffect(() => {
      fetchResource(resource);
    }, [resource]);
    // async componentDidUpdate(prevProps, prevState){
    //     if(prevProps.response !== this.props.resource){
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    //         this.setState({ resources: response.data });
    //     }
    // }
    
        return(
          <div>{resources.length}</div>  
        );
    
}

export default ResourceList;