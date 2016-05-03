import { Meteor, Tracker, Mongo } from './build/9b0601071330c01649c3fe98965faa927bf6f62a.js'
import React from 'react';
import ReactDOM from 'react-dom';

const Posts = new Mongo.Collection('posts');
Meteor.subscribe('posts');


const App = React.createClass({
  insertPost() {
    Meteor.call('insertPost', 'Some Post Title', '/post');
  },
  render() {
    return <div>
      <h1>MeteorImportsWebpack plugin example</h1>
      <button onClick={this.insertPost}>Insert Post</button>
    </div>

  }
})


ReactDOM.render(<App />, document.getElementById('root'));

Tracker.autorun(() => {
  console.log('Nnumber of posts: ' + Posts.find().count());
});
