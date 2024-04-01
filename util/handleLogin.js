const handleLogin = async () => {
  try {
    const authState = await authorize(spotifyAuthConfig);
    console.log(authState);
    // authState.accessToken can be used to make Spotify API requests.
  } catch (error) {
    console.error("Failed to log in", error);
  }
};
