import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase!","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase!","success")
    }
    const handleclearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showalert("Cleared the Text!","success")
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    
        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showalert("Removed the extra spaces!","success")
        }
    // const handleCopy = () => {
    //     console.log("I am copy");
    //     var text = document.getElementById("myBox");
    //     text.select();  
    //     navigator.clipboard.writeText(text.value);
    // }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color : props.mode === 'dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" style={{ backgroundColor: props.mode === 'dark'?'grey':'white' ,color : props.mode === 'dark'?'white':'black'}} ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> */}
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}} >
            <h2>Your text summary</h2>
            <p>{(text.split(" ")).filter((a) => a).length} words and {text.length} characters</p>
            <p>{0.008 * ((text.split(" ")).filter((a) => a).length)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in text box to preview it here"}</p>
        </div>
        </>
    )
}


// tex = text.split(" ")
// tex.forEach(func(element))

// function func(element)
// {if(element!=' '||element != '/n'){

// }
// else{
//     continue;
// }};
