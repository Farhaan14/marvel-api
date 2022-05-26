import React from 'react'

export default function Pagination({handleNextPage, handlePrevPage}) {
  return (
    <div>
        {handlePrevPage && <button onClick={handlePrevPage}>Prev</button>}
        {handleNextPage && <button onClick={handleNextPage}>Next</button>}
    </div>
  )
}
