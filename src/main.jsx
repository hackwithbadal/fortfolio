import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
const App = lazy(() => import('./App'));
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div className='flex h-screen w-screen justify-center items-center'>Loading....</div>}>
    <App />
  </Suspense>
)
