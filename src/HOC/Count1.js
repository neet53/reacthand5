import React from 'react'
import HighOrderComp from './HocComp'
function Count1({count, handleCount}) {
  return (
    <div>
       <span>Increase Count1 = {count}</span>
        <button onClick={handleCount}>Count</button>
    </div>
  )
}

export default HighOrderComp(Count1)