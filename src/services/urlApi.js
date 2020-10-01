import Axios from 'axios';

export const login = (email,password) => {
  return Axios.post('http://192.168.43.73:5000/auth/login',{email, password});
};
export const register = (username,email,password)=>{
  return Axios.post('http://192.168.43.73:5000/auth/register',{
      username,
      email,
      password,
  });
};

export const updatePin = (pin,username)=>{
  return Axios.patch('http://192.168.43.73:5000/user/updatePin',{
      pin,
      username,
  });
};

export const getUser = (id)=>{
  return Axios.get(`http://192.168.43.73:5000/user?id=${id}`);
};

export const getValidPin = (email,pin)=>{
  return Axios.post('http://192.168.43.73:5000/auth/pin',{
    email,
    pin,
  });
};
