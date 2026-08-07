import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*
--> react
--> react-dom ->  web page
--> react-native -> mobile app

Why to Learn React JS?

makes easy to manage & build complex front end
Single page Application

This is a Library -> don't follow strict rules, you can use any library with react, you can use any state management library, routing library, styling library, etc.

Doesn't follow folder structure
Doesn't need to reload whole page(doc)
Use DOM Component(Document Object Model) Reload
Create a Copy of Actual React DOM
Reuseing of Component
Doesn't care how you handle routing, styling or state
It's just follow convention not follow estrict rule  

Q. Why react was created?

Ans. Fantom mesage Problem, React was created to solve this problem, message was not rendering properly, so react was created to solve this problem not able to clean the pop up message.

State - > JS & UI -> DOM , need to shink state and UI.
Virtual DOM, Fibre,difing algo, hydration

Topic to Learn

-> coree of react ( State or UI manipulation, JSX)
-> Resuing of components (props)
-> How to propagate change(hooks)
-> SPA

Additional Addon to React
-> Router (react don't have Router)
-> State Management (react don't have state management)
-> Redux, Redux Toolkit, Zustand, Recoil, Jotai, Mobx, Valtio, XState Context API
-> Class based component Legacy code
-> BAAS apps social media clone, e-commerce apps, firbase, supabase, appwrite, pocketbase, etc.

After React

-> react is not a complete solution in most case no seo, browser Render of JS , no routing
-> Freameorks, NextJS, Gatsby , Remix, Qwik, SolidJS, Astro, SvelteKit, NuxtJS, Angular, VueJS, etc.
*/