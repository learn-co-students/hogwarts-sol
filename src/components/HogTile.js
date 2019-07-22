import React, { Component } from 'react';

class HogTile extends Component {
  constructor(props){
    super(props)
    this.state = { showMore: false}
  }
  findImage(){
    const image_path = this.props.hog.name.toLowerCase().split(' ').join('_');
    const image = require(`../hog-imgs/${image_path}.jpg`)
    return image
  }

  handleShow(){
    this.setState({
      showMore: !this.state.showMore
    })
  }

  renderShowMore(){
    const {hog} = this.props;
    const weightKey= 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return (
      <div>
        <p>specialty: {hog.specialty}</p>
        <p>{hog.greased ? 'greased' : 'ungreased'}</p>
        <p>medal: {hog['highest medal achieved']}</p>
        <p>weight: {hog[weightKey]}</p>
      </div>
    )
  }

  render() {
    const image_path = this.findImage()
    return (
      <div className="App">
        <img src={image_path} height={50} width={50}/>
        <p>{this.props.hog.name}</p>
        {this.state.showMore ? this.renderShowMore() : null}
        <button onClick={() => this.handleShow()}>{this.state.showMore ? 'Show Less' : 'Show More'}</button>
        <button onClick={() => this.props.hideHog(this.props.hog)}>Hide Hog</button>

      </div>
    )
  }
}

export default HogTile;
