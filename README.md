# react-native-device-info integration with react-native-web


## Installation
*   Clone this project.
*   `npm install`
*   A bug in `art` causes a transpilation error (<https://github.com/sebmarkbage/art/pull/16>). Patch the file `node_modules/art/modes/fast-noSideEffects.js`
by replacing:
```
var canvas = document.createElement('canvas');
```
with
```
var canvas = typeof window !== 'undefined' && window.document && window.document.createElement && document.createElement('canvas');
```

## Build
*   `npm run build`
