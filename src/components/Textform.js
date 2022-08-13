import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('')
  const handleupClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase" , "primary")
  }
  const handlelowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase" , "primary")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleClear = () => {
    setText("")
    props.showAlert("Text is cleared" , "primary")
  }
  const handledownload = () => {
    let element = document.createElement("a")
    let area = document.getElementById("mybox").value
    const file = new Blob([area], {
      type: "text/plain" 
    });
    element.href = URL.createObjectURL(file)
    element.download = "myfile.txt"
    document.body.appendChild(element)
    element.click()
    props.showAlert("File is downloaded" , "primary")
  }
  const handleCopy = () => {
    let all = document.getElementById("mybox").value
    navigator.clipboard.writeText(all);
    let popup = document.getElementById("forpopup");
    popup.classList.toggle("show");
  }
  const handleSpace = () => {
    let extra = text.split(/[ ]+/)
    setText(extra.join(" "))
    props.showAlert("Extra spaces are removed" , "primary")
  }
  
  return (
    <>
      <h1 style={{ color: props.mode === 'dark' ? 'white' : props.mode === 'danger' ? 'white' : 'black'}}>{props.heading}</h1>
      <div className="form-group mt-5" style={{ color: props.mode === 'dark' ? 'white' : props.mode === 'danger' ? 'white' : 'black' }}>
        <textarea placeholder="Enter any text" className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : props.mode === 'danger' ? '#C0392B' : 'white', color: props.mode === 'dark' ? 'white' : props.mode === 'danger' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="mybox" rows="9"></textarea>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'outline-primary' && props.mode === 'danger' ? 'danger' : 'outline-primary'} mt-2 ml-2`} onClick={handleupClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'outline-primary' && props.mode === 'danger' ? 'danger' : 'outline-primary'} mt-2 ml-2`} onClick={handlelowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'outline-primary'&& props.mode === 'danger' ? 'danger' : 'outline-primary'} mt-2 ml-2`} onClick={handleClear}>Clear All</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'outline-primary'&& props.mode === 'danger' ? 'danger' : 'outline-primary'} mt-2 ml-2`} data-toggle="tooltip" data-placement="top" title="Download file" onClick={handledownload}>Download</button>
        <button disabled={text.length===0} id='popup' className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'outline-primary'&& props.mode === 'danger' ? 'danger' : 'outline-primary'} mt-2 ml-2`} data-toggle="tooltip" data-placement="top" title="Copy" onClick={handleCopy}>Copy
          <span className='popuptext' id='forpopup'>Copied!</span>
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'secondary' : 'outline-primary'&& props.mode === 'danger' ? 'danger' : 'outline-primary'} mt-2 ml-2`} onClick={handleSpace}>Remove Extra Spaces</button>

      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : props.mode === 'danger' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => element !== "").length} words and {text.length} characters </p>
        <p>{0.008 * text.split("").filter((element) => element !== "").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter in textBox above to preview here"}</p>
        <p>{text}</p>
      </div>
    </>
  )
}
