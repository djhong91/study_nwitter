import AuthForm from "components/AuthForm";
import { authService } from "fbase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React from "react";

const Auth = () => {
  const onSocialClick = (event) => {
    const name = event.target.name;

    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }

    signInWithPopup(authService, provider).then(
      function (result) {
        // var user = result.user;
      },
      function (error) {
        console.log(error.message);
      }
    );
  };

  return (
    <div>
      <AuthForm />

      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
