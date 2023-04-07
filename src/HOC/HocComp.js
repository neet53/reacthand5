import { useState } from "react"


const HighOrderComp = (Comp) =>{
    function NewHighOrderComp(){
        const [count, setCount] = useState(0)
        const handleCount = () =>{
            setCount(count + 1)
        }
        return <Comp handleCount = {handleCount} count = {count}/>
    }
    return NewHighOrderComp
}

export default HighOrderComp