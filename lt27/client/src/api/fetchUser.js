import axios from "axios";

export const fetchToGetUsers = async () => {
  const res = await axios.get("http://localhost:8080/users");
  if (res.status === 200) {
    return res.data;
  } else {
    return null;
  }
};

export const eraseUser = async (id) => {
  const res = await axios.delete(`http://localhost:8080/users/${id}`);
  if (res.status === 200) {
    return true;
  } else {
    return false;
  }
};

export const importUser = async (user) => {
  
  const res = await axios.post("http://localhost:8080/users", user);
  return res.data
};
