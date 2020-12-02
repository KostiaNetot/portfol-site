import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PortfolioPage() {
  const [ projects, setProjects ] = useState(null);

  const getProjects = async () => {
    const response = await axios.get('./data.json')
      .catch(err => console.log("Error: ", err));

    if (response && response.data) {
      console.log(response.data);
    } 
  };

  useEffect(() => {
    getProjects();   
  //   axios.get('./data.json')
  //  .then((res)=>{
  //    console.log(res.data);
  //  }).catch((err)=>{
  //    console.log(err);
  //  });

  }, []);

    return (
        <div>
          PortfolioPage      
        </div>
    )
}
