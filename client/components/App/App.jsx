/*
 ./client/components/App.jsx
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import classes from './App.less';
import Block from "../Block";

export default class App extends PureComponent {

    render() {
        var classnames = classNames('container');

        const bloks = ['nr1', 'nr2', 'nr3', 'nr4', 'nr5', 'nr6', 'nr7', 'nr8', 'nr9', 'nr10', 'nr11', 'nr12'];

        return (
            <div className={classnames} >
                <div className="left" >
                    <h1>Links dus</h1>
                    <h1>Hello to you too:) nr two</h1>
                </div>
                <div className="right" >
                    {bloks.map((b, index) => <Block key={index} naam={b} />)}
                </div>
            </div>
        );
    }
}