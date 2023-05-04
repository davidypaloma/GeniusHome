import React from 'react'

function SmallWidget({ title, children }) {
  return (
    <>
      <div className="bg-primaryWhite h-36 rounded-[2rem] py-4 px-8">
        <p>{title}</p>
        {children}
      </div>
    </>
  )
}

export default SmallWidget