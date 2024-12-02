import { useState } from "react";
import { GoogleLoginBtn } from "../../components/auth/GoogleLoginBtn";
import "../../styles/auth.css";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../api/AuthApi";
import handleFirebaseError from "../../utils/handleFirebaseError";
import { validateLoginInfo } from "../../utils/validation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/features/authSlice";

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispath = useDispatch();

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const clickLoginBtn = async () => {
    try {
      setLoading(true);
      const result = validateLoginInfo(input);
      if (result.length === 0) {
        const user = await UserLogin(input);
        dispath(loginSuccess(user.uid));

        // 보드가 없는 경우 선택.
        navigate("/welcome");
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

  const clickJoin = () => {
    navigate("/auth/join");
  };

  return (
    <div className="auth">
      <div className="content">
        {loading && (
          <div className="spinner-overlay">
            <div className="spinner"></div>
          </div>
        )}
        <div className="title">로그인</div>
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
          <button
            className="clickable"
            onClick={clickLoginBtn}
            disabled={loading}
          >
            로그인
          </button>
          <p className="error-message">{error}</p>
        </div>
        <div className="social-login">
          <p>소셜계정으로 로그인하기</p>
          <GoogleLoginBtn></GoogleLoginBtn>
        </div>
        <div className="no-login">
          <p className="clickable">로그인이 안되나요?</p>
          <p style={{ color: "black" }}>•</p>
          <p className="clickable" onClick={clickJoin}>
            계정 만들기
          </p>
        </div>
      </div>
    </div>
  );
};
