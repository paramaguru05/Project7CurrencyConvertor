import React from 'react'
import Header from './components/Header'
import Button from './components/Button'
import { DataProvider } from './context/DataContext'
const App = () => {
  
  return (
  <>
    <DataProvider>
        <section className='bg-blue-50 h-screen p-3'>
          <Header/>
          <Button/>
        </section>
    </DataProvider>   
  </>
  )
}
export default App
