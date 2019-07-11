import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((res) => {
      const walk = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        walk.push(res.data[fbKey]);
      });
      resolve(walk);
    })
    .catch(err => reject(err));
});

const deleteWalk = walkId => axios.delete(`${baseUrl}/${walkId}.json`);

export default {
  getMyWalks,
  deleteWalk,
};
