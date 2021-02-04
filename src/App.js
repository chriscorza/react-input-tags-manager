import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import InputTagsManager from './components/InputTagsManager'

function App() {
  const [tags,setTags] = useState([]);

  return (
    <div className="App">
      *
      <div style={{maxWidth:'500px'}}>
      <InputTagsManager
          tags={tags}
          submitNewTag={ (newTag) => {
            setTags([...tags,newTag])
          }}
          removeTag = { (tag) => {
            var index = tags.findIndex( (t) => {
              return tag == t
            } )
            console.log(index,1)
            tags.splice(index,1)
            console.log('NEW TAGS',tags)
            setTags([...tags])
          }}
        />
      </div>

       
    </div>
  );
}

export default App;
