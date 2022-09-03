import http from 'configs/http';

const getSeniors = async () => {
  try {
    const res = await http.get('/seniors');
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getSeniors;
