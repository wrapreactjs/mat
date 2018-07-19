import React from 'react'
import { VictoryChart ,VictoryBar, VictoryLegend, VictoryLine } from 'victory';
import { range } from "lodash"
import matTheme from './MatTheme';
class CustomBarChart extends React.Component {
    constructor() {
        super();
        this.state = {
            data: this.getData(),
            lineData: this.getLineData()
        }
    }
    getData() {
        return range(8).map((i) => {
            return {
                x: i,
                y: Math.floor(Math.random() * 10) + 1
            };
        });
    };
    getLineData() {
        return range(8).map((i) => {
            return {
                x: i,
                y: Math.floor(Math.random() * 10) + 1
            };
        });
    }
    componentDidMount() {
        this.intervalIndex = window.setInterval(() => {
            this.setState({
                data: this.getData(),
                lineData: this.getLineData()
            });
        }, 3000);
    }
    componentWillUnmount() {
        window.clearInterval(this.intervalIndex);
    }
    render() {

        return (
            <div style={{height:350}}>
                <VictoryChart domainPadding={{x: 50, y: [20, 20]}}
                              scale={{x: "linear"}}
                              theme={matTheme}
                >
                        <VictoryLegend x={50} y={30}
                                       centerTitle
                                       orientation="horizontal"
                                       gutter={10}
                                       data={[
                                           { name: "Response Time", symbol: { fill: "tomato" } },
                                           { name: "Request count", symbol: { fill: "orange" } },
                                       ]}
                        />
                        <VictoryBar
                            data={this.state.data}
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}

                        />
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc"}
                            }}
                            data={this.state.lineData}
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                        />
                </VictoryChart>
            </div>
        );
    }
}

export default CustomBarChart;