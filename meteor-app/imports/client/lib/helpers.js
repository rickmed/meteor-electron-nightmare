import { Tracker } from 'meteor/tracker'
import { extendObservable, isObservableArray, isObservableObject } from 'mobx'

export function syncWithMeteor (mobxObj, attr, fetchFunc, dbObjProp) {

  const obj = mobxObj[attr]

  if ( isObservableArray(obj) ) {
    Tracker.autorun( () => {
      extendObservable(mobxObj, { [attr]: fetchFunc() } )
    })
  }

  else if ( isObservableObject(obj) ) {
    Tracker.autorun( () => {
      const dbData = fetchFunc()
      if (dbData.length > 0) {
        extendObservable(mobxObj, { [attr]: dbData[0] } )
      }
    })
  }

  else if (dbObjProp) {
    Tracker.autorun(() => {
      const dbData = fetchFunc()
      if (dbData.length > 0) {
        extendObservable(mobxObj, { [attr]: dbData[0][dbObjProp] } )
      }
    })
  }

  else return

}
