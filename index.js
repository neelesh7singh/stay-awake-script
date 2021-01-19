const axios = require('axios');

const req = () => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
    withCredentials: true,
  };
  console.log('Sending Requests');
  axios
    .get('https://lt-lgtime-backend.herokuapp.com/api/v1/posts/all', config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {});
};

const st = setInterval(req, 10 * 60 * 1000);
