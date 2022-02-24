import axios from "axios";

export default function restClient(url) {
  function postRequest(body, { email, password }) {
    return axios.post(url, body, {
      auth: {
        password,
        username: email,
      },
    });
  }

  return {
    postRequest,
  };
}
