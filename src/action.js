/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export function fetchJedi() {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        console.log(res);
        dispatch({
          type: 'FETCH_FINISH',
          payload: res.data,
        });
      })
  }
}

export function addJedi(values) {
const request = axios.post('http://localhost:3001/jedi', values)
    return {
        type: 'ADD_JEDI',
        payload: request,
      }
  }
