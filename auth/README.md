
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
# new nestjs project named auth
$ nest new auth
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## dependency
```bash
# dotenv 
$ npm install dotenv @nestjs/passport passport passport-local 
$ npm install --save-dev @types/passport-local

# jwt
$ npm install @nestjs/jwt passport-jwt
$ npm install @types/passport-jwt --save-dev
```

## Setting module dan service
```bash
# generate service dan module auth
$ nest g module auth
$ nest g service auth

# generate service dan module users
$ nest g module users
$ nest g service users

# curl test
$ curl -X POST http://localhost:4040/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
# {"userId":1,"username":"john"}

```

## Error
```bash
# error JWT
[Nest] 28643   - 02/22/2020, 7:59:28 PM   [ExceptionHandler] Nest can't resolve dependencies of the AuthService (UsersService, ?). Please make sure that the argument JwtService at index [1] is available in the AppModule context.'

# solusi pada file auth.module.ts
exports: [AuthService, JwtModule]
```

## run test
```bash
$ # POST to /auth/login
$ curl -X POST http://localhost:4040/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
$ # Note: above JWT truncated
```

## run test final
```bash
$ # GET /profile
$ curl http://localhost:3000/profile
$ # result -> {"statusCode":401,"error":"Unauthorized"}

$ # POST /auth/login
$ curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }

$ # GET /profile using access_token returned from previous step as bearer code
$ curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
$ # result -> {"userId":1,"username":"john"}
```


## Setting jwt dengan file private.pem dan public.pem

## Resources
- [Documentations](https://docs.nestjs.com/techniques/authentication)
- [github discuss](https://github.com/nestjs/jwt/issues/63)