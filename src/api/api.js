import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d4878b37-1aef-4815-a34a-d57f7a9e40c9",
  },
});

export const getUsers = (currentPage = 1, pagesSize = 5) => {
  return instance
    .get(`users?page=${currentPage}&count=${pagesSize}`)
    .then((res) => {
      return res.data;
    });
};

export const getPageChanged = (pageNumber, pagesSize = 5) => {
  return instance
    .get(`users?page=${pageNumber}&count=${pagesSize}`)
    .then((res) => {
      return res.data;
    });
};

export const getFollow = (t) => {
  return instance.post(`follow/${t.id}`, {}).then((res) => {
    return res.data;
  });
};

export const getUnfollow = (t) => {
  return instance.delete(`follow/${t.id}`).then((res) => {
    return res.data;
  });
};

export const getAuthMe = () => {
    return instance.get("auth/me").then((res) => {
        return res.data;
    })
}
