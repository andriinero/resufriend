import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './style/index.css'
import './style/layout/mobile.css';
import './style/layout/tablet.css';
import './style/layout/print.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
