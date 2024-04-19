import React from 'react'
import { Link } from 'react-router-dom';
const LinkComponent=(props)=>{
    return(
        <Link {...props}>{props?.name}</Link>
    ) 
}
export default LinkComponent;