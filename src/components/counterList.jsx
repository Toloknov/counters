import React,{useState} from "react";
import Counter from "./counter";
const CounterList=()=>{
    const initialState=[
    {id:0,value:1,name:'Ненужная вещь'},
    {id:1,value:4,name:'Ложка'},
    {id:2,value:0,name:'Вилка'},
    {id:3,value:0,name:'Тарелка'},
    {id:4,value:0,name:'Набор минималиста'}]
   
    const [counter,setCounters]=useState(initialState)
        
    const handleDelete=(id)=>{ 
    const newCounter=counter.filter(count=> count.id!==id)
        setCounters(newCounter)
    }

    const handleReset=()=>{
        setCounters(initialState)
    }
    
    const handleIncrement=(id)=>{
        const newValue=counter.map(elem=>{
            if(elem.id===id){
                return  {...elem,value:elem.value+1}
            }
            return elem
        })
        setCounters(newValue)
    }
    const handleDicriment=(id)=>{
        const newValue=counter.map(elem=>{
            if(elem.id===id){
                return  {...elem,value:elem.value-1}
            }
            return elem
        })
        setCounters(newValue)
    }


    return <>
        {counter.map(count=>  (
        <Counter  key={count.id} onDicriment={handleDicriment}  onIncriment={handleIncrement}  onDelete={handleDelete}  {...count} />
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        
        </>
}

export default CounterList