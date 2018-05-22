import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {

  state = {
    shows: []
  }

componentDidMount() {
  Adapter.getShows()
  .then(data => this.setState({
    shows: data
  }))
}

handleFilterChange = (e) => {
  return this.state.shows.filter((show) => show.genres.includes(e.target.value))

}

  render = () => {
    console.log(this.state.shows[1])
    return (
      <div className="App">
        <Filter handleFilterChange={this.handleFilterChange} />

        <TVShowList
          currentDetail={this.state.currentDetail}
          currentId={this.state.currentId}
           handleClick={this.handleClick} tvShows={this.state.shows} />
      </div>
    );
  }
}

export default App;
