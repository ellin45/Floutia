import Image from 'next/image';

export interface ArtistProps {
  artist: SpotifyApi.ArtistObjectFull;
}

const Artist = ({ artist }: ArtistProps) => {
  return (
    <div
      
    >
      <Image
        src={artist.images.length ? artist.images[0].url : '/images/artist.png'}
        alt={artist.name}
        width={100}
        height={100}
        
      />
      <h3>{artist.name}</h3>
    </div>
  );
};

export default Artist;
