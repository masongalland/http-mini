import axios from 'axios';
import {turnApiObjIntoArray} from '../utils/turnApiObjIntoArray';

export function getEnemies(){
    return axios.get('http://192.168.2.119:3005/all')
    .then(response => turnApiObjIntoArray(response.data));
}