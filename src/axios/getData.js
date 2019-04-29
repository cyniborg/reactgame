import axios from 'axios';

function getGenre(){
    
    return axios({
        method:'get',
        url:process.env.REACT_APP_GENRE_URL
    })
    .then(function (response) {
        const genre = response.data.map((e)=>({id: e.id, name: e.name, "genreColour": e.genre_colour, "genreImage": e.genre_image.guid}));
        console.log(genre);
        return genre;
    });
}

function getQuestions(){
    return axios({
        method: 'get',
        url: `${process.env.REACT_APP_QN_URL}`
    })
    .then(function(response){
        const data = response.data.map((e)=>{
            let options = [];
            for(let i = 1; i<7; i++){
                if(e[`option_${i}`]!==""){
                    options.push(e[`option_${i}`]);
                }
            }
            return {"questionText":e.question,"options": options, "genreId": e.genre, "hint": e.hint};
        })
        console.log(data);
        return data;
    });
}

export {getGenre, getQuestions};