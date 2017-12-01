import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Biography from './biography.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      vron: {
        name: "V-Ron",
        bio: "My head exploded.",
        picture: "https://pbs.twimg.com/profile_images/714604156212932608/eE6okxre_200x200.jpg"
      },
      ry: {
        name: "Ry",
        bio: "must. do. minecraft.",
        picture: "http://lh6.ggpht.com/-5DBiYII2t7w/UownPivHIRI/AAAAAAAACB0/wCrwpK1xBqs/Flickr-4918575268.jpg"
      },
      cris: {
        name: "Cris",
        bio: "Reacciona!",
        picture: "http://images.ridemonkey.com/index.php?size=full&src=http%3A%2F%2Fwww.chicagosean.com%2Fwp-content%2Fuploads%2F2014%2F10%2Fmind-blown.jpg"
      }

    }
  }
  render() {
    return (
      <div className="App">
        <Biography person={this.state.vron} />
        <Biography person={this.state.ry} />
        <Biography person={this.state.cris} />
      </div>
    );
  }
}

export default App;
