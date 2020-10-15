# Dash Mem Leak

Dash.js keeps a running array of singletons for each dash instance that is created and they do not get cleared out.


## Setup

```
yarn install
node bin/modify-dash.js
yarn start
```

The `modify-dash.js` script just adds 2 console.log statements to `FactoryMaker.js` to make the memory leak obvious.


## Run

* Open `http://localhost:3000/`
* Open the dev tools and look at the console log.
* Press the 'recreate' button

Watch as the count of `singletonContexts` goes up. It never goes down even though we call `reset()` on MediaPlayer and the [docs](http://cdn.dashjs.org/latest/jsdoc/module-MediaPlayer.html) say about `reset`: "Calling this method is all that is necessary to destroy a MediaPlayer instance."




