import React from 'react'
import {VictoryPie, VictoryLabel} from 'victory';
import matTheme from './MatTheme'
import {  range } from "lodash"
class PieChart1 extends React.Component {
    constructor() {
        super();
        this.state = {
            data: this.getData()
        }
    }
    getData() {
        return range(4).map((i) => {
            return {
                x: i,
                y: Math.floor(Math.random() * 100) + 1
            };
        });
    };

    componentDidMount() {
        this.intervalIndex = window.setInterval(() => {
            this.setState({
                data: this.getData()
            });
        }, 3000);
    }
    componentWillUnmount() {
        window.clearInterval(this.intervalIndex);
    }
    render() {
        return (
            <svg viewBox="0 0 400 400" height={150}>
                <VictoryPie
                    theme={matTheme}
                    width={400} height={400}
                    data={this.state.data}
                    innerRadius={68} labelRadius={100}
                    style={{labels: {fontSize: 20, fill: "white"}}}
                    animate={{
                        duration: 2000
                    }}
                />
                <VictoryLabel
                    textAnchor="middle"
                    x={200} y={200}
                    text="Word(s)"
                />
                <text x="100" y="400" fill="#c8e6c9" fontSize={40}>{this.props.title}</text>
            </svg>
        )
    }
}

export default PieChart1;
