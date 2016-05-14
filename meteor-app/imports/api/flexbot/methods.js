import { Meteor } from 'meteor/meteor'
import { PrecioLechuga } from '/imports/api/flexbot/collections.js'

Meteor.methods({
  updateLechuga (newPrice) {
    PrecioLechuga.upsert({}, {
      $set: {
        price: newPrice,
        updatedAt: new Date
      }
    })
  }


})
