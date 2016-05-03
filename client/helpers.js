import 'meteor-imports'
const { Tracker } = Package.tracker
import { extendObservable } from 'mobx'

export function syncWithMeteor(obj, attr, func) {
  Tracker.autorun(() => {
    extendObservable(obj, { [attr]: func() })
  })
}
