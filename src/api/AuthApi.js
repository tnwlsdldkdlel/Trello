import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const UserJoin = async (input) => {
    const credentials = await createUserWithEmailAndPassword(
        auth,
        input.email,
        input.password
    );

    await updateProfile(credentials.user, { displayName: input.name });

    await addDoc(collection(db, "user"), {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        uid: credentials.user.uid,
        name: input.name,
        photo: credentials.user.photoURL,
    });

}