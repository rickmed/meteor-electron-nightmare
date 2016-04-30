import 'meteor-imports';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Mongo } from 'meteor/mongo';
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
