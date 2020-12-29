// import React from 'react';
import React,{useState, useEffect} from "react";
import Card from './Card';




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
       
        {/* 下方要測試撈出五筆資料，不要撈全部 */}
          {cards.map((card,index) =>(
            <ul className="list"><Card item={card}/></ul>
          ))} 
          {/* itemZones: data.result.records.map((item)=>(item.Zone)).filter(function(element, index, arr){
                    return arr.indexOf(element) === index;
                }) */}
      </div>
    );
  }
  
};



export default CardsContent;