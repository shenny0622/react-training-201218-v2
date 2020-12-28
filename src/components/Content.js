import React, { Component } from 'react';
import CardList from './CardList';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <h2 className="title-main">請先選擇區域</h2>
                <ul className="list">
                    <CardList/>
                    <CardList/>
                    <CardList/>
                    <CardList/>
                    <CardList/>
                    <CardList/>
                </ul>
            </div>
        );
    }
}

export default Content;