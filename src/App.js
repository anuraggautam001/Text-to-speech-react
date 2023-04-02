import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';

const App = () =>{
  
  const { speak } = useSpeechSynthesis();

  const [value, setValue] = useState("");
  return (
    <>
       <div className='layout'>
            <div className='content'>
              <h2>Text to Speech Converter Using React</h2>
            </div>
            <div className='content'>
              <textarea rows={2} cols={80} placeholder='Type anything here.... then press speech' onChange={(e) => setValue(e.target.value)}></textarea>
            </div>
            <div className='content'>
              <button onClick={() => speak({text:value})}>
                Speech
              </button>
            </div>
       </div>
    </>
  )
};

export default App;