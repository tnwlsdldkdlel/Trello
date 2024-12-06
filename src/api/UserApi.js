import { collection, endAt, getDocs, orderBy, query, startAt, where } from "firebase/firestore";
import { db } from "../firebase";

export const searchUser = async (data) => {
    const userQuery = query(
        collection(db, "user"),
        orderBy("name"),
        startAt(data),
        endAt(data + "\uf8ff")
    );

    const userSnapshot = await getDocs(userQuery);
    const result = userSnapshot.docs.map((item) => {
        return item.data();
    })

    return result;
}