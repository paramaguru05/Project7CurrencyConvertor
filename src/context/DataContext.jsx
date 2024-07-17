import { createContext,useEffect,useState} from "react";
import api from '../api/currencyApi'

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
    const [showFrom,setShowFrom] = useState(false)
    const [showToCurr,setShowToCurr] = useState(false)
    useEffect(()=>{
        async function currences(){
            try{ 
                setIsLoading(true)
                let respons = await api.get('/currencies')
                let data =  Object.entries(respons.data)
                let newData = data.map((val,index,arr)=>arr[index][0])
                setDropDown(...dropDown,newData)
            }catch(err){
                if(err.respons){
                    console.log(err.respons.data)
                    console.log(err.respons.status)
                    console.log(err.respons.headers)
                }else{
                    console.log(`Error : ${err.message}`)
                }
            }
            finally{
                setAmount('')
                setIsLoading(false)
            }

        }
        currences()
        
    },[])
    async function processData(){
        let amt = Number(amount)
        try{
            let respons = await api.get(`/latest?amount=${amt}&from=${fromCurr}&to=${toCurr}`)
            let data =Object.entries(respons.data.rates)
            setResult(`${toCurr} : ${data[0][1]}`)

        }catch(err){
            if(err.respons){
                console.log(err.respons.status)
                console.log(err.respons.data)
                console.log(err.respons.headers)
            }else{
                console.log(`Error: ${err.message}`)
            }

        }
        finally{
            console.log("Checking...")
        }
    }

         return(
        <DataContext.Provider value={{
           errorMessage,showFrom,setShowFrom,showToCurr,setShowToCurr,isLoading,setIsLoading,dropDown,processData,result,setResult,amount,setAmount,title,showButton,setShowButton,fromCurr,setFromCurr,toCurr,setTocurr
        }}>
            {children}
        </DataContext.Provider>
     )
}
export default DataContext