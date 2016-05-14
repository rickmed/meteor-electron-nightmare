import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { syncWithMeteor } from './lib/helpers.js'
import { PrecioLechuga, Listings } from '/imports/api/flexbot/collections.js'
import Input from './components/Input.jsx'

const state = observable({
  lechuga: {},
  listings: []
})

syncWithMeteor(state, 'lechuga', () => PrecioLechuga.find().fetch())
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
    return ( <div>
      <h1>Bienvenid@ a Flexbot 2</h1>
      <Input state={state}/>
<webview id="foo" src="https://github.com/" style={{display: 'inline-flex', width:'100%', height:'400px'}}></webview>
      <table className="ui definition celled striped unstackable large table">
        <thead className='center aligned'>
          <tr>
            <th></th>
            <th className='single line'>Código Flex</th>
            <th>Dirección</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>mts<sup>2</sup></th>
            <th>Hab</th>
            <th>Baños</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className='center aligned'>
          <tr>
            <td>1</td>
            <td className='left aligned'>15-16156</td>
            <td className='left aligned'>Premier Esmeralda Avenida El Retiro 3-A DM</td>
            <td>Apartamento</td>
            <td>Bsf2,230,000</td>
            <td>95</td>
            <td>2</td>
            <td>2</td>
            <td className="error left aligned">
              <i className="attention icon"></i>
              No actualizada. Muchas letras seguidas en mayúsculas en campo observaciones.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className='left aligned'>15-16156</td>
            <td className='left aligned'>Premier Esmeralda Avenida El Retiro 3-A DM</td>
            <td>Apartamento</td>
            <td>Bsf2,230,000</td>
            <td>95</td>
            <td>2</td>
            <td>2</td>
            <td className="left aligned updating inactve">
              <i className="blue spinner loading icon"></i>
              Actualizando
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className='left aligned'>15-16156</td>
            <td className='left aligned'>Premier Esmeralda Avenida El Retiro 3-A DM</td>
            <td>Apartamento</td>
            <td>Bsf2,230,000</td>
            <td>95</td>
            <td>2</td>
            <td>2</td>
            <td className="positive left aligned">
              <i className="icon checkmark"></i>
              Actualizada
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className='left aligned'>15-16156</td>
            <td className='left aligned'>Premier Esmeralda Avenida El Retiro 3-A DM</td>
            <td>Apartamento</td>
            <td>Bsf2,230,000</td>
            <td>95</td>
            <td>2</td>
            <td>2</td>
            <td className="warning left aligned">
              <i className="icon frown"></i>
              Desactualizada
            </td>
          </tr>
        </tbody>
      </table>
    </div>)
  }

}))

export default App
