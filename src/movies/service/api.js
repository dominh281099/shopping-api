import axios from 'axios';
import * as moment from 'moment';


function addDate(date, days){
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const getDataMoviesHomePage = async (page=1) => {
    const url = (`https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    const respone = await axios.get(url);
    const result = await respone.status === 200 ? respone.data : [];
    return result;
}

export const getUpComingMovie = async (page = 1 ) => {
    // let fromDate = `2020-10-23`;
    // let toDate = `2020-11-23`;
    let date = new Date();
    let d = date.getDate();
    d = d < 10 ? `0${d}` : d;
    let m = date.getMonth() + 1;
    m = m < 10 ? `0${m}` : m;
    let y = date.getFullYear();
    let today = `${y}-${m}-${d}`;
    let nextTime = addDate(today, 30);
    nextTime = moment(nextTime).utc().format('YYYY-MM-DD');


    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${today}&release_date.lte=${nextTime}&with_release_type=3&`;
    const respone = await axios.get(url);
    const result = await respone.status === 200 ? respone.data : [];
    return result; 
}

export const getDataFilmById = async (id=0) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=vi&append_to_response=videos%2Cimages&include_image_language=vi,null`
    const respone = await axios.get(url);
    const result = await respone.status === 200 ? respone.data : [];
    return result;
}

export const searchMovieByKeyword = async (keyword, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const respone = await axios.get(url);
    const result = await respone.status === 200 ? respone.data : [];
    return result;
}