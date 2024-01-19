import styled from '@emotion/styled';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { getCategoryPlaylists } from '../../api/browse';
import Playlist from '../../components/PlayList';
import Sidebar from '../../components/Sidebar';
import { useGetCategoryPlaylists } from 'hooks/queries/browse';

interface CategoryPageProps {
  id: string;
}

const CategoryPage = ({ id }: CategoryPageProps) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetCategoryPlaylists(id);

  return (
      <Playlist>
        {data?.pages.map((page) =>
          page.data.playlists.items.map(
            (playlist) => playlist && <Playlist key={playlist.id} playlist={playlist} />
          )
        )}
      </Playlist>
      

  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id?.toString() ?? '';

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(['categoryPlaylists', id], ({ pageParam = 0 }) =>
    getCategoryPlaylists({ pageParam, id })
  );

  return {
    props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))), id },
  };
};



export default CategoryPage;