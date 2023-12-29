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

  const sha256 = async (input: Sha256Input): Promise<ArrayBuffer> => {
    // window 객체가 존재하는지 확인
    if (typeof window !== "undefined") {
      const encoder = new TextEncoder();
      const data = encoder.encode(input.plain);
      return window.crypto.subtle.digest("SHA-256", data);
    } else {
      // window 객체가 없을 때의 대체 로직
      // 예: 서버 사이드에서 Node.js의 crypto 모듈을 사용
      throw new Error("window is not defined");
    }
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
