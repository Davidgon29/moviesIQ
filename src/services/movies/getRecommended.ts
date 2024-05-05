import httpInstance from "../httpinstance";

export const getRecommended = async (movieId: string) => {
    let res: any;
    const endpoint = `${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    await httpInstance
        .get(endpoint)
        .then((data) => {
            res = data.data.results; // Extract the array of movies from the response object
        })
        .catch((err) => {
            res = err.response;
        });
    return res;
};