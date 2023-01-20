import { useState } from 'react'
import Header from './Layouts/Components/Header';
import MainModel from './Layouts/ThreeJs/MainModel';

function App() {
  return (
    <>
      <div>
        <MainModel />
      </div>
      <div>
        <Header />
      </div>
      <div className='ml-5'>
        badal
      </div>
    </>
  )
}

export default App
