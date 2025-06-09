import React from 'react'
import ReactDOM from 'react-dom/client'
import appIcon from '@/resources/build/icon.png'
import { WindowContextProvider, menuItems } from '@/lib/window'
import App from './app'
import './styles/app.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    {/* window Context Provider  == > Title bar eg == > logo , app name (- + close button) */}
    <WindowContextProvider titlebar={{ title: 'KRhythm Sensing Technology', icon: appIcon, menuItems }}>
      <App />
    </WindowContextProvider>
  </React.StrictMode>
)
// "tailwind-merge": "^3.3.0",
    // "tw-animate-css": "^1.3.2"