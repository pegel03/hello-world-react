import React, {PureComponent} from 'react';
import classNames from 'classnames';
import classes from './index.less';

export default class Block extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            naam: null,
            isToggled: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('pgl me 3 now start', this.state.isToggled);
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }));
    }

    render() {
        const pic = require('./backSide.jpg');
        var classnames = classNames('block');

        return (
            <a href="#" className={classnames} onClick={this.handleClick}>
                <h1>Blokkie: {this.props.naam}</h1>
            </a>
        );
    }
}