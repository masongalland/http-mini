import axios from 'axios';

export function getTroops(){
    return axios.get('http://192.168.2.119:3005/defenses')
    .then(response => response.data);
}

export function addTroop(recruit) {
    return axios.post('http://192.168.2.119:3005/defenses', {recruit: recruit})
}