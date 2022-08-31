import axios from 'axios';

const getUsers = async page => {
  const data = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
  );
  return data;
};
export { getUsers };
