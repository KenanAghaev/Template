

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjgwYzRlNDc2Y2Y3ZDJmYWQ5NThmMDM3Y2UwMDkxNSIsInN1YiI6IjY2MGU1YjczZDQwMGYzMDE2NDA2M2YwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZgI-8mYC4aQPxhdsFIHyWTMzhGiOQkIDY2AacvGrcu8'
    }
  };
  

fetch('https://api.themoviedb.org/3/account/21183770/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc', options).then((res) =>
  res.json().then((data) => {
//    console.log(data.results);
   data.results.map((moviename)=>console.log("Film Siyahisi: " + moviename.title));
  })
);