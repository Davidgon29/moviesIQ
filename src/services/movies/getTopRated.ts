import httpinstance from '../httpinstance'

export const getTopRated = async() => {
    let res: any;
    const endpoint = `top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    await httpinstance.get(endpoint).then((data) => {
        res = data;
    }).catch((err) =>{
        res = err.response;
    });
    return res;
}