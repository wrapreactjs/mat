import React, { Component } from 'react'
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Card from './Card'

const style = {
	width: 400,
}

@DragDropContext(HTML5Backend)
export default class Container extends Component {
	constructor(props) {
		super(props)
		this.moveCard = this.moveCard.bind(this)
		this.state = {
			cards: [
				{
					id: 1,
					text: 'Add MAT to wrapbootstrap',
				},
				{
					id: 2,
					text: 'Prepare for release',
				},
				{
					id: 3,
					text: 'Write documentation',
				},
				{
					id: 4,
					text: 'Bug testing',
				},
				{
					id: 5,
					text:
						'Review for improvements',
				},
				{
					id: 6,
					text: '???',
				},
				{
					id: 7,
					text: 'Get published',
				},
			],
		}
	}

	moveCard(dragIndex, hoverIndex) {
		const { cards } = this.state
		const dragCard = cards[dragIndex]

		this.setState(
			update(this.state, {
				cards: {
					$splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
				},
			}),
		)
	}

	render() {
		const { cards } = this.state

		return (
			<div style={style}>
				{cards.map((card, i) => (
					<Card
						key={card.id}
						index={i}
						id={card.id}
						text={card.text}
						moveCard={this.moveCard}
					/>
				))}
			</div>
		)
	}
}
