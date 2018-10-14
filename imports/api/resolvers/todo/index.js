import Todo from './todo.collection';

const HelloResolvers = {
  Query: {
    Todo: (_, { id }) => Todo.findOne(id),
    TodoList: () => Todo.find({}).fetch(),
  },
  Mutation: {
    addTodo: (_, args) => {
      const _id = Todo.insert({
        ...args,
        createdAt: Date.now(),
      });
      if (_id) return Todo.findOne(_id);
      return null;
    },
    removeTodo: (_, { id }) => {
      const oldRecord = Todo.findOne(id);
      const removedRecords = Todo.remove(id);
      if (removedRecords) return oldRecord;
      return null;
    },
    updateTodo: (_, args) => {
      const { id, title, content } = args;
      const updatedRecords = Todo.update(id, {
        $set: {
          title,
          content
        }
      });
      if (updatedRecords) return Todo.findOne(id);
      return null;
    },
  }
};

export default HelloResolvers;