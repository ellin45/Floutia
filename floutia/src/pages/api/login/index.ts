'use client';

import { Inter } from 'next/font/google';
import variables from '../styles/variables.module.scss';
import styles from '../styles/page.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import type { NextApiRequest, NextApiResponse } from 'next';
import generateRandomString from '../../../util/generateRandomString';
import { BASE_URL } from '../../../constants/path';

export default function handler(reqs: NextApiRequest, res: NextApiResponse) {
  const state = generateRandomString(16);

  const scope =
    'user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming';

  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      qs.stringify({
        response_type: 'code',
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        scope: scope,
        redirect_uri: `${BASE_URL}/api/callback`,
        state: state,
      })
  );
}
