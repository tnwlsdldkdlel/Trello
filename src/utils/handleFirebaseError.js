export default function handleFirebaseError(error) {
    switch (error.code) {
        case "auth/email-already-in-use":
            return "이미 사용 중인 이메일입니다."
        case "auth/invalid-email":
            return "유효하지 않은 이메일 형식입니다.";
        case "auth/weak-password":
            return "비밀번호는 6자리 이상이어야 합니다.";
        case "auth/network-request-failed":
            return "네트워크 오류가 발생했습니다.";
        default:
            console.error("Firebase Error: ", error.message);
            return "알 수 없는 오류가 발생했습니다. 다시 시도해주세요.";
    }
}
