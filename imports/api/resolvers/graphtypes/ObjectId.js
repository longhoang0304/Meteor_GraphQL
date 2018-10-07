import { GraphQLScalarType } from 'graphql';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';

const { ObjectID } = Mongo.Collection;
const parseObjectId = (_id) => (check(_id, ObjectID) ? ObjectID(_id) : null);


export default new GraphQLScalarType({
  name: 'ObjectId',
  description: 'The `ObjectId` scalar type represents a mongodb unique ID',
  serialize: String,
  parseValue: parseObjectId,
  parseLiteral(ast) {
    return parseObjectId(ast.value);
  },
});
