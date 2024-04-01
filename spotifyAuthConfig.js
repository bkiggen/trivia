import { authorize } from "react-native-app-auth";

const spotifyAuthConfig = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUrl: "myapp://callback",
  scopes: [
    "streaming",
    "playlist-read-private",
    "user-library-read",
    "user-top-read",
  ],
  serviceConfiguration: {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  },
};
