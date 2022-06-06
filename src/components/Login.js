import { DocumentSnapshot } from "firebase/firestore";
import { useState } from "react";

const Login = ({ setSignup, setLogin, colRefThree, onSnapshot }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSignup(false);

        onSnapshot(colRefThree, (snapshot) => {
            snapshot.docs.forEach((doc, i) => {
                if(username === doc.data().username && password === doc.data().password) {
                   return setLogin(true)
                }
            });
        });
    };

    const displaySignUpPage = () => {
        setSignup(true);
    };

    return ( 
        <div className="login box-shadow-one text-center m-auto br-sm">
            <h1 className="p-2 mt-4">Welcome to Reach</h1>
            <p>The number one group messaging app.</p>
            <div className="d-inline-block login-image-placeholder m-1"></div>

            <form onSubmit={handleSubmit} className="login-form m-auto d-flex flex-column align-center pb-2">
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="text-center p-1 mb-1" required />
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="text-center p-1 mb-1" required />
                <button className="button pl-4 pr-4 pt-1 pb-1 font-md d-inline-block br-xs">Login</button>
            </form>

            <p onClick={displaySignUpPage} className="pb-4 signup-para">Don't have an account? Sign up here</p>
        </div> 
    );
}
 
export default Login;