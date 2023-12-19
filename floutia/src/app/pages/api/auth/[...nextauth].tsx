import SpotifyProvider from "next-auth/providers/spotify";

interface SpotifyProviderOptions {
  clientId: string;
  clientSecret: string;
}

const spotifyProviderOptions: SpotifyProviderOptions = {
  clientId: process.env.SPOTIFY_CLIENT_ID || "",
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
};

const providers = [SpotifyProvider(spotifyProviderOptions)];

export default providers;
