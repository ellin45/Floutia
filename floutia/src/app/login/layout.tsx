"use client";

import {Inter} from "next/font/google";
import variables from "../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Head from "next/head";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import axios from "axios";
import qs from "qs";
import YouTube from "react-youtube";
import type { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL } from 'constants/path';

export default function RootLayout() {
  const [data, setData] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_YOUR_API_KEY;

  return <></>;
}
