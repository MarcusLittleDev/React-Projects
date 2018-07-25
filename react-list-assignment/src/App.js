import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    text:''
  }

  textLengthHandler = (event) => {

    this.setState({text:event.target.value});
  }

  deleteCharHandler = (index) => {
    let text = this.state.text.split('');
    text.splice(index, 1);

    this.setState({text:text.join('')});


  }
  render() {
    const letters = this.state.text.split('').map((letter, index) => {
      return <Char
        character={letter}
        key={index}
        click={() =>this.deleteCharHandler(index)}/>
    })
    return (
      <div className="App">
        <input
          type='text'
          onChange={this.textLengthHandler}
          value={this.state.text}/>
        <p>{this.state.length}</p>
        <Validation length={this.state.text.length}/>
        {letters}
      </div>
    );
  }
}

export default App;
