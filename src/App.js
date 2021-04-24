import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  
  const [lastname, setLastName] = useState('');

  const[lastNameNew, setLastNameNew] = useState();
  const[myName, setMyName] =useState();
  
  const InputEvent = (event) =>{
    setName(event.target.value);
  }


  const InputEventTwo = (event) =>{
    setLastName(event.target.value);
  }


  const buttonClick = (event) =>{
    event.preventDefault();
    setMyName(name);
    setLastNameNew(lastname);
  }


  return (
    <>
    <div>
    <form onSubmit={buttonClick}>
      <h1>Hello {myName} {lastNameNew} </h1>
      <input type="text" placeholder="Enter you name" defaultValue=""
      onChange={InputEvent} value={name}

      />
      <br />
      <input type="text" placeholder="Enter you password" defaultValue=""
      onChange={InputEventTwo} value={lastname}

      />
      <br />
      <button type="submit">Submit Me 😄</button>
      </form>
    </div>
    </>
  );
}

export default App;
