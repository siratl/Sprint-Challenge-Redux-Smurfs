1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 -- An **action** is an object with a type that is used to alter the state through a dispatch of payload or some data to the reducer.

   A **reducer** is an accumulator or function that receives the actions from the action creator and returns a single object known as the new/updated state.

   The **store** is an object that keeps track of the various states the application can encounter.

   The **store** is known as a single source of truth because the state accessible to the entire application is stored there in an immutable, Read-Only format which components are subscribed to and would only change data on the UI if the state changes. The only way to change data in the state is to dispatch an action.

2. What is the difference between Application state and Component state? When would be a good time to use one over the other?
 -- The Application state is teh immutable piece of data that is held in the store and accessible throughout the application.

    A Component state, however, is stored inside a single component with properties being passed down to children components.

3. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 -- **Redux-thunk** is a middleware that serves as an assistant within our code which helps dispatch actions asynchronously. It allows action creators consist of promises.