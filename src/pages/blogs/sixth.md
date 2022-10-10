---
path: "/react18-hooks"
date: "2022-10-10"
title: "A guide to use React 18 hooks"
tags: ['react', 'react18', 'hooks', 'useId', 'memo']
description: ""
---

***What are React hooks?***
Hooks are the new patterns that got introduced in React 16.8 version. The React hooks brought those features alive that we were able to do in class components but this time in the functional components. This means these React Hooks Apis could help us interact with the React local states, the lifecycle features and many more things.

![image](https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png)



The existing React Hooks and how we use them
1. [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect):  This hook helps to perform the side effects in the functional components like updating the Dom, and fetching data. It accepts a function which will by default run every time the component re-renders. We can stop this rendering by passing some conditions in the dependency array which is the second argument of useEffect. 
3. [useState](https://reactjs.org/docs/hooks-reference.html#usestate): This hook helps to use and update state variables in a functional component.
4. [useRef](https://reactjs.org/docs/hooks-reference.html#useref): This hook returns a mutable ref object which contains a `.current` property that is used for multiple purpose. 
5. [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback): This hook returns a memoized version of the callback only if the dependencies have changed. Memoization is a way to cache a result thus saving memory usage.
6. [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo):  This hook recomputes the memoized value only when one of the dependencies changes and returns the memoized value. This is also one of the ways to cache a result.
7. [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext): This hook will accept the value provided by React.createContext and. This will only re-render the component whenever its value changes. This thus helps in creating, providing and consuming the context.
8. [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer): This hook allows us to handle some complex state manipulations and updates. We are much familiar about the redux, this hook is somewhat similar to that. it accepts a reducer function and an initial state.
9. [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect): runs _synchronously_ after a render but before the screen is updated.
10. [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue): This hook helps to log important information in the dev tools created by React. This is recommended to use only for custom hooks.
So now we have a gist of the hooks that came before react 18.

## **Lets roll on to the new hooks of React 18**

-   useId
-   useSyncExternalStore
-   useDeferredValue
-   useInsertionEffect
-   useTransition

Lets dive into these new hooks

![image](https://media1.giphy.com/media/l2Sqd4oU8rQVncj5e/giphy.gif?cid=ecf05e47q2xzoqf01ek9dvv947f9w5e7jjno1zild6evrh1i&rid=giphy.gif&ct=g)

1. [**useId**](https://reactjs.org/docs/hooks-reference.html#useid): This hook is helpful where we need to use some unique ids. This was React had proved that it is going to help us to generate unique IDs that could be used for server- and client-rendered content.  This avoids mismatching in the server side rendering that can cause problems.

   Another way we can think of is when we create a form we can suffix/prefix this id for example id+ firstName. This way we can have multiple unique ids. 
   Example:

```js
import { useId } from 'react';


const SimpleForm = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-firstName`}>FirstName</label>
      <div>
        <input id={`${id}-firstName`} type="text" />
      </div>
      <label htmlFor={`${id}-secondName`}>SecondName</label>
      <div>
        <input id={`${id}-secondName`} type="text" />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <SimpleForm />
    </>
  );
}

export default App;
````

2. [**useSyncExternalStore**](https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore): From the name this hook itself clarifies that it will help in sync with the external data sources. We can read and subscribe from external data sources. This is a library hook developed mostly for the library authors to integrate. How to use this?
This method accepts three arguments:

    -   `subscribe`: It is to register a callback that is called whenever the store changes.
    -   `getSnapshot`: It returns the current value of the store.
    -   `getServerSnapshot`:  This is an optional parameter and it returns the snapshot used during server rendering.
This method returns the value of the store

    ```
    import {useSyncExternalStore} from 'react';
    const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
    const selectedField = useSyncExternalStore(store.subscribe, () => store.getSnapshot().selectedField);
    ```

       `getSnapshot`  is used to check if the subscribed value has changed since the last time it was rendered, so the result needs to be referentially stable. That means it either needs to be an immutable value like a string or number, or it needs to be a cached/memoized object.

3. [**useDeferredValue**](https://reactjs.org/docs/hooks-reference.html#usedeferredvalue) The hook tracks a value. If the value changes from an old value to a new one, the hook can return either of the values. The benefit to using `useDeferredValue` is that React will work on the update as soon as other work finishes

```js
const [searchInput, setSearchInput] = useState("");
const searchInputDeferred = useDeferredValue(searchInput);
```

    Here a deferred version of the search input is created. 
    Visit this for an example: https://github.com/joakimsjo/useDeferredValue-example
    More info here: https://github.com/reactwg/react-18/discussions/129

4. [**useInsertionEffect**](https://reactjs.org/docs/hooks-reference.html#useinsertioneffect): `useInsertionEffect` should be used by css-in-js library authors. This hook is limited in scope and does not have access to refs. The hook is fired before all DOM updates. For developers  [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect) or [`useLayoutEffect`](https://reactjs.org/docs/hooks-reference.html#uselayouteffect) should be preferred instead. We all know about the useLayoutEffect which is fired before a useEffect the useInsertionEffect even runs before the useLayoutEffect.

5.[**useTransition**](https://reactjs.org/docs/hooks-reference.html#usetransition)
As the name indicates this hook helps in transition updates.

React state updates are basically of two types. One of them is transition updates that are responsible for the transformation of the UI. The other one is the deflection that we see like click drag etc. The `useTransition` hook allows us to specify some state updates as not as important. By this, we can tell React to prioritise some lower updates to greater prioritised updates, and the application seems much easier to use.

```js
  const [isPending, startTransition] = useTransition();
```

    -   `isPending`  is a boolean. It’s React telling us whether that transition is ongoing at the moment.
    -   `startTransition`  is a function. We’ll use it to tell React  _which_  state update we want to defer.

Example for useTransition: https://codesandbox.io/s/elastic-vaughan-ykzsi0?file=/src/index.js

More info here: https://blog.webdevsimplified.com/2022-04/use-transition/




***So finally we have got some overview of these newly introduced React Hooks, believe me these hooks are going to help us a lot increase performace, help in client as well as server-side rendering and gives us more control over the React as a whole***

Lets start using them and see the magic. 