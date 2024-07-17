import React, { useState,useContext } from 'react'
import DataContext from '../context/DataContext';
import { FaChevronDown } from "react-icons/fa";


const CurrencyDetails = () => {

  const {errorMessage,isLoading,showFrom,setShowFrom,showToCurr,setShowToCurr,dropDown,processData,result,setResult,amount,setAmount,showButton,setShowButton,fromCurr,setFromCurr,toCurr,setTocurr}=useContext(DataContext)
  return (
    <>
      <main className={` transition-all ease-in-out duration-500 bg-white containerHight w-11/12 absolute shadow-2xl ${showButton?`-bottom-4`:`-bottom-28`} rounded-lg`}>
            <p className='currencyHeading'>From Currency</p>
            <div className='fromCurrContainer '>
                  
                  <div id='drop-down' className='w-1/3  md:w-1/5'>
                      <div className='fromCurr '>
                        <p className=''>{fromCurr}</p>
                        <p onClick={()=>[setShowFrom(!showFrom), setShowToCurr(false)]} className='baseDownButton'>
                          <button>
                            <FaChevronDown/>
                          </button>
                        </p>
                       </div>
                     {
                      showFrom && <ul onClick={()=>setShowFrom(false)} className='baseUL'>
                          {
                            dropDown.map((val,index)=>{
                              return <li key={index} onClick={(e)=>setFromCurr(e.target.textContent)} className='baseLI'>{val}</li>
                            })
                          }

                      </ul>
                     }
                   </div>
                        <div id='Amount'>
                          <input onClick={()=>[setShowButton(true)]} onChange={(e)=>setAmount(e.target.value)} value={amount} type="text" className='input'  placeholder='Amount'/>
                        </div>
              </div>
              <p className='currencyHeading mt-2'>To Currency</p>
              <div className='fromCurrContainer'>
                  <div id='drop-down' className='w-1/3  md:w-1/5'>
                      <div className='fromCurr'>
                        <p className=''>{toCurr}</p>
                        <p onClick={()=>[setShowToCurr(!showToCurr),setShowFrom(false)]} className='baseDownButton'>
                          <button>
                            <FaChevronDown/>
                          </button>
                        </p>
                  </div>
                     {
                      showToCurr && <ul onClick={()=>setShowToCurr(false)} className='baseUL'>
                          {
                            dropDown.map((val,index)=><li key={index} onClick={(e)=>setTocurr(e.target.textContent)} className='baseLI'>{val}</li>)
                          }
                      </ul>
                     }
                   </div>
                        <div id='Amount'>
                          {isLoading && <input type="text" className='input '  placeholder='Data Loading...'/> }
                          {errorMessage && <input type="text" className='input' onChange={(e)=>setResult(e.target.value)} value={errorMessage} placeholder='Result'/>}
                          {!isLoading && !errorMessage && <input type="text" className='input' onChange={(e)=>setResult(e.target.value)} value={result} placeholder='Result'/>}
                        </div>
              </div>
              <p onClick={()=>processData()} className='absolute  w-full -bottom-3  text-center'><button className='bg-blue-400 px-4 py-1 rounded-lg hover:bg-blue-300 text-white shadow-lg shadow-blue-400'>Converyt</button></p>
      </main>
    </>
  )
}

export default CurrencyDetails
