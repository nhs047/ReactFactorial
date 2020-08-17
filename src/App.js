import React from 'react';
import './index.css';
import './App.css';
import { Button, TextField } from '@material-ui/core';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', submittedValue: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let factorials=1;
    for(let i=1; i<=parseInt(this.state.value);i++){
      factorials*=i;
    }
    this.setState({submittedValue: factorials});
  }

  render() {
    return (
      <div class="padding-5px">
        <form onSubmit={this.handleSubmit}>
          <h1>Factorial Calculator</h1>
          <TextField
                  onChange={e => this.handleChange(e)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Number"
                  label="Number"
                  name="Number"
                  autoComplete="Number"
                  autoFocus
          />
          <br />
          <Button variant="contained" color="primary" type="submit">Calculate Factorial</Button>
        </form>
        <h2>Factorial: {this.state.submittedValue}</h2>
      </div>
    );
  }
}


export default App;