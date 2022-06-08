import { useState } from "react";
import Button from "./Button";

const Login = ({ setSignup, setLogin, colRefThree, onSnapshot, username , setUsername }) => {
    
    const [password, setPassword] = useState('');
    const [incorrectDetails, setIncorrectDetails] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignup(false);
        

        onSnapshot(colRefThree, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                if(username === doc.data().username && password === doc.data().password) {
                    
                    return setLogin(true)
                }

                if(username !== doc.data().username || password !== doc.data().password) {
                    return setIncorrectDetails(true)
                }
            });
        });
    };

    const displaySignUpPage = () => {
        setSignup(true);
    };

    return ( 
        <div className="login-container">
            <div>Username: testAccount, Password: testAccount123</div>
            <div className="login box-shadow-one text-center m-auto br-sm">
            <h1 className="p-2 pt-4">Welcome to <span className="lobster">Reach</span></h1>
            <p>The number one group messaging app.</p>
            <div className="d-inline-block login-image-placeholder m-1"></div>

            <form onSubmit={handleSubmit} className="login-form m-auto d-flex flex-column align-center pb-2">
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="text-center p-1 mb-1" required />
                <div>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="text-center p-1 mb-1" required />
                    {incorrectDetails && <p className="font-sm no-password-match">Username or Password is incorrect</p>}
                </div>
                <Button login={'login'}/>
            </form>

            <p onClick={displaySignUpPage} className="pb-4 signup-para pointer">Don't have an account? Sign up here</p>
        </div> 
        </div>
    );
}
 
export default Login;