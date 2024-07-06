import { createContext,useEffect,useState} from "react";


export const DataContext=createContext({})
export const DataProvider=({children})=>{
    const title="Currency Converter"
    const [showButton,setShowButton]=useState(false)
    const [fromCurr,setFromCurr]=useState('AUD')
    const [toCurr,setTocurr]=useState('AUD')
    const [amount,setAmount]=useState('')
    const [result,setResult]=useState("")
    const [dropDown,setDropDown]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [errorMessage,setErrorMessage]=useState('')
    useEffect(()=>{
        async function totalCurrencys(){
            const host = 'api.frankfurter.app';
            try{
                let respons=await fetch(`https://${host}/currencies`)
                let data=await respons.json()
                let filteredData=Object.entries(data)
                setDropDown(filteredData)
            }
            catch(err){
                setErrorMessage(err.message)
    
            }
        }
        totalCurrencys()

    },[])
    async function processData(){
        const host = 'api.frankfurter.app';
        let amt=Number(amount)
        try{
            let respons=await fetch(`https://${host}/latest?amount=${amt}&from=${fromCurr}&to=${toCurr}`)
            let res=await respons.json()
            let rates= Object.entries(res.rates)
            setResult(`${toCurr}: ${rates[0][1].toFixed(2)} `)
        }
        catch(err){
            console.log(err.message)
        }
        finally{
            setAmount("")
            
        }
    }
         return(
        <DataContext.Provider value={{
            isLoading,setIsLoading,dropDown,processData,result,setResult,amount,setAmount,title,showButton,setShowButton,fromCurr,setFromCurr,toCurr,setTocurr
        }}>
            {children}
        </DataContext.Provider>
     )
}
export default DataContext