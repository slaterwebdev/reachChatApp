const Member = ({ memberDocs }) => {
    return ( 
        <div>
            {memberDocs && memberDocs.sort((a, b) => a.username.localeCompare(b.username))
            .map((doc, key) => {
                return (
                    <div className="message text-center p-2 br-sm m-2" key={key} >
                        <div className="text-left">{doc.username}</div>
                    </div>
                )
            })
            }
        </div>
     );
}
 
export default Member;