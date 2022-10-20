import { useEffect, useRef } from "react";
import { LoginByGoogle } from "../../../port/auth";

export const Signin = ({ status }) => {
  const googleBtn = useRef(null);


  const handleCallbackResponse = (response) => {
    LoginByGoogle(response.credential);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "389304183889-m72ksip97kttaov9jkd86anlkkgiphgh.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });


    google.accounts.id.renderButton(googleBtn.current, {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className={'page'}>
      <form >
        <div className={'google_login'}>
          <div ref={googleBtn} />
        </div>
      </form>
    </div>
  );
};


export default Signin;