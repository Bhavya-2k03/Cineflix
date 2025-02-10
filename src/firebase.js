import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAYfx2XjFsYzIDBjusbvJj8S55OgBsL4PY",
  authDomain: "netflix-clone-280b6.firebaseapp.com",
  projectId: "netflix-clone-280b6",
  storageBucket: "netflix-clone-280b6.firebasestorage.app",
  messagingSenderId: "608632465166",
  appId: "1:608632465166:web:70ab6e37baf576c396595f"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async (name, email, password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email, password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    }
    catch(error){
        console.log(error);
        toast.error(error.code);
    }
}

const login= async(email, password)=>{
    try{
        const res=await signInWithEmailAndPassword(auth,email, password)
    }
    catch(error){
        if(error.code==="auth/invalid-credential") toast.error("Invalid credentials, Please try again.");    
        else if(error.code==="auth/invalid-email") toast.error("Invalid email format.");
        else toast.error(error.message);  
        }
    
}

const logout=()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout }