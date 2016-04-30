import { Meteor } from 'meteor/meteor';
import { Posts } from './collections.js';

Meteor.methods({
  insertPost: function(title, slug) {
    Posts.insert({ title: title, slug: slug });
  }
});
