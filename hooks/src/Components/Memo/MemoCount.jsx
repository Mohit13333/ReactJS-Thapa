import React from 'react'
import { memo } from 'react'
import { useRef } from 'react'

const MemoCount = () => {
    const renderedCount=useRef(0)
  return (
    <>
      <div>
        <p>Nothing changes here but i now rendered:<span>{renderedCount.current++} times</span></p>
      </div>
    </>
  )
}

export default memo(MemoCount)
