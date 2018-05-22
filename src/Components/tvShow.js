import React from 'react';
import {Card, Col} from 'react-materialize'
import ShowDetail from './ShowDetail.js'
import Adapter from '../Adapter';

class TvShow extends React.Component {
state = {
  details: [],
  isClicked: false
}

  handleClick = () =>{

    Adapter.getShowEpisodes(this.props.id).then((data)=>{
      this.setState({
        isClicked: true,
        details: data
      },()=>{console.log(this.state)})
    })
  }
render(){
  let showDetailElement = null
  if(this.state.isClicked){
    showDetailElement = <ShowDetail details={this.state.details} />
  }

  return (
    <Col m={6} s={12}>
      <Card
        className='blue-grey darken-1'
        textClassName='white-text'
        title={ this.props.name } onClick={()=> this.handleClick()}
      >
      { this.props.summary }
      { showDetailElement }
      </Card>

    </Col>
  );
}



}

export default TvShow;
