import React, { Component } from 'react';
import HogTile from './HogTile';

class HogContainer extends Component {

  renderHogs(){
    return this.props.hogs.map((hog) => {
      if(!this.props.hiddenHogs.includes(hog)) {
        return <HogTile hog={hog} hideHog={this.props.hideHog}/>
      }
    })
  }

  renderHiddenHogs(){
    return this.props.hiddenHogs.map((hog) => {
      return <HogTile hog={hog} hideHog={this.props.hideHog}/>
    })
  }

  render() {
    return (
      <div className="App">
        <div style={{border: '2px solid black'}}>
          {this.props.showHiddenHogs ? this.renderHiddenHogs() : null}
        </div>
        { this.renderHogs() }
      </div>
    )
  }
}

export default HogContainer;
