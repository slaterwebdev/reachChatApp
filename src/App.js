import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import useFirebase from "./hooks/useFirebase";


function App() {
  const {docs, statusDocs, addDoc, colRef, colRefTwo, colRefThree, onSnapshot} = useFirebase('');
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [yourMessage, setYourMessage] = useState('');
  const [yourStatus, setYourStatus] = useState('');

  return (
    <div className="App pos-relative">
      <Navbar login={login} />
      {!login && 
      <Login 
        setSignup={setSignup} 
        setLogin={setLogin} 
        onSnapshot={onSnapshot} 
        colRefThree={colRefThree}
      />
      }
      {signup && 
      <Signup 
        colRefThree={colRefThree} 
        addDoc={addDoc} 
      />
      }
      
      {login && 
      <LandingPage 
        addDoc={addDoc}
        colRef={colRef}
        docs={docs}
        statusDocs={statusDocs}
        colRefTwo={colRefTwo}
        yourMessage={yourMessage} 
        setYourMessage={setYourMessage}
        yourStatus={yourStatus}
        setYourStatus={setYourStatus}
      />
      }
    </div>
  );
}

export default App;
