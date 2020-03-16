# Exercise: Recast.ly Redux

In this exercise, you're given a simple yet functional React application hooked up to live YouTube data.  Your job is to add redux to our application.  As we plan, more features turn into more components, handlers must be passed further up and down the component tree, or sometimes from laterally across our app... yikes!  This is getting prohibitively complex very quickly!  

One popular solution to the problem of increased complexity is flux design.  This paradigm stresses a *single state object* as the sole "source of truth" for your application, and defines all user *actions* as changes to that state. Actions themselves are simply objects (or, if we are using Redux Thunk, functions), which must pass through a *reducer function* which defines how each action alters the state.  In this sprint, we will walk through the process of converting our codebase to use Redux, a flux implementation that works very well with React.

We have collected some useful [resources](#resources), which you are encouraged to consult.

## High Level Goals of this Sprint

* Learn about Redux and the principals of flux architecture.
* Gain exposure to front-end code bundling using Webpack.
* Get some experience using thunks to dispatch asynchronous actions.

## Project set up

### Webpack

Webpack is the official bundler for React applications.  All React code should be bundled into a single file before being served up to the client.  This achieves two aims:  
  * As our codebase grows, it becomes increasingly cumbersome to manually add script tags to all of our source files to the index.html page.  Bundling allows us to only add a single script tag, which references the bundled file.
  * Multiple script tags means multiple requests, and this means more loading time.  Serving up one big file rather than dozens of smaller files reduces multiple request cycles.
In this sprint, we've given you a pre-built Webpack file.  You'll have to install Webpack (using `npm install` to install from `package.json`). Since locally installing webpack saves executables into `node_modules/.bin`, you'll need to run webpack using the npm script we provided for you, `npm run build` (see [npm docs](https://docs.npmjs.com/misc/scripts#path) for more info). Some useful flags to consider adding to this invocation:
* `-d`: runs Webpack in debug mode, which provides useful error messages to help you understand why Webpack isn't able to bundle your files.
* `-w`: this is the 'watch' flag, and sets webpack to rerun its bundling process every time it detects changes in the source files.

You will experience Webpack more in-depth later on in your Hack-Reactor life, but for now, this is as involved as we need to get.



### Live reloading server

In this sprint, you should continue to use the [Live Server](https://github.com/tapio/live-server) package to launch a simple development server that automatically refreshes when you make changes to a file.

```bash
npm install -g live-server
```

### npm scripts

Last sprint, you were introduced to [scripting](https://docs.npmjs.com/misc/scripts) in npm.  You can continue to use scripting to simplify your life in this sprint, by automating the Webpack process.  Consider writing a `bundle` script, or defining a `start` script that handles the multiple steps involved with getting your development environment up and running!

### Redux Dev Tools

The [Redux Devtools](https://github.com/gaearon/redux-devtools) allow you to inspect your state in graphical form, and presents changes to state as they happen.  They are a useful tool in a Redux developer's toolbox!

## Bare Minimum Requirements
- [ ] Make your API key available to the rest of your application from a new file, 'src/config/youtube.js' Webpack won't build until you create this file.
- [ ] Check out [this article](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react) for a thorough walkthrough of how to implement Redux and Thunk in a React application.
- [ ] Take a moment to think about what actions our application will need.  Remember that actions are objects that describe changes to the redux state.  A good place to start is to think about what ways the user of our site can interact with it.  
- [ ] Define your *action creators* in the actions folder. These are functions which should return your action.
- [ ] Plan out what your application state will look like.  A good place to start is to look at all of the values that are currently stored in state in our React components.  In Redux, we will store all of these values in our Redux state.
- [ ] For each value we intend to save in the state, we'll need a reducer. We'll define these in the reducers directory.
- [ ] Once all of our reducers are written, we need to combine them into a single root reducer using `combineReducers`.
- [ ] Pass the root reducer into `createStore` to define the store object which contains a Redux state.  
- [ ] Read [this article](http://redux.js.org/docs/basics/UsageWithReact.html) to learn about the difference between container components and presentational components.
- [ ] Code out the containers set up for you in the `containers` directory.  These should use the React-Redux `.connect` method to connect the actions you wrote out earlier with the event handlers passed into each component.(Check out the documentation for the `.connect` method [here](https://react-redux.js.org/) for more information)
- [ ] In the `index.js` file, import the `Provider` class from react-redux, and then use it to wrap your `<App />` (Check out the documentation for the Provider component [here](https://react-redux.js.org/) for more information)
- [ ] Swap out the components in `App.js` for the containers you just created.  You shouldn't have to pass any props down to these components, as they will be pulled directly from your store thanks to the `Provider` and `.connect` setup we completed earlier.

### Make your API call play nicely with Redux using Thunk.
Redux Thunk is a library that allows us to dispatch actions asynchronously.  When Thunk is registered as middleware, our actions are able to return not just objects but functions which can do more advanced things (like invoke `dispatch` themselves!)  
- [ ] the Redux Thunk module is already installed in this project.  However, you'll have to require it in your `store.js` file.
- [ ] You'll have to use the `applyMiddleware` method from Redux to allow your store to interpret your thunks.  This should be done in your invocation of `createStore` in `store.js`.
- [ ] in `actions/search.js`, write out a thunk to interact with the YouTube API.  Remember that instead of returning an object, we will now be able to return a function!

## Advanced Content

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

- [ ] Swap out Redux for a different flux implementation (such as [fluxxor](http://fluxxor.com/what-is-flux.html))
- [ ] Take that `createStore` method and throw it away!  Try writing your own implementation of a flux store from scratch.
- [ ] Create a `VideoDetails` component that makes another request to the YouTube API and renders more complete video information to the page
- [ ] Create an auto-play toggle button that will automatically start playing the video selected from `VideoList`
- [ ] Give each video it's own unique url with the help of [React Router](https://github.com/reactjs/react-router)
- [ ] Handle pagination of search results via the YouTube API
- [ ] Refactor `searchYouTube` to use the [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) function to make HTTP requests, instead of `$.ajax`
- [ ] Integrate with the server from the chatterbox-client sprint to create a Twitch-like experience. You will need to build additional models, collections and views. (Don't let yourself be blocked by XSS, solve the XSS problem before it starts!)
    - [ ] Initially, use a single chat feed for the app.
    - [ ] Then, refactor the chat feature so there is one chat room per video. When you select a video, that video's chat history loads. Only the currently selected video should be updating its chat messages. All others should only load when selected.
## Resources

* [Import Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [Export Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
* [Redux Devtools](https://github.com/gaearon/redux-devtools)
* [Redux Documentation](https://redux.js.org) - check out the linked resources in the `Just the Basics` section, especially `React and Redux: An Introduction` and Valentino Gagliardi's post
* [Nice high-level Redux Thunk walkthrough](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
* [Walkthrough of the basic React-Redux patterns](http://redux.js.org/docs/basics/UsageWithReact.html)
* [YouTube API](https://developers.google.com/youtube/v3/getting-started)
* [Intro to Redux video series by Redux creator Dan Abramov](https://egghead.io/series/getting-started-with-redux) - at 2hrs of video it may not be the right resource for use during the sprint, but _highly recommended_ to check out when you have the bandwidth for a deep understanding of how the library works
