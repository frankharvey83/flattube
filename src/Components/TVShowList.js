import React, { Component } from 'react';
import TvShow from './tvShow.js';

class TVShowList extends Component {

  render() {

    const mapTvShows = this.props.tvShows.map((show) => {
      return  <TvShow handleClick={ this.props.handleClick } key={ show.id } id={ show.id } name={ show.name } genres={ show.genres } summary={ show.summary}/>
    })


    return (
      <div className="tvShowList">
        { mapTvShows }
      </div>
    );
  }

}

export default TVShowList;
