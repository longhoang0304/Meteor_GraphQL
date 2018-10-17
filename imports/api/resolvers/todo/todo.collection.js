import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


const Todo = new Mongo.Collection('todo');
const Schemas = {};

Schemas.Todo = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 128,
    required: true,
  },
  content: {
    type: String,
    label: 'Content',
    max: 1024,
    autoValue: "",
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: Date.now(),
  },
});

Todo.attachSchema(Schemas.Todo);

export default Todo;