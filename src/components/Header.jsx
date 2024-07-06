import React from 'react'
import CurrencyDetails from './CurrencyDetails'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
const Header = () => {
  const {title}=useContext(DataContext)
  return (
    <header className=' md:w-2/3 lg:container mx-auto bg-blue-500 relative headerHight rounded-b-3xl flex justify-center'>
        <p className='pt-3 text-center text-2xl text-white font-bold font-mono '>{title}</p>
        <CurrencyDetails/>
    </header>
  )
}

export default Header