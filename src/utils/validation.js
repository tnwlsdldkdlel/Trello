export const validateUserInfo = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-z0-9]{6,}$/;

    if (!emailRegex.test(data.email)) {
        return "이메일형식을 다시 확인해주세요.";
    } else if (!passwordRegex.test(data.password)) {
        return "비밀번호는 대소문자,숫자 6글자이상으로 입력해주세요.";
    } else if (data.name.length.length == 0) {
        return "이름은 1글자이상으로 입력해주세요."
    }

    return "";
}

export const validateLoginInfo = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-z0-9]{6,}$/;

    if (!emailRegex.test(data.email)) {
        return "이메일을 다시 확인해주세요.";
    } else if (!passwordRegex.test(data.password)) {
        return "비밀번호를 다시 확인해주세요.";
    }

    return "";
}