import {atom,selector} from 'recoil'
import axios from 'axios'

export const counter = atom({
    key :"counter",
    default:1
})
export const data = atom({
    key :"data",
    default:[]
})

export const Text = atom({
    key: 'text',
    default: ''
})
export const postData = atom({
    key:'postdata',
    default : { 
        id: Date.now(),
        title: '',
        body : ''
    }
})
export const Select = selector({
    key : "select",
    get : ({get}) =>{
    return get(counter) +1
    }
})
export const Show = atom({
    key: "show",
    default : false
})

