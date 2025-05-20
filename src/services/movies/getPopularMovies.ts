import api from "../api";

export const getPopularMovies = async () => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    let res: any;
    const endpoint = '/movie/popular?language=en-US';
    await api
    .get(endpoint)
    .then((d) => {
        res = d.data
    })
    .catch((err) => {
        res = err.response;
    });

    return res;
};