import React from "react";
import variables from "../../styles/variables.module.scss";
import styles from "../../app/styles/page.module.css";


interface LoginPageProps {
  response_type: string;
  client_id: string;
  scope: string;
  redirect_uri: string;
  state: string;
}

var client_id =
  process.env.SPOTIFY_CLIENT_ID || "ada2b43ffdd04e2e9d32f125913a4731";
var redirect_uri =
  process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/callback";
console.log(client_id);
console.log(redirect_uri);

type SpotifyLoginUrl = string;

export default function Header(props: LoginPageProps) {
  const handleLogin = () => {
    const state = generateRandomString(16);
    const scope = "user-read-private user-read-email";

    const queryParams = new URLSearchParams({
      response_type: "code",
      client_id,
      scope,
      redirect_uri,
      state,
    });

    const spotifyLoginUrl: SpotifyLoginUrl = `https://accounts.spotify.com/authorize?${queryParams.toString()}`;

    window.location.href = spotifyLoginUrl;
  };

  const generateRandomString = (length: number): string => {
    const possibleChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += possibleChars.charAt(
        Math.floor(Math.random() * possibleChars.length)
      );
    }
    return result;
  };

  return (
    <div>
      <h1 className={styles.left}>OO님 안녕하세요!</h1>

      <button onClick={handleLogin} className={styles.right}>
        Log In
      </button>
    </div>
  );
}
