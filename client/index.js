import 'meteor-imports'
const { Mongo } = Package.mongo
import React from 'react'
import ReactDOM from 'react-dom'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { syncWithMeteor } from './helpers.js'

const Listings = new Mongo.Collection('listings')


const state = observable({
  listings: []
})

syncWithMeteor(state, 'listings', () => Listings.find().fetch())

const App = observer(React.createClass({

  newListing(ev) {
    ev.preventDefault()
    const inputEl = this.refs.input
    const input = inputEl.value.trim()

    Listings.insert({
      name: input,
      complete: false,
      createdAt: new Date()
    })

    inputEl.value = ''
  },

  render() {
    return (<div>
      <h3>Insert New listing below</h3>
      <form onSubmit={this.newListing}>
        <input type="text" placeholder="Listing name" ref="input"/>
      </form>
      <ul>
        {state.listings.map( listing =>
          <li key={listing.name}>{listing.name}</li>
        )}
      </ul>
    </div>)
  }

}))

ReactDOM.render(<App />, document.getElementById('react-root'))
