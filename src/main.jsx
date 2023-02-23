import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { TaskContextProvider } from './context/Tasks_context'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App/>
    </TaskContextProvider>
  </React.StrictMode>
)
