import axios from 'axios'
import Qs from 'qs'
import { API_METHOD } from '_constants';
// import {getAccessToken} from '../cookie-store'
const makeRequest = async (method, url, headers= {}, data) => {
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  headers["accept"] = "application/json";
  headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PUT, DELETE";
  headers["Access-Control-Allow-Origin"] = "*";
  // const token = getAccessToken();

  // if(token){
  //   headers['Authorization'] = `Bearer ${token}`
  // }

  const config = {
    baseURL: env.process.REACT_API_URI,
    url: `api${url}`,
    // headers: headers,
    method: method,
    paramsSerializer: function(params) {
      return Qs.stringify(params, {
        arrayFormat: "brackets"
      });
    }
  };

  if(method===API_METHOD.METHOD_GET){
    config.params = data;
  }else{
    config.data = data;
  }
  try{
    const res = await axios(config);
    if(res)
      return res;
    else
      return false;
  }catch(err){
    return err;
  }

}

export default {
  get(url, data, headers = {}){
    return makeRequest(API_METHOD.METHOD_GET, url, headers, data);
  },

  post(url, data, headers = {}){
    return makeRequest(API_METHOD.METHOD_POST, url, headers, data);
  },

  put(url, data, headers = {}){
    return makeRequest(API_METHOD.METHOD_PUT, url, headers, data);
  },

  delete(url, data, headers = {}){
    return makeRequest(API_METHOD.METHOD_DELETE, url, headers, data);
  },
}