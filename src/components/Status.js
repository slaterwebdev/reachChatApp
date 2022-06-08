const Status = ({ statusDocs }) => {

    return ( 
        <div>
            {statusDocs && statusDocs
            .sort((a, b) => b.createdAt-a.createdAt)
            .map((doc, key) => {
                return (
                    <div className="status text-center p-2 br-sm m-2 d-block" key={key} >
                        <div className="font-sm d-flex justify-space-between mb-1">
                            <span className="text-white">{doc.user}</span>
                            <span className="text-white">{String(new Date(doc.createdAt)).substring(16, 24)}</span>
                        </div>
                        <div className="text-center">{doc.status}</div>
                    </div>
                )
              })
            }
        </div>
     );
}
 
export default Status;