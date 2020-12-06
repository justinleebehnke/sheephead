import React, { Component } from 'react'
import Hand from './Hand'
import PlayerLayout from './PlayerLayout'

class GameBoard extends Component {
  render() {
    return (
      <div>
        <PlayerLayout />
        <Hand cardsInHand={['2d', '2c', '2d']} />
      </div>
    )
  }
}

export default GameBoard
