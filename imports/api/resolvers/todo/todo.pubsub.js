import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

const payload = {
  todoAdded: {
    _id: '123',
    title: 'Sub',
    content: 'Pub',
    createdAt: Date.now(),
  }
};

pubsub.publish('todoAdded', payload);