import Message from "./Message";
import Status from "./Status";

const LandingPage = ({ yourMessage, setYourMessage, yourStatus, setYourStatus, addDoc, colRef, colRefTwo, statusDocs, docs }) => {
    // const {docs, statusDocs, addDoc, colRef, colRefTwo} = useFirebase('');
    const date = new Date();

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        addDoc(colRef, {
          createdAt: date.getTime(),
          message: yourMessage,
          user: 'Adam',
        });
        setYourMessage('');
    };

    const handleStatusSubmit = (e) => {
        e.preventDefault();
        addDoc(colRefTwo, {
          createdAt: date.getTime(),
          status: yourStatus,
          user: 'Adam',
        });
        setYourStatus('');
    };

    return ( 
        <div className="d-flex justify-center">
            <div>
                Members
            </div>

            <div>
                <form onSubmit={handleStatusSubmit}>
                    <input 
                        id="newStatus"
                        placeholder="Your Status.."
                        className="p-2 m-2 input-style text-center"
                        type="text" 
                        required 
                        value={yourStatus}
                        onChange={(e) => setYourStatus(e.target.value)}
                    />
                </form>
                <Status statusDocs={statusDocs} />
            </div>

            <div>
                <Message docs={docs} />
                <form onSubmit={handleMessageSubmit}>
                    <input 
                        id="newMessage"
                        placeholder="Your message.."
                        className="p-2 m-2 input-style text-center"
                        type="text" 
                        required 
                        value={yourMessage}
                        onChange={(e) => setYourMessage(e.target.value)}
                    />
                </form>
            </div>
        </div>
     );
}
 
export default LandingPage;