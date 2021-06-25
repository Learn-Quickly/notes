import * as React from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCount() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Current count: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Inc</button>
                <button onClick={this.decrementCount}>Dec</button>
            </div>
        );
    };
};