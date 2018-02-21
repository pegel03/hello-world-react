import React, {PureComponent} from 'react';
import classNames from 'classnames';
import classes from './index.less';

export default class Block extends PureComponent {
    constructor(props) {
        super(props);
        // this.state = {
        //     naam: null,
        // };
    }

    render() {
        var classnames = classNames('block');

        return (
            <div className={classnames}>
                <h1>Blokkie: {this.props.naam}</h1>
            </div>
        );
    }
}