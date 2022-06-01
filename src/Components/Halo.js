import React from 'react'
import { useRecoilState } from 'recoil'
import {counter} from '../StatePub/StatePub'

const Halo = () => {
    
const [count,setCount] = useRecoilState(counter)
  return (
    <div>
        <h1>HALO INI HALO</h1>
        <p>{count}</p>
    </div>
  )
}

export default Halo