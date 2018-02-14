/*
 ./client/components/App.jsx
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';

import classes from './App.less';

export default class App extends PureComponent {


    render() {
        // var me = ; // => 'foo bar'
        var deze = classNames('hoofd');
// console.log('pgl ', deze);
        var ik = 'lukt wel ';

        return (
            <div className={deze} >
                <div className="links" >
                    <h1>Links dus</h1>
                    <h1>Hello to you too:) nr two</h1>
                </div>
                <div className="rechts" >
                    <h1>Rechts</h1>
                </div>
            </div>
        );
    }
}