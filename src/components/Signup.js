import { useState } from "react";
import Button from "./Button";

const Signup = ({ addDoc, colRefThree, setSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordIncorrect, setPasswordIncorrect ] = useState(false);
    const [signupOverlay, setSignupOverlay] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
        setSignupOverlay(true);
        }
        if (password !== confirmPassword) {
            setPasswordIncorrect(true)
        }
    };

    const sendData = (e) => {
        e.preventDefault()
        addDoc(colRefThree, {
            username: username,
            password: password
        });
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setPasswordIncorrect(false)
        setSignupOverlay(false);
        setSignup(false);
    };

    const backToLogin = (e) => {
        e.preventDefault()
        window.location.reload();
    }

    return ( 
        <div className="pos-absolute top-0 left-0 signup-container">

            <div onClick={backToLogin} className="ml-4"><span></span><Button login="Return to login"/></div>

            {signupOverlay && 
            <div className="signup-overlay-container pos-absolute top-50 left-50 d-flex justify-center align-center">
                <form onSubmit={sendData} className="text-center signup-overlay br-sm p-4 pos-relative">
                    <div className="pos-absolute top-0 right-0 m-1">X</div>
                    <p className="mb-1">Thanks! If you have made note of your details and wish to finish the sign up process, press continue.</p>
                    <Button login="Continue" />
                </form>
            </div>
            }

            <div className="signup box-shadow-one text-center m-auto br-sm">
                <h1 className="p-2 pt-4">Sign up to <span className="lobster">Reach</span></h1>
                <p>The number one group messaging app.</p>
                <div className="d-inline-block login-image-placeholder text-center m-1"> 
                </div>

                <form onSubmit={handleSubmit} className="login-form m-auto d-flex flex-column align-center pb-4">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="text-center p-1 mb-1" required />
                    <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-center p-1 mb-1" required />
                    <div>
                        <input type="text" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="text-center p-1" required />
                        {passwordIncorrect && <p className="font-sm no-password-match">Password and Confirm Password must match to signup!</p>}
                    </div>
                    <Button login={'Submit Details'}/>
                    <p className="mt-2 pb-3">Be sure to safely record your login details!</p>
                </form>
            </div> 
        </div>
    );
}
 
export default Signup;