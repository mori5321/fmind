import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components'
import './styles/globals/normalize.css'
import './styles/globals/global.css'

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion  */
const target = document.getElementById('root')!

ReactDOM.createRoot(target).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
