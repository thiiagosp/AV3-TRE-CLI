## AV3-TRE-CLIENT

## Steps to configure the project

### 1 - Make clone of the repo and access the directory
```
git clone https://github.com/thiiagosp/AV3-TRE-CLIENT.git
cd AV3-TRE-CLIENT
```

### 2 - Install npm dependencies
```
npm install gulp -g
npm install
```
_possibly the npm install -g will need be executed with sudo privileges_

### 3 - Run the client server
` gulp `
_the server was setup to live reload with watch task of gulp_

__Interesting Observations__
1. we will use the es6 syntax, that will be transpiled to es2015 using babel
2. we are using angularjs 1.5.8 to simplify and make easy to write the project
3. all code will be write using english language, just to keep our project standardized
