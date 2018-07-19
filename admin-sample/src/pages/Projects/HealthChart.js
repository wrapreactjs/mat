import React from 'react'
import {VictoryTheme, VictoryChart, VictoryBar, VictoryLabel, VictoryPolarAxis, VictoryStack} from 'victory';
import _ from "lodash"

const directions = {
    0: "Site clearing", 45: "Removal of trees", 90: "General excavation", 135: "Grading general",
    180: "Excavation", 225: "Placing formwork", 270: "Installing sewer", 315: "Pouring concrete"
};

const orange = { base: "gold", highlight: "darkOrange" };

const red = { base: "tomato", highlight: "orangeRed" };

const innerRadius = 30;

class CompassCenter extends React.Component {

    render() {
        const { origin } = this.props;
        const circleStyle = {
            stroke: red.base, strokeWidth: 2, fill: orange.base
        };
        return (
            <g>
                <circle
                    cx={origin.x} cy={origin.y} r={innerRadius} style={circleStyle}
                />
            </g>
        );
    }
}

class CenterLabel extends React.Component {
    render() {
        const {datum, active, color} = this.props;
        const text = [ `${directions[datum._x]}`, `${Math.round(datum._y1)} %done` ];
        const baseStyle = { fill: color.highlight, textAnchor: "middle" };
        const style = [
            { ...baseStyle, fontSize: 18, fontWeight: "bold"},
            { ...baseStyle, fontSize: 12 }
        ];

        return active ?
            (
                <VictoryLabel
                    text={text} style={style} x={175} y={175} renderInPortal
                />
            ) : null;
    }
}

class HealthChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { wind: this.getWindData() };
    }

    componentDidMount() {
        this.setStateInterval = window.setInterval(() => {
            this.setState({ wind: this.getWindData() });
        }, 4000);
    }
    componentWillUnmount() {
        window.clearInterval(this.intervalIndex);
    }
    getWindData() {
        return _.keys(directions).map((d) => {
            const speed = Math.floor(_.random() * 17) + 4;
            return {
                windSpeed: speed,
                windGust: speed + _.random(2, 10),
                windBearing: +d
            };
        });
    }

    render() {
        return (
            <svg viewBox="0 0 400 400" height={300}>
            <VictoryChart
                polar
                animate={{ duration: 500, onLoad: { duration: 500 } }}
                theme={VictoryTheme.material}
                innerRadius={innerRadius}
                domainPadding={{ y: 10 }}
                events={[{
                    childName: "all",
                    target: "data",
                    eventHandlers: {
                        onMouseOver: () => {
                            return [
                                { target: "labels", mutation: () => ({ active: true }) },
                                { target: "data", mutation: () => ({ active: true }) }
                            ];
                        },
                        onMouseOut: () => {
                            return [
                                { target: "labels", mutation: () => ({ active: false }) },
                                { target: "data", mutation: () => ({ active: false }) }
                            ];
                        }
                    }
                }]}
            >
                <VictoryPolarAxis
                    dependentAxis
                    labelPlacement="vertical"
                    style={{ axis: { stroke: "none" } }}
                    tickFormat={() => ""}
                />
                <VictoryPolarAxis
                    labelPlacement="parallel"
                    tickValues={_.keys(directions).map((k) => +k)}
                    tickFormat={_.values(directions)}
                />
                <VictoryStack>
                    <VictoryBar
                        style={{ data: {
                            fill: (d, a) => a ? orange.highlight : orange.base,
                            width: 40
                        } }}
                        data={this.state.wind}
                        x="windBearing"
                        y="windSpeed"
                        labelComponent={<CenterLabel color={orange}/>}
                    />
                    <VictoryBar
                        style={{ data: {
                            fill: (d, a) => a ? red.highlight : red.base,
                            width: 40
                        } }}
                        data={this.state.wind}
                        x="windBearing"
                        y={(d) => d.windGust - d.windSpeed}
                        labelComponent={<CenterLabel color={red}/>}
                    />
                </VictoryStack>
                <CompassCenter/>
            </VictoryChart>
            </svg>
        )
    }
}

export default HealthChart;
