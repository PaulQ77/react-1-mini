import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      picture: '',
      name: '',
      friends: [{
        picture: 'https://http.cat/404',
        name: 'Julius',
      }, {
        picture: 'https://http.cat/500',
        name: 'Fallout boy',
      }]
    };
  }

  updatePicture(pictureValue){
    this.setState({
      picture: pictureValue
    })
  }

  updateName(nameValue){
    this.setState({
      name: nameValue
    })
  }

  addFriend(){
    const newFriends = this.state.friends.slice();
    newFriends.push({
      picture: this.state.picture,
      name: this.state.name,
    });


    this.setState({
      picture: '',
      name: '',
      friends: newFriends,
    });
  }



  render() {
    return (
      <div>
        <h1>My friends list</h1>
        <div>
          <h2>Add a friend</h2>
          Picture: <input onChange= {event => this.updatePicture(event.target.value)} value={this.state.picture}/>

          Name: <input onChange= {event => this.updateName(event.target.value)} value={this.state.name}/>

        <button onClick= {() => this.addFriend()}>Add friend</button>
        </div>
        <div className ='friends-list'>
          {this.state.friends.map((friend, index) => {
            return <div key={index}>
            Name: {friend.name}
            <img className="friend-picture" src={friend.picture}/>

              </div>
          })}
        </div>
        <div className="debug">
          <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
        </div>
      </div>
    );
  }
}

export default App;
