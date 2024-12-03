import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const createTeam = async (users) => {
    const docRef = await addDoc(collection(db, "team"), {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        users: users
    });

    return docRef.id;
}