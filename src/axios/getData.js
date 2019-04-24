import axios from 'axios';

function getGenre(){
    
    return axios({
        method:'get',
        url:process.env.REACT_APP_GENRE_URL
    })
    .then(function (response) {
        const genre = response.data.map((e)=>({id: e.id, name: e.name}));
        console.log(genre);
        return genre;
    });
}

export default getGenre;