import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import HogContainer from './HogContainer';
import Filter from './Filter';
import hogs from '../porkers_data';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      hogs:hogs,
      showHiddenHogs: false,
      hiddenHogs: []
    }
  }

  handleCheckbox(isGreased){
    if (isGreased){
      const filteredHogs = this.state.hogs.filter((hog) => {
        return hog.greased
      })
      this.setState({
        hogs: filteredHogs
      })
    } else {
      this.setState({
        hogs: hogs
      })
    }
  }

  handleSelect(filterType){
    if(filterType === 'weight'){
      this.handleSortByWeight()
    } else if (filterType === 'name'){
      this.handleSortByName()
    }
  }

  handleSortByName(){
    const sortedHogs = this.state.hogs.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); 
      var nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      hogs: sortedHogs
    })
  }

  handleSortByWeight(){
    const sortedHogs = this.state.hogs.sort(function(a, b) {
      const weightKey ='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water' 
      var weightA = a[weightKey]; 
      var weightB = b[weightKey]
      if (weightA < weightB) {
        return -1;
      }
      if (weightA > weightB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      hogs: sortedHogs
    })
  }

  hideHog(hog){
    const hiddenHogs = this.state.hiddenHogs;
    this.setState({
      hiddenHogs: [...hiddenHogs, hog]
    })
  }

  toggleHiddenHog(){
    console.log('hiddenhog in app')
    this.setState({
      showHiddenHogs: !this.state.showHiddenHogs
    })
  }

  render() {
    const {hogs, hiddenHogs, showHiddenHogs} = this.state;
    return (
      <div className="App">
          <Nav />
          <Filter 
            handleCheckbox={(isGreased) => this.handleCheckbox(isGreased)}
            handleSelect={(filterType) => this.handleSelect(filterType)}
            toggleHiddenHog={() => this.toggleHiddenHog()}
          />
              <HogContainer 
                hogs={hogs}
                showHiddenHogs={showHiddenHogs}
                hiddenHogs={hiddenHogs}
                hideHog={(hog) => this.hideHog(hog)}
              />
      </div>
    )
  }
}

export default App;

// HogContainer
// FilterForm
