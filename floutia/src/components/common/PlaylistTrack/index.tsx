import React, {useState} from "react";
import styles from "../../../styles/page.module.css";
import Image from "next/image";
import {useRouter} from "next/router";
import ROUTES from "constants/routes";

export interface PlaylistProps {
  playlist: SpotifyApi.PlaylistObjectSimplified;
}

const Playlist = ({playlist}: PlaylistProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.PLAYLIST(playlist.id));
  };

  return (
    <div className={styles.playList}>
      <Image
        src={playlist.images[0].url}
        alt="플레이리스트 이미지"
        width={260}
        height={260}
        
      />
      <div>
        <div>{playlist.name}</div>
        <div>
          dangerouslySetInnerHTML={{
            __html: playlist.description ?? "",
          }}</div>
        <div onClick={handleClick}>바로가기</div>
      </div>
    </div>
  );
};

export default Playlist;
