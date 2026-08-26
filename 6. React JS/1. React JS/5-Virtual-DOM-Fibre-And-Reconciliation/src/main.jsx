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
createRoot --> DOM
Virtual DOM -->
Fibre --> React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over   two years of research by the React team.   Website: https://github.com/acdlite/react-fiber-architecture

Reconcilition -->

React Components, Elements, and Instances - "Component" is often an overloaded term. A firm grasp of these terms is crucial.

Reconciliation - A high-level description of React's reconciliation algorithm.

React Basic Theoretical Concepts - A description of the conceptual model of React without implementation burden. Some of this may not make sense on first reading. That's okay, it will make more sense with time.

React Design Principles - Pay special attention to the section on scheduling. It does a great job of explaining the why of React Fiber.

What is reconciliation?
reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.

update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM

Reconciliation versus rendering
The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)

Scheduling
scheduling
the process of determining when work should be performed.
work
any computations that must be performed. Work is usually the result of an update (e.g. setState).

What is a fiber?
We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

React Fiber is the core rendering and reconciliation engine introduced in React 16 as a complete rewrite of React’s internal algorithm. Its primary purpose is to enable incremental rendering—the ability to split heavy rendering work into smaller chunks, distribute them across multiple frames, and pause, resume, or abort work as needed.
*/