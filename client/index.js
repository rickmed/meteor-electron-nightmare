import 'meteor-imports'
const { Mongo } = Package.mongo
import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import { syncWithMeteor } from './helpers.js'

const Listings = new Mongo.Collection('listings')


const state = observable({
  listings: []
})

syncWithMeteor(state, 'listings', () => Tasks.find().fetch())

const App = observer(React.createClass({
  newListing() {

  },
  render() {
    return (<div>
      <h3>Insert New listing below</h3>
      <form onSubmit={this.newListing}>
        <input type="text"/>
      </form>
    </div>)
  }

}))

ReactDOM.render(<App />, document.getElementById('react-root'))
