# Getting Started with NestJS

## Understanding the Building blocks of Nest.js
The following are the building blocks used when building Nest.js applications:
- Controllers
- Providers
- Modules

We’ll start by looking at controllers. Like most web frameworks, controllers in Nest.js are responsible for handling any incoming requests and returning responses to the client side of the application. For example, if you make an API call to a particular endpoint, say /home, the controller will receive this request and based on the available resources, it will returned the appropriate response.

Nest.js was structured in a way that the routing mechanism is able to control which controller will be responsible for handling a particular request.

## Step 1-Installig Nest.js
- `npm install -g @nestjs/cli`
- new projects : `nest new bookstrore-nest`
- `npm run start` atau untuk nodemon `npm run start:dev` 

## Step 2-Generating a Module
- `nest generate module books`


## Step 3-Creating Routes and Controllers
- `nest generate controller books`

## Step 4-Setting up a services
- `nest generate service books`

## Step 5-Injecting the Service into the Controller
use dependency injection design pattern to pass the BooksService into the BooksController through a constructor.


## Source 
-[digital ocean](https://www.digitalocean.com/community/tutorials/getting-started-with-nestjs)

