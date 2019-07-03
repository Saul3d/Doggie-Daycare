import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dog.json`)
    .then((res) => {
      const dog = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        dog.push(res.data[fbKey]);
      });

      resolve(dog);
    })
    .catch(err => reject(err));
});

export default { getMyDogs };
