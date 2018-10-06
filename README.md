# Meteor + GraphQL Sample Project

This project contains Apollo setup for MeteorJS Framework

## Requirements
- NodeJS
- MeteorJS

## Project Structural
```bash
# client folder
client/
├── main.css
├── main.html
└── main.js

# folder contains code for server task
server/
└── main.js

# test folder
test/
└── main.js

# ui code, startup or another code that used by client and server goes here
imports/
├── api/
|   ├── resolvers/
|   |   ├── index.js # contains all resolver
|   |   └── hello.js # resolver for hello schema
|   |
|   └── schemas/
|       ├── index.js # index contains all schemas
|       └── hello.gql # server graphql schema
|
├── query/
|   └── hello.gql # client query schema
|
├── startup/
│   ├── client/
|   |   ├── apollo-boost.js # setup apollo client using apollo boots library
|   |   ├── apollo-client.js # setup apollo client using apollo client library
|   |   └── index.js
│   └── server/
|       └── index.js
|
└── ui/
    └── App.js
```

## Installation
1. Clone the project
```
git clone https://github.com/longhoang0304/Meteor_GraphQL.git && cd Meteor_GraphQL
```
2. Install packages and dependencies
```
meteor npm install
```
3. Start the server
```
meteor
```
4. Test GraphQL API
```
http://localhost:3000/graphql
```