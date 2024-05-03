import httpinstance from "../httpinstance";

export const getDetails = async (movieId: string) => {
    let res: any;
  const endpoint = `${movieId}?api_key=${process.env.REACT_APP_MBD_API_KEY}&language=en-US`;
  await httpinstance.get(endpoint).then(data => {
    res = data;
  }).catch(err => {
    res = err.response;
  });
  return res;
};