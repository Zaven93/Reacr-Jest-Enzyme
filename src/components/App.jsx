import React, {Component} from "react"
import {Button} from "react-bootstrap"

import {max_number} from "../helper"
import Gift from "./Gift"

class App extends Component {
    constructor(){
        super()

        this.state = {
            gifts: []
        }
    }

    addGift = () => {
        const {gifts} = this.state

        const ids = this.state.gifts.map(gift => gift.id)

        const max_id = max_number(ids)

        gifts.push({id: max_id + 1})

        this.setState({gifts})
    }

    removeGift = (id) => {
        const filteredGifts = this.state.gifts.filter(gift => gift.id !== id)

        this.setState({gifts: filteredGifts})
    }

    render(){
        return (
            <div>
                <h2>Gift Giver</h2>
                <Button className="btn-add" onClick={this.addGift}>Add a Gift</Button>
                <div className="gift-list">
                    {
                        this.state.gifts.map(gift => (
                            <Gift gift removeGift={this.removeGift} key={gift.id} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default App