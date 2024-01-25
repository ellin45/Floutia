//@ts-nocheck
import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {GetServerSideProps} from "next";
import Image from "next/image";
import {getPlaylistTracks} from "api/browse";
import PlaylistTrack from "components/common/PlaylistTrack";
import TargetDiv from "components/common/TargetDiv";
import {useGetPlaylist, useGetPlaylistTracks} from "hooks/queries/browse";

interface PlaylistPageProps {
  id: string;
}

const PlaylistPage = ({id}: PlaylistPageProps) => {
  const {data, fetchNextPage, isFetchingNextPage, hasNextPage} =
    useGetPlaylistTracks(id);
  const {data: playlistData} = useGetPlaylist(id);

  let playlistNumber = 1;

  return (
    <>
      <PlaylistTrack>
        {data?.pages.map((page) => {
          page.data.items.map((track) => {
            if (track.track) {
              return (
                <div
                  key={track.track.id}
                  css={css`
                    display: flex;
                    align-items: center;
                  `}></div>
              );
            }
          });
        })}
      </PlaylistTrack>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id?.toString() ?? "";

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    ["playlistTracks", id],
    ({pageParam = 0}) => getPlaylistTracks({pageParam, id})
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      id,
    },
  };
};

export default PlaylistPage;
