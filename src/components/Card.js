import React,{useState, useEffect} from "react";
import clock from '../images/icons_clock.png'
import pin from '../images/icons_pin.png'
import phone from '../images/icons_phone.png'
import tag from '../images/icons_tag.png'


const Card = () => {
    const [state, setState] = useState({
      // items: [],
        image: '',
        name: '',
        zone: '',
        opentime:'',
        address:'',
        tel:'',
        info:'',
    
    });

//api
    useEffect(()=>{
        fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
          .then(res => res.json())
          .then(
            (data) => {                
              const card =  data.result.records[1];
              
              setState({
                // items: data.result.records
                image: card.Picture1,
                name: card.Name,
                zone: card.Zone,  
                opentime: card.Opentime,
                address: card.Add,
                tel: card.Tel,
                info: card.Ticketinfo,   
              });
            });
            // (sError) => {
            //   setState({
            //     isLoaded: true,
            //     error:sError,
            //     items:null
            //   });
            // }   
  },[]);

  const { image, name, zone,opentime,address,tel,info } = state;
  return(
    <li className="list-card">
      <div className="img" style={{backgroundImage: `url(${image})`}}>
          <div class="img-title">
              <h3 className="title-24px">{name}</h3>
              <p className="title-16px">{zone}</p>
          </div>
      </div>
      <div className="content-card">
          <p><img src={clock}  alt="icon"/>{opentime}</p>
          <p><img src={pin}  alt="icon"/>{address}</p>
          <div className="card_down_area">
            <p><img src={phone}  alt="icon"/>{tel}</p>
            <p><img src={tag}  alt="icon"/>{info}</p>
          </div>
      </div>
      {/* <img src={image}  alt=""/> */}
    </li>

  )
};

export default Card;