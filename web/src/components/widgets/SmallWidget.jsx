import React from 'react'

function SmallWidget({ title, children }) {
  return (
    <>
      <div className="bg-primaryWhite h-full rounded-[2rem] py-4 px-8">
        <div className="flex justify-between">
          <p>{title}</p>
          {children}
        </div>
      </div>
    </>
  )
}

export default SmallWidget