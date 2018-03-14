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
        const pic = require('./shitHappens.png');
        const picBackGround = require('./backSide.jpg');
        const flipClass = this.state.isToggled ? 'flip back' : null;
        const cNames = classNames('block flipper', flipClass);
        console.log('pgl classNames: ', cNames);
        {/*<h1>Blokkie: {this.props.naam}</h1>*/}
        return (
            <a href="#" className={cNames} onClick={this.handleClick}>
                <img className="plaatje front" src={pic} />
                {/*<img className="plaatje back" src={picBackGround} />*/}
            </a>
        );
    }
}
