import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useFirebase = () => {
    const [docs, setDocs] = useState([]);
    const [statusDocs, setStatusDocs] = useState([]); 
    const [memberDocs, setMemberDocs] = useState([]);    
    const firebaseConfig = {
        apiKey: "AIzaSyAhC7-gzUtQc9ysUg4U_uEp9wv0G9kOIw0",
        authDomain: "reachchatapp.firebaseapp.com",
        projectId: "reachchatapp",
        storageBucket: "reachchatapp.appspot.com",
        messagingSenderId: "629521859032",
        appId: "1:629521859032:web:ff559b90b82c0e11bd32ad"
    };
    
    //initilize firebase app
    initializeApp(firebaseConfig);
    
    //initilize Services
    const db = getFirestore();

    //Collection references
    const colRef = collection(db, 'reachChatApp');
    const colRefTwo = collection(db, 'reachStatus');
    const colRefThree = collection(db, 'reachLogins');

    //Get realtime data from firestore using subscription/real time listener
    useEffect(() => {
        onSnapshot(colRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return (
                    {
                        user: doc.data().user,
                        message: doc.data().message,
                        createdAt: doc.data().createdAt
                    }
                );
            })
            setDocs(data);
        });
       
        onSnapshot(colRefTwo, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return (
                    {
                        user: doc.data().user,
                        status: doc.data().status,
                        createdAt: doc.data().createdAt
                    }
                );
            })
            setStatusDocs(data);
        });

        onSnapshot(colRefThree, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return (
                    {
                        username: doc.data().username,
                        password: doc.data().password,
                    }
                );
            })
            setMemberDocs(data);
        });
    }, [])

    return {docs, addDoc, colRef, colRefTwo, colRefThree, statusDocs, setStatusDocs, onSnapshot, memberDocs} ;
}

export default useFirebase;