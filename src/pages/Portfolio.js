import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Portfolio = (prop)=>{
    const history = useHistory();
    const location = useLocation();
  
    const queryParams = new URLSearchParams(location.search);
    const pfId = queryParams.get("pfId");
    const userId = queryParams.get("userId");
  
}

export default Portfolio;