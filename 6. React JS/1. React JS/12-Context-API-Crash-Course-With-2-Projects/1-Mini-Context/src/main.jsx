import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*
Context API:- Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.

Redux:- Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

Redux-Toolkit:- Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic, and it provides good defaults and simplifies common use cases.

React-Redux:- React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

Zustand:- Zustand is a small, fast and scalable bearbones state-management solution using simplified flux principles. It has a minimal API and is very flexible.

*/