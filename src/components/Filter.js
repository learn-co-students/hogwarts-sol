import React, { Component } from 'react';

class Filter extends Component {
  constructor(props){
    super(props)
    this.state= {
      showGreased: false
    }
  }
  handleCheckbox(){
    this.props.handleCheckbox(!this.state.showGreased)

    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  handleSelect(e){
    const filterType = e.target.value
    this.props.handleSelect(filterType)
  }

  render() {
    return (
      <div className="App">
        <input type="checkbox" 
          onChange={() => this.props.toggleHiddenHog()} />
          <label>Show Hidden Hogs</label><br />
        <input type="checkbox" 
          onChange={() => this.handleCheckbox()} />
          <label>Greased</label><br />
        <select onChange={(e)=>{this.handleSelect(e)}}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }
}

export default Filter;
