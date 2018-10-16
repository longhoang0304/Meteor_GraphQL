import React from 'react';
import _ from 'lodash';

const MessageScreen = ({ message }) => (
  <div id='message-loader'>
    {_.isString(message) ? message : message.message}
  </div>
);

export default MessageScreen;