import {setCookie} from "cookies-next";
import {NextApiRequest, NextApiResponse} from "next";
import qs from "querystring";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = typeof req.query.code === "string" ? req.query.code : null;
  const state = typeof req.query.state === "string" ? req.query.state : null;

  if (state === null || code === null) {
    res.redirect(
      "/#" +
        qs.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    const fakeTokenResponse = {
      data: {
        access_token: "fake_access_token",
        refresh_token: "fake_refresh_token",
        expires_in: 3600,
      },
    };

    try {
      const response = fakeTokenResponse;

      setCookie("access_token", response.data.access_token, {
        req,
        res,
        maxAge: response.data.expires_in,
      });

      setCookie("refresh_token", response.data.refresh_token, {
        req,
        res,
        maxAge: response.data.expires_in,
        httpOnly: true,
      });

      res.redirect("/");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
