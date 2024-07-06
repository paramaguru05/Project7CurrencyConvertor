import React, { useContext } from 'react'

import DataContext from '../context/DataContext'

const CurrencyDetails = () => {
    
    const {dropDown,processData,result,setResult,amount,setAmount,showButton,setShowButton,fromCurr,setFromCurr,toCurr,setTocurr}=useContext(DataContext)
  return (
    <main className={`w-11/12 md:w-2/3 lg:w-1/2 transition-all ease-linear duration-300 bg-white shadow-2xl  absolute left-5 md:left-20 lg:left-64 py-4 ${showButton?`-bottom-5`:`-bottom-24`} rounded-2xl`}>
        <p className='text-center mt-2 font-bold font-serif'>From Currency</p>
        <div id='fromCurrency' className='flex   justify-evenly mt-3'>
            <select value={fromCurr} onChange={(e)=>setFromCurr(e.target.value)} className='outline-none bg-blue-500 px-4 py-1 text-white rounded-lg '>
                {/* <option  value="USD">USD</option> */}
                {dropDown.map((val,i,arr)=>{
                    return <option key={i} value={arr[i][0]}>{arr[i][0]}</option>
                })}
            </select>
            <label className='absolute -left-full' htmlFor="fromcurrency"></label>
            <input  value={amount} type="text" className='bg-blue-400 text-white pl-4 rounded-lg placeholder:text-white py-1 cursor-pointer outline-none  font-semibold'  onChange={(e)=>setAmount(e.target.value)} onClick={()=>setShowButton(true)} placeholder='Amount' id='fromcurrency' />
        </div>
        <p className='text-center mt-2 font-bold font-serif'>To Currency</p>
        <div id='fromCurrency' className='flex   justify-evenly mt-3'>
            <select value={toCurr} onChange={(e)=>setTocurr(e.target.value)} className='outline-none  bg-blue-500 px-4 py-1 text-white rounded-lg '>
                {dropDown.map((val,i,arr)=>{
                    return <option key={i} value={arr[i][0]}>{arr[i][0]}</option>
                })}
            </select>
            <label className='absolute -left-full' htmlFor="fromcurrency"></label>
            <input type="text" className='bg-blue-400 text-white pl-4 rounded-lg placeholder:text-white py-1 cursor-pointer outline-none  font-semibold' placeholder='RESULT' id='fromcurrency' value={result} onChange={(e)=>setResult(e.target.value)} />
        </div>
        <div className='flex justify-center mt-3 -mb-5'>
            <button onClick={()=>processData()} className='bg-blue-600 px-5 py-1 rounded-xl text-white italic -mb-3 active:bg-blue-300 shadow-lg '>Convert</button>
        </div>
    </main>
  )
}

export default CurrencyDetails