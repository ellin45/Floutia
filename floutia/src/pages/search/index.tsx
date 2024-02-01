import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import Artist from "components/common/Artist";
import PlaylistTrack from "components/common/PlaylistTrack";
import ROUTES from "constants/routes";
import {useGetSearchAll} from "hooks/queries/search";
import {searchQueryState} from "recoil/atoms";

const SearchPage = () => {
  const [query, setQuery] = useRecoilState(searchQueryState);
  const router = useRouter();

  interface Track {
    id: string;
  }

  interface Artist {
    id: string;
  }

  interface TracksData {
    items: Track[];
  }

  interface ArtistsData {
    items: Artist[];
  }

  interface SearchData {
    tracks: TracksData;
    artists: ArtistsData;
  }

  interface DataWrapper {
    data: SearchData;
  }
  const {data: rawData} = useGetSearchAll(query);
  const data = rawData as DataWrapper;
  console.log("data", {data});
  if (!query)
    return (
      <div>
        <h2>찾고 싶은 음악 또는 가수를 검색하세요.</h2>
      </div>
    );

  if (!data?.data.tracks?.items.length && !data?.data.artists?.items.length)
    return (
      <div>
        <h2>검색 결과가 없습니다.</h2>
      </div>
    );

  return (
    <div>
      <div>
        <h2>곡</h2>
        <div
          onClick={() => {
            setQuery("");
            router.push({
              pathname: ROUTES.SEARCH_SONG,
              query: {query},
            });
          }}>
          모두 보기
        </div>
        <div>
          {data.data?.tracks?.items.slice(0, 4).map((track) => (
            <PlaylistTrack key={track.id} track={track} />
          ))}
        </div>
      </div>
      <div>
        <h2>아티스트</h2>
        <div
          onClick={() => {
            setQuery("");
            router.push({
              pathname: ROUTES.SEARCH_ARTIST,
              query: {query},
            });
          }}>
          모두 보기
        </div>
        <div>
          {data.data?.artists?.items.map((artist) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};
