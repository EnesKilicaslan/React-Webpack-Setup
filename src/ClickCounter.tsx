import React, { useState } from 'react'

export const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div>
      <button
        onClick={() => {
          setClickCount((c) => c + 1)
        }}
      >
        Click {clickCount} -
      </button>
    </div>
  )
}
