import React, {useState} from "react";
import styles from "../../../styles/page.module.css";
import Image from "next/image";
import {useRecoilValue} from "recoil";
import {usePostPlaybackQueue} from "hooks/mutations/me";
import {loginDataState} from "recoil/atoms";

interface PlaylistTrackProps {
  track: SpotifyApi.TrackObjectFull;
  uri: string;
}

const PlaylistTrack = ({track}: PlaylistTrackProps) => {
  const loginData = useRecoilValue(loginDataState);
  const {mutate} = usePostPlaybackQueue(); // Pass Uri as a generic parameter

  const handlePlay = () => {
    if (!loginData) return alert("로그인이 필요합니다.");

    mutate({uri: track.uri}); // Correct the syntax when calling mutate
  };

  return (
    <div className={styles.playList}>
      <div>
        <Image
          src={track.album.images[2].url}
          alt={track.name}
          width={64}
          height={64}
        />
        <div>
          <title>{track.name}</title>
          <div>{track.artists.map((artist) => artist.name).join(", ")}</div>
        </div>
      </div>
      <div>{track.album.name}</div>
      <Image
        src="/images/play.svg"
        alt="artist"
        width={24}
        height={24}
        onClick={handlePlay}
      />
    </div>
  );
};

export default PlaylistTrack;
