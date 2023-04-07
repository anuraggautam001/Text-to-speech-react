import React from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { useState } from "react";

const SpeechToText = () =>{
    const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
    return(
        <div className="layout">
            <div className='content'>
              <h2>Speech to Text Converter</h2>
            </div>
            <div className="content">
                <textarea rows={2} cols={80} value={value} onChange={(event) => setValue(event.target.value)}/>
            </div>
            <div className="content">
                <button onClick={listen}>Speak</button>
                <button onClick={stop}>Stop</button>
                {listening && <div>Browser can hear you now!!</div>}
            </div>    
    </div>
    

    );
}

export default SpeechToText;