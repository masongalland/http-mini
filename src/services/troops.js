import axios from 'axios';

export function getTroops(){
    return axios.get('http://localhost:3005/defenses')
    .then(response => response.data);
}

export function addTroop(recruit) {
    return axios.post('http://localhost:3005/defenses', {recruit: recruit})
}