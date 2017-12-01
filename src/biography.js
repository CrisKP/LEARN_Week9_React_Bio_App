import React, { Component } from 'react';

class Biography extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.person.name}</p>
        <p>{this.props.person.bio}</p>
        <img src={this.props.person.picture} alt={this.props.person.picture}/>
      </div>
    );
  }
}


export default Biography;


// <p>{this.props.v.bio}</p>
// <p>{this.props.v.picture}</p>
