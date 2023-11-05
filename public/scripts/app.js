const movieTitle = document.querySelector('.movie-title'); 
const releaseDate= document.querySelector('.release-date'); 
const movieGenres = document.querySelector('.genres'); 
const movieDuration = document.querySelector('.movie-duration'); 
const moviePoster = document.querySelector('.movie-poster-container img'); 
const movieQuote = document.querySelector('.movie-info-quote'); 
const movieOverview = document.querySelector('.movie-info-overview');



window.onload = () =>{
    let url= 'https://api.themoviedb.org/3/movie/550988?api_key=e87d2b634a8eea6acaf68df7752fc76e';

    fetch(url)
        .then(response =>{
            return response.json();       
        })
    .then(data =>{
        console.log(data);
        movieTitle.textContent = data.title; 
        
        let date = new Date(data.release_date);
        releaseDate.textContent = `${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;
        movieDuration.textContent = `${data.runtime} minutes`;
        movieQuote.textContent = data.tagline; 
        movieOverview.textContent = data.overview; 

        let posterUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data. poster_path}`;
        moviePoster. src = posterUrl; 
        moviePoster.alt = `${data.title} poster`; 

        let genresToDisplay = ''; 

        data.genres.forEach(genre => {
                genresToDisplay = genresToDisplay + `${genre.name}, `;
        });

        let genresUpdated = genresToDisplay.slice(0, -2) + '.'; 
        
        movieGenres.textContent = genresUpdated; 
   });

   let modal = document.querySelector('#myModal');
   let closeBtn=document.querySelector('.closeBtn');
   let modalImage=document.querySelector('.movie-poster-modal');
   
   
   closeBtn.addEventListener('click', ()=>{
       modal.style.display='none';
   })
   
   window.addEventListener('click',(event)=>{
       if(event.target===modal){
       modal.style.display='none'};
     });

}

