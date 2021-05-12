import React, { Component, createRef } from 'react'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import './App.css'
import './animations.css'

//Firebase
import base from './base'

//Animation
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    const ref  = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    var messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0,-10)
      .forEach(key => {
        messages[key] = null
      })
  
    this.setState({ messages })
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render () {
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition 
          timeout={200}
          classNames='fade'
          key={key}>
          <Message
            key={key}
            isUser={this.isUser}
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo} />
        </CSSTransition>
      ))

    return (
      <div className='box'>
        <div className='messages' ref={this.messagesRef}>
          <TransitionGroup className='message'>
            { messages }
          </TransitionGroup>
        </div>
        <Formulaire 
          length={140}
          pseudo={this.state}
          addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App