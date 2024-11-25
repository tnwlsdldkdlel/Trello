import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "../../styles/auth.css";

export const GoogleLoginBtn = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      //login(result);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="google-login" onClick={onClick}>
      <img src="/google.png"></img>
      Google
    </button>
  );
};
