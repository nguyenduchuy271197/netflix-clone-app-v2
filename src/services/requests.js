const requests = [
  {
    id: 1,
    title: "NetflixOriginals",
    fetcher: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
    isPoster: true,
  },
  {
    id: 2,
    title: "Trending",
    fetcher: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-us`,
  },
  {
    id: 3,
    title: "TopRated",
    fetcher: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-us`,
  },
  {
    id: 4,
    title: "ActionMovies",
    fetcher: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  },
  {
    id: 5,
    title: "ComedyMovies",
    fetcher: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  },
  {
    id: 6,
    title: "HorrorMovies",
    fetcher: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  },
  {
    id: 7,
    title: "RomanceMovies",
    fetcher: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  },
  {
    id: 8,
    title: "Documentaries",
    fetcher: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
  },
];

export default requests;
