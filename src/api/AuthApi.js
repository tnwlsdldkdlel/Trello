import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const UserJoin = async (data) => {
    const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
    );

    await updateProfile(credentials.user, { displayName: data.name });

    await addDoc(collection(db, "user"), {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        uid: credentials.user.uid,
        name: data.name,
        photo: credentials.user.photoURL,
    });

    await UserLogin(data);

    return auth.currentUser;
}

export const UserLogin = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);

    return auth.currentUser;
}