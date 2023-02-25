import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { TaskContextProvider } from './context/Tasks_context';
import './assets/scss/app.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App/>
    </TaskContextProvider>
  </React.StrictMode>
)
