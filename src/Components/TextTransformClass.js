import React, { Component } from 'react'

export default class TextTransformClass extends Component {
    constructor(){
        super()
        this.state={
            text:""
        }
        this.HandleText = this.HandleText.bind(this)
        this.HandleUpperCase = this.HandleUpperCase.bind(this)
        this.HandleLowerCase = this.HandleLowerCase.bind(this)
    }
    HandleText(event){
        this.setState({
            text:event.target.value
        })
    }
    HandleUpperCase(){
        this.setState({
          text: this.state.text.toUpperCase()
        })
    }
    HandleLowerCase(){
        this.setState({
          text: this.state.text.toLowerCase()
        })
    }    
    render() {
        return (
            <div className='mt-5'>
                <div className="container mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" >{this.props.name}</label>
                    <textarea className="form-control" onChange={this.HandleText} value={this.state.text} id="exampleFormControlTextarea1" placeholder="Enter your text here" rows="1"></textarea>
                    <div className='text-center m-3'>
                        <button type="button" onClick={this.HandleUpperCase} className="btn btn-primary m-2">To Upper Case</button>
                        <button type="button" onClick={this.HandleLowerCase} className="btn btn-dark m-2">To Lower Case</button>
                    </div>
                </div>
            </div>
        )
    }
}
