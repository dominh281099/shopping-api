import axios from 'axios';

export const searchMovieByKeyword = async (keyword, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const respone = await axios.get(url);
    const result = await respone.status === 200 ? respone.data : [];
    return result;
}