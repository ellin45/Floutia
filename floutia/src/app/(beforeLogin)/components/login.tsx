import type {NextApiRequest, NextApiResponse} from "next";
import React, {ComponentType} from "react";
import {randomBytes, createHash} from "crypto";
import qs from "querystring";


interface RandomStringOptions {
  length: number;
}

interface Sha256Input {
  plain: string;
}

interface Base64Input {
  buffer: ArrayBuffer;
}

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const generateRandomString = (options: RandomStringOptions): string => {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(options.length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  };
  const codeVerifier = generateRandomString({length: 64});

  const sha256 = (input: Sha256Input): Buffer => {
    return createHash("sha256").update(input.plain).digest();
  };

  const base64encode = (input: Base64Input): string => {
    const uint8Array = new Uint8Array(input.buffer);
    const charCodeArray = Array.from(uint8Array, (byte) =>
      String.fromCharCode(byte)
    );
    return btoa(charCodeArray.join(""))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  };

  const hashed = await sha256({plain: codeVerifier});
  const codeChallenge = base64encode({buffer: hashed});

  const state = generateRandomString({length: 16});
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      qs.stringify({
        response_type: "code",
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.BASE_URL,
        state: state,
      })
  );
}
