import { useState } from "react";

const Signup = ({ addDoc, colRefThree }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password);
        if(password === confirmPassword) {
            addDoc(colRefThree, {
                username: username,
                password: password
            });
        }
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return ( 
        <div className="pos-absolute top-0 left-0 signup-container">
            <div className="signup box-shadow-one text-center m-auto br-sm">
                <div className="d-inline-block login-image-placeholder m-3">
                    PP image carousel here 
                </div>

                <form onSubmit={handleSubmit} className="login-form m-auto d-flex flex-column align-center pb-4">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="text-center"/>
                    <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-center"/>
                    <input type="text" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="text-center"/>
                    <button>Submit Details</button>
                </form>
            </div> 
        </div>
    );
}
 
export default Signup;