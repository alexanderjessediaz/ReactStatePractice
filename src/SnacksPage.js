import React, {Component} from 'react'
import SnackCard from "./SnackCard"

export default class SnacksPage extends Component {

    showSnackCards = () => {
        return this.props.snacks.map(card => {
          return <SnackCard 
            key={card.id}
            snackCard={card}
            />
        })
      }

    render(){
        return(
            <div>
                {this.showSnackCards()}
            </div>
        )
    }
}


