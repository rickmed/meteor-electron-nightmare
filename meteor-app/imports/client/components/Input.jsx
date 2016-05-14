import React from 'react'
import { observer } from 'mobx-react'
import { Meteor } from 'meteor/meteor'
const { require } = window.electron.require('electron').remote
const Nightmare = require('nightmare-meteor')

const Input = observer(React.createClass({

  goFlexbot(ev) {
    ev.preventDefault()
    const inputEl = this.refs.input
    const newPrice = parseInt(inputEl.value.trim())
    Meteor.call('updateLechuga', newPrice, () => {
      inputEl.value = ''
    })
  },

  openNightmare: async function () {
    window.nightmare = Nightmare({
      show: true,
      openDevTools: true,
      alwaysOnTop: false
    })

    const link = await window.nightmare
      .goto('http://yahoo.com')
      .type('form[action*="/search"] [name=p]', 'github nightmare')
      .click('form[action*="/search"] [type=submit]')
      .wait('#main')
      .evaluate(`function () {
        const element = document.querySelector('#main .searchCenterMiddle li a').href;
        console.log(element);
        return element;
      }`)    //need to pass as string to pass IPC barrier, include ;

    console.log(link)
  },

  contNightmare: async function () {
    const linkAgain = await window.nightmare
      .getAll('div').attribute('id')

    Meteor.call('updateLechuga', linkAgain.length, () => {
      console.log('lechuga updated!');
    })
  },

  render () {

    const state = this.props.state

    function DateVE (date) {
      return date.toLocaleDateString('es-VE', {
        hour: 'numeric', minute: 'numeric', hour12: true
      })
    }

    function formatRate (int) {
      return new Intl.NumberFormat('es-VE').format(int) + ' bs/usd'
    }

    return (<div class="ui middle aligned grid">

      <div class="left floated five wide column">
        <b>Ingrese Nuevo Precio Lechuga</b> <br></br>
        <div class="ui action input">
          <input type="text" ref='input' placeholder="Nuevo Precio"/>
          <div class="ui primary button" onClick={this.goFlexbot}>
            Update usd
          </div>
          <div class="ui green button" onClick={this.openNightmare}>
            Open nightmare
          </div>
          <div class="ui brown small button" onClick={this.contNightmare}>
            Continue nightmare instance and meteor integration
          </div>
        </div>
      </div>

      {
        state.lechuga.hasOwnProperty('price') ?
          <div id="updatedInfo" class="right floated right aligned six wide column">
            <span>
              <b>Precio de Lechuga: {formatRate(state.lechuga.price)}</b>
              <br/>
              Actualizada: {DateVE(state.lechuga.updatedAt)}
            </span>
          </div>
          : null
      }

    </div>)
  }
}))

export default Input
