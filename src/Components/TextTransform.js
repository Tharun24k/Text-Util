import React, { useState } from 'react'

export default function TextTransform(props) {
    const [text, settext] = useState("")
    const HandleTextChange =(event)=>{
        settext(event.target.value)
    }

    const HandleUpperCase = ()=>{
        settext(text.toUpperCase())
    }
    const HandleLowerCase = ()=>{
        settext(text.toLowerCase())
    }
    return (
        <div className='mt-5'>
            <div className="container mb-3">
                <label for="exampleFormControlTextarea1" className="form-label" >{props.name}</label>
                <textarea className="form-control" onChange={HandleTextChange} value={text} id="exampleFormControlTextarea1" placeholder="Enter your text here" rows="1"></textarea>
                <div className='text-center m-3'>
                    <button type="button" onClick={HandleUpperCase} className="btn btn-primary m-2">To Upper Case</button>
                    <button type="button" onClick={HandleLowerCase} className="btn btn-dark m-2">To Lower Case</button>
                </div>
            </div>
        </div>
    )
}
