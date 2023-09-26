import React from 'react'

function Accordion() {
  return (
    <>
        <h1 className='text-5xl font-bold text-center bg-pink-100' >FAQ</h1>
        <div className="collapse collapse-plus bg-pink-100">
        <input type="radio" name="my-accordion-3" checked="checked" /> 
        <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
        </div>
        <div className="collapse-content"> 
            <p>hello</p>
        </div>
        </div>
        <div className="collapse collapse-plus bg-pink-100">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
        </div>
        <div className="collapse-content"> 
            <p>hello</p>
        </div>
        </div>
        <div className="collapse collapse-plus bg-pink-100">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
        </div>
        <div className="collapse-content"> 
            <p>hello</p>
        </div>
        </div>
    </>
  )
}

export default Accordion