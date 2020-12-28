import React, { Component } from 'react';

const imgStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
  }
class Card extends Component {
    render() {
        return (
            <ul className="list">
                <li className="list-card">
                    <div className="img" style={{imgStyle}} >
                        <div class="img-title">
                            <h3 className="title-24px"> </h3>
                            <p className="title-16px"></p>
                        </div>
                    </div>
                    <div className="content">
                        <p></p>
                        <p></p>
                        <div className="card_down_area"></div>
                        <p></p>
                        <p></p>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Card;