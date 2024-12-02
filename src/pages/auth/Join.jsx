import { useState } from "react";
import { GoogleLoginBtn } from "../../components/auth/GoogleLoginBtn";
import "../../styles/auth.css";
import { useNavigate } from "react-router-dom";
import { validateUserInfo } from "../../utils/validation";
import { UserJoin } from "../../api/AuthApi";
import handleFirebaseError from "../../utils/handleFirebaseError";

export const Join = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const clickLogin = () => {
    navigate("/auth/login");
  };

  const clickJoinBtn = async () => {
    try {
      setLoading(true);

      const result = validateUserInfo(input);
      if (result.length === 0) {
        await UserJoin(input);
        navigate("/");
      } else {
        setError(result);
      }
    } catch (error) {
      console.error(error);
      setError(handleFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth">
      <div className="content">
        {loading && (
          <div className="spinner-overlay">
            <div className="spinner"></div>
          </div>
        )}
        <div className="title">회원가입</div>
        <div className="login">
          <input
            value={input.email}
            name="email"
            placeholder="이메일을 입력하세요"
            onChange={changeInput}
          ></input>
          <input
            type="password"
            value={input.password}
            name="password"
            placeholder="비밀번호를 입력하세요"
            onChange={changeInput}
          ></input>
          <input
            value={input.name}
            name="name"
            placeholder="이름을 입력하세요"
            onChange={changeInput}
          ></input>
          <button className="clickable" onClick={clickJoinBtn}>
            회원가입
          </button>
          <p className="error-message">{error}</p>
        </div>
        <div className="social-login">
          <p>소셜계정으로 회원가입하기</p>
          <GoogleLoginBtn></GoogleLoginBtn>
        </div>
        <div className="no-login">
          <p className="clickable" onClick={clickLogin}>
            이미 계정이 있나요?
          </p>
        </div>
      </div>
    </div>
  );
};
