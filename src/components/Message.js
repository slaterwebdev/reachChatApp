const Message = ({ docs, username }) => {
    
    let flexEnd = {justifyContent: 'flex-end', backgroundColor: '#9d9d9e !important'};

    return ( 
        <div className="">
            {docs && 
            docs
            .sort((a, b) => b.createdAt-a.createdAt)
            .map((doc, key) => {

                if(username === doc.user) {
                    return(  
                    <div key={key} className="d-flex" style={flexEnd} >
                        <div className="message text-center p-2 br-sm m-2 d-block" >
                        <div className="font-sm d-flex justify-space-between mb-1">
                            <span className="text-white">{doc.user}</span>
                            <span className="text-white">{String(new Date(doc.createdAt)).substring(16, 24)}</span>
                        </div>
                        <div className="text-left">{doc.message}</div>
                        </div>
                    </div>
                    )
                }
                
                return (
                    <div key={key} className="d-flex justify-flex-start" >
                        <div className="message grey-message text-center p-2 br-sm m-2 d-block" >
                        <div className="font-sm d-flex justify-space-between mb-1">
                            <span className="text-white">{doc.user}</span>
                            <span className="text-white">{String(new Date(doc.createdAt)).substring(16, 24)}</span>
                        </div>
                        <div className="text-left">{doc.message}</div>
                        </div>
                    </div>
                )
            })
            }
        </div>
     );
}
 
export default Message;