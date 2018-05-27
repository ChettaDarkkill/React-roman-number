import React, { Component } from 'react';
import { Roman } from './Roman/Roman'


class App extends Component {

  state = {
    arabic:null,
    roman:""
  }

  onChangeText = (e) => {
    this.setState({ arabic: e.target.value })
  }

  onClickTranform = () => {
     var romanNumber  = Roman(this.state.arabic)
     console.log(romanNumber)
     this.setState({
       roman:romanNumber
     })
  }

  render() {
    return (
      <div>
          <center>
            <input onChange = {this.onChangeText} value={this.state.arabic} id = "myInput" type = "text" />
            <input onClick = {this.onClickTranform} id = "mySubmit" type = "button" value = "Transform"/>
            <h1 id = "myResult">{ this.state.roman }</h1>
          </center>
      </div>
    );
  }
}

export default App;
