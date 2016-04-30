import { Meteor } from 'meteor/meteor';
import { Posts } from './collections.js';

Meteor.publish('posts', function() {
  return Posts.find({});
});
