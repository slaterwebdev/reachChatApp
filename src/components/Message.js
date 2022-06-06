const Message = ({ docs }) => {

    return ( 
        <div>
            {docs && docs.sort((a, b) => a.createdAt-b.createdAt)
            .map((doc, key) => {
                return (
                    <div className="message text-center p-2 br-sm m-2" key={key} >
                        <div>{String(new Date(doc.createdAt)).substring(16, 24)}</div>
                        <div>{doc.message}</div>
                    </div>
                )
            })
            }
        </div>
     );
}
 
export default Message;