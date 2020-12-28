// import React from 'react';
import React,{useState, useEffect} from "react";

const Zone = () =>{
   
 
  const [state,setState] = useState({
    items: [],
    error: null,
    isLoaded: false

  });
  

  useEffect(()=>{
        fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
          .then(res => res.json())
          .then(
            (data) => {
              setState({
                isLoaded: true,
                items: data.result.records
                
              });
            },
            (sError) => {
              setState({
                isLoaded: true,
                error:sError,
                items:null
              });
            }
          )
  },[]);


        const { error, isLoaded, items } = state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li> {item.Zone}</li>
              ))}
            </ul>
          );
        }
      }


export default Zone;  