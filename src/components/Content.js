import React, { Component } from 'react';
import Card from './Card';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <h2 className="title-main">請先選擇區域</h2>
                <ul className="list">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>
            </div>
        );
    }
}

export default Content;