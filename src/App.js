import React, { useState } from 'react';
import fountain from './fountain.js'
import './App.css';

function FountainViewer ( props ) {
    const fountainScript = props.fountainScript;
    const backEvent = props.backEvent;
    const character = props.character.toUpperCase();

    // parse the text
    let html = fountain.parse(fountainScript, true).html;
    let script = html.script;
    let titlePage = html.title_page;

    // if necessary, highlight character
    if (character) {
        const re = new RegExp('<div class="dialogue"><h4>' + character + '</h4>', 'g');
        script = script.replace(re,
            '<div class="dialogue highlighted"><h4>' + character + '</h4>');
    }


    return (
        <div className="script">
        <form className="no-print" onSubmit={backEvent}><input type="submit" value="Go back !"/> </form>
        <div dangerouslySetInnerHTML={{ __html: html.title_page }}></div>
        <div dangerouslySetInnerHTML={{ __html: script }}></div>
        </div>
    );
}


function useInput(initialValue){
   const [value,setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

   return [value,handleChange];
}

function App() {
    const [fountainScript, setFountainScript] = useInput('');
    const [character, setCharacter] = useInput('');

    const [isText, setIsText] = useState(false);
    const onSubmit = event => {
        event.preventDefault();
        setIsText(true);
    }

    const back = event => {
        event.preventDefault()
        setIsText(false);
    }

    let main;
    if (isText) {
        main = <FountainViewer fountainScript={fountainScript}
                               character={character}
                               backEvent={back}/>
    } else {
        main = (
            <form onSubmit={onSubmit}>
            <label>Write or Paste fountain script:<br/>
                <textarea cols="90" rows="15" value={fountainScript} onChange={setFountainScript}/>
            </label>
            <label>Enter character name to be highlighted (optionnal):<br/>
                <input type="text" name="character" value={character} onChange={setCharacter}/>
            </label>
            <br/>
            <input type="submit" value="Parse the text" />
            </form>
        );
    }

    return (
        <div className="App">
        {main}
        <div className="footer">
        Website by Thomas Simatic. Source available on <a href="https://github.com/thomas-sim/fountain-text-viewer">GitHub</a>.
        </div>
        </div>
    );
}

export default App;
