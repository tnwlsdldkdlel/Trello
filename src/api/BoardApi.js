import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const createBoard = async (teamUid, board) => {
    await addDoc(collection(db, "board"), {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        teamUid: teamUid,
        name: board
    });
}