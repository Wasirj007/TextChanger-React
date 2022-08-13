import React, { useState } from 'react'

export default function About(props) {
    let MyStyle={
        color: props.mode==='dark' ? 'white' : props.mode==='danger' ? 'white' : 'black' ,
        backgroundColor: props.mode==='dark' ? 'rgb(36 74 104)' : props.mode==='danger' ? '#e54b4b' : 'white'
    }
    
    
    return (
        <>
            <div className="container" style={{color:props.mode==='dark' ? 'white' : props.mode==='danger' ? 'white' : 'black'}}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample" style={MyStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne" style={MyStyle}>
                            <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b> Analyze your text</b>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={MyStyle}>
                                TextChanger gives you a way to analyze your text quickly and efficiently
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <b>Free to use</b>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={MyStyle}>
                                TextChanger is a free character counter tool that provides instant character count & word count statics for a given text. TextChanger reports the number of words and characters. Thus it is suitable for writing text with words/characters limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b>Browser Compatible</b>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={MyStyle}>
                                This web counter software works in any browser such as Chrome,Firewall,Opera,Internet Explorer etc. It suits to count characters in Facebook,Blog,books,excel documents,pdf documnet,essays etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
