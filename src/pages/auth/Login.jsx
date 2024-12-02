import { useState } from "react";
import { GoogleLoginBtn } from "../../components/auth/GoogleLoginBtn";
import "../../styles/auth.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const clickLoginBtn = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
  };

  const clickJoin = () => {
    navigate("/auth/join");
  };

  return (
    <div className="auth">
      <div className="content">
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
            {loading ? <div className="spinner"></div> : "로그인"}
          </button>
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
