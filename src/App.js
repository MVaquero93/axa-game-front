import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import CharacterTable from './components/character-table'
import Table from "./components/character-table/table";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters:{},
      searchName: "",
      searchAge: '',
      loading: true
    }
  }
  componentWillMount(){
    fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then(results =>  results.json())
      .then(results =>{
        this.setState({
           characters: results.Brastlewark,
           loading: false
         })
       })
  }

  // This can be improved doing another function.
  filter(){
    const lowerCaseSearchName = this.state.searchName.toLowerCase();
    if(this.state.searchName && this.state.searchAge) {
      let filtered = {}
      filtered = this.state.characters.filter(x =>
        x['name']
          .toLowerCase()
          .includes(lowerCaseSearchName)
        )
        return filtered.filter(x =>
         x['age']
           .toString()
           .includes(this.state.searchAge)
        )
    } else {
      if(this.state.searchName) {
        return this.state.characters.filter(x =>
         x['name']
           .toLowerCase()
           .includes(lowerCaseSearchName)
         )
      }
      if(this.state.searchAge) {
         return this.state.characters.filter(x =>
          x['age']
            .toString()
            .includes(this.state.searchAge)
         )
      } else {
        return this.state.characters
      }
    }
  }
  render() {
    let content;

    if(this.state.loading) {
        content = <h1>Loading...</h1>
    } else {
      content = null
    }
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Grid container
              spacing={24}
              className="container">
          <Grid item xs={12}>
            <h4 align="left">Filters:</h4>
          </Grid>
          <TextField
            label="Name"
            className="filter-input"
            value={this.state.searchName}
            onChange={e => this.setState({ searchName: e.target.value })}
          />
          <TextField
            label="Age"
            value={this.state.searchAge}
            onChange={e => this.setState({ searchAge: e.target.value })}
          />
        </Grid>
        <Table data={this.filter()} />
        {content}
      </div>
    );
  }
}

export default App;
