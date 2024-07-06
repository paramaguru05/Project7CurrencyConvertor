import React from 'react'
import Header from './components/Header'
import Button from './components/Button'
import { DataProvider } from './context/DataContext'
const App = () => {
  
  return (
  <>
    <DataProvider>
        <section className='bg-slate-200 h-screen p-3'>
          <Header/>
          <Button/>
        </section>
    </DataProvider>   
  </>
  )
}
export default App

/**
 * git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/paramaguru05/Project7CurrencyConvertor.git
git push -u origin main
 */