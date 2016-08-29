# Node solution with frontend calling API

[![BuildStatus](https://travis-ci.org/stevenalexander/node-web-api.svg?branch=master)](https://travis-ci.org/stevenalexander/node-web-api?branch=master)

Simple solution with a node frontend talking to a node api.

I made this to test how to best structure and test a node express application, separating dependencies and unit testing routes. There's a lot of information out there for simple node applications but not much about best practises or how to structure your applications to make them testable. I found a [useful blog](http://evanshortiss.com/development/javascript/2016/04/15/express-testing-using-ioc.html) about using inversion of control in your routes so they can be tested without all the logic and middleware added as part of the app.js.

## Requires

* node

## Test

```
cd app-api
npm install
npm test

cd ../app-web
npm install
npm test
```

## Run

API

```
cd app-api
npm start
```

Web

```
cd app-web
npm start
```

Frontend will be running on `http://localhost:3000`

## Links

Found these links to be helpful:
* [Unit Testing Express Routers](http://evanshortiss.com/development/javascript/2016/04/15/express-testing-using-ioc.html)
* [Unit Testing with Mocks in Node](http://vansande.org/2015/03/22/unit_testing_with_mocks_in_node_js/)
