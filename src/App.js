import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import useFirebase from "./hooks/useFirebase";


function App() {
  const {docs, statusDocs, addDoc, colRef, colRefTwo, colRefThree, onSnapshot, memberDocs} = useFirebase('');
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [yourMessage, setYourMessage] = useState('');
  const [yourStatus, setYourStatus] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className="App pos-relative">
      {!login && 
      <Login 
        setSignup={setSignup} 
        setLogin={setLogin} 
        onSnapshot={onSnapshot} 
        colRefThree={colRefThree}
        username={username}
        setUsername={setUsername}
      />
      }
      {!login && signup && 
      <Signup 
        colRefThree={colRefThree} 
        addDoc={addDoc} 
        setSignup={setSignup}
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
        memberDocs={memberDocs}
        username={username}
      />
      }
    </div>
  );
}

export default App;
