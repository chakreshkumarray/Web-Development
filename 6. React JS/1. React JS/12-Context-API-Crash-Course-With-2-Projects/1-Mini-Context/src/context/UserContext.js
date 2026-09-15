import React from 'react'

const UserContext = React.createContext()

/*
React.createContext() is a function that returns a context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
*/


export default UserContext