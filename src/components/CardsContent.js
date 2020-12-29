// import React from 'react';
import React,{useState, useEffect} from "react";




const CardsContent = () =>{
  //宣告變數
  const [state,setState] = useState({
    cards: [],
    error: null,
    isLoaded: false
  });


  //API 資料
  useEffect(()=>{
    fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
      .then(res => res.json())
      .then(
        (data) => {
          setState({
            isLoaded: true,
            cards: data.result.records

          });
        },
        (sError) => {
          setState({
            isLoaded: true,
            error:sError,
            // cards:null
          });
        }
      )
},[]);

  const { error, isLoaded, cards } = state;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="main">
          <h2 className="title-main">請先選擇區域</h2>
          {cards.map((card) =>(
            <ul className="list">{card.Name}</ul>
          ))} 
      </div>
    );
  }
  
};



export default CardsContent;