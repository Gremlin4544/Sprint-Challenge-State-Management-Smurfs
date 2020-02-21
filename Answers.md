1. What problem does the context API help solve?
    Context API provides an alternative to prop-drilling. When a child component needs state that has to be passed down as props along the path to the child component that needs that state data. Some components receive props that they don’t use (except to pass along). With context API, the components that are nested inside the Provider have access to state data if they need it, without worrying about a direct line of passing props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are made by action creators. They are objects with one required parameter of type, and an optional parameter called payload. The type describes the interaction/event that took place, and the payload is the data that the reducer will need. Actions are sent to the reducer.

    Reducers are pure functions that take in actions and return new state. The action type determines which code inside the reducer is run, to update a copy of the state and then return that new, updated copy. With the same input, a reducer will return the same output each time.

    Store is a JavaScript object that stores the state of an application. You can connect components to it in so that the components can receive the store data as props. The store is not modified, meaining, its properties don’t change, or can be mutated. Making it easier to access the store's data and maintain an organized and cohesive structure for the state.

    The store is known as a 'single source of truth' in a redux application because it is one huge object that describes the state of the application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the data needed throughout an application. If set up correctly, any component in an application can access it, making it ‘global’. Component state is data that is local to a single component. It can’t be seen outside of the component, unless the component passes down the state as props. To decide which to use, it depends on what data will be needed. If it is needed in multiple cases, then application state, such as in a redux store, would be a great choice. . If only used in one component, putting that data in a global state may be an overkill.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is middleware that lets us write functions that return another function (thunks), in our action creators. This helps with async operations and side effects. Thunk(s) can delay the dispatch of an action or call a function to pass in to dispatch and get state.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    My favourite state management system is Redux because it seems to be more structured and complete. TO me, it seems more like a finite state machine , especially for how state is modified. This allows it to be more easily maintained and tested. 
