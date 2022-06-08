import Button from "./Button";
import Member from "./Member";
import Message from "./Message";
import Status from "./Status";

const LandingPage = ({ yourMessage, setYourMessage, yourStatus, setYourStatus, addDoc, colRef, colRefTwo, statusDocs, docs, memberDocs, username }) => {
    const date = new Date();

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        addDoc(colRef, {
          createdAt: date.getTime(),
          message: yourMessage,
          user: username,
        });
        setYourMessage('');
    };

    const handleStatusSubmit = (e) => {
        e.preventDefault();
        addDoc(colRefTwo, {
          createdAt: date.getTime(),
          status: yourStatus,
          user: username,
        });
        setYourStatus('');
    };

    const logOut = (e) => {
        e.preventDefault();
        window.location.reload()
    };

    return ( 
        <div className="landing-page d-flex justify-space-around align-baseline pos-relative">
            <div className="logoutContainer pos-absolute top-0 right-0 w-100 d-flex justify-space-between pr-4 pl-4 align-center">
                <h1 className="lobster">Reach</h1>
                <div onClick={logOut}><Button login="Log Out" /></div>
            </div>
            <div className="member-section ml-1 mr-1 br-sm">
                <h2 className="text-center m-1">Members</h2>
                <Member memberDocs={memberDocs} />
            </div>

            <div className="status-section ml-1 mr-1 br-sm">
                <h2 className="text-center m-1">Status Updates</h2>
                <form onSubmit={handleStatusSubmit} className="d-flex justify-center p-2">
                    <input 
                        id="newStatus"
                        placeholder="Post an Update.."
                        className="p-1 input-style text-center w-80"
                        type="text" 
                        required 
                        value={yourStatus}
                        onChange={(e) => setYourStatus(e.target.value)}
                    />
                </form>
                <div className="message-container br-sm">
                    <Status statusDocs={statusDocs} />
                </div>
            </div>

            <div className="message-section ml-1 mr-1 br-sm">
                <h2 className="text-center m-1">Group Message</h2>
                <form onSubmit={handleMessageSubmit} className="d-flex justify-center p-2">
                    <input 
                        id="newMessage"
                        placeholder="Message the group.."
                        className="p-1 input-style text-center w-80"
                        type="text" 
                        required 
                        value={yourMessage}
                        onChange={(e) => setYourMessage(e.target.value)}
                    />
                </form>
                <div className="message-container br-sm">
                    <Message docs={docs} username={username} />
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;