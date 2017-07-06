import axios from 'axios';
import {turnApiObjIntoArray} from '../utils/turnApiObjIntoArray';

export function getEnemies(){
    return axios.get('http://localhost:3005/all')
    .then(response => turnApiObjIntoArray(response.data));
}

export function patchEnemy(name, id) {
    return axios.patch(`http://localhost:3005/${name}/minions/${id + 1}`, {type: "frog"})
}

export function deleteArmy(name, id) {
    return axios.delete(`http://localhost:3005/${name}/${id}`)
}