import React from 'react'
import HighOrderComp from './HocComp'

function Count({count,handleCount}) {
  return (
    <div>
      <span>Increase Count = {count}</span>
      <button onClick={handleCount}>Count</button>
    </div>
  )
}

export default HighOrderComp(Count)