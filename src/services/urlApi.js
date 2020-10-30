import Axios from 'axios';

const linkAPI = 'http://192.168.43.73:5000/';

export const login = (email,password) => {
  return Axios.post(`${linkAPI}auth/login`,{email, password});
};
export const register = (username,email,password)=>{
  return Axios.post(`${linkAPI}auth/register`,{
      username,
      email,
      password,
  });
};

export const updatePin = (pin,username)=>{
  return Axios.patch(`${linkAPI}user/updatePin`,{
      pin,
      username,
  });
};

export const getUser = ()=>{
  return Axios.get(`${linkAPI}user`);
};

export const getValidPin = (email,pin)=>{
  return Axios.post(`${linkAPI}auth/pin`,{
    email,
    pin,
  });
};

export const addDataTransfer = (category,amount,sender_id,receiver_id,note)=>{
  return Axios.post(`${linkAPI}transaction`,{
    category,
    amount,
    sender_id,
    receiver_id,
    note,
  });
};

export const allTransaction = (id)=>{
  return Axios.get(`${linkAPI}transaction?sender_id=${id}&receiver_id=${id}`);
};

export const updateImg = (id, avatar) => {
  let formData = new FormData();
  formData.append('id',id);
  formData.append('avatar', {
    uri: `file://${avatar.path}`,
    type: avatar.type,
    name: avatar.fileName,
    size: avatar.fileSize,
  });

  const configHeader = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };

  return Axios.patch(`${linkAPI}user`, formData, configHeader);
};

export const searchContact = (username)=>{
  return Axios.get(`${linkAPI}user/search?username=${username}`);
};
