import './App.css';
import React,{useEffect,useState} from 'react';
import {useRecoilState, useRecoilValue} from "recoil"
import {data,counter,Text,postData,Select,Show,Filter} from './StatePub/StatePub'
import Halo from './Components/Halo';
import axios from 'axios';
function App() {
 const [text,setText] = useRecoilState(Text)
const [datas,setDatas] =useRecoilState (data)
const [post,setPost] = useRecoilState (postData)
const valueconter =useRecoilValue(Select)
const [tambah,setTambah] = useRecoilState (counter)
const [show,setShow] = useRecoilState (Show)
const [filter,setFilter]=useState([])
const showData = ()=>{
  if(valueconter ===10){
    setShow (true)
  }
}
 const handleSubmit =async(e)=>{
e.preventDefault()
await axios.post('`https://jsonplaceholder.typicode.com/posts',{
  id:post.id,
  title : post.title,
  body : post.body  
})
 }
 const fetchData = async  ()=>{
   try {
     const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
     setDatas(data)
     setText(data.title)
   } catch (error) {
     console.log(error);
     
   }
 }
 const DataFilter = datas.filter((x)=>{
   return x.length <10
   
 })
 console.log(DataFilter);

 useEffect(()=>{
 fetchData()
 showData()


 },[valueconter])
  return (
    <div className="App">
   <p>{tambah}</p>
   {show && <p>{text}</p>}
     <button onClick={()=>setTambah(tambah +1)}>tamah</button>
<h1> nomer selanjutny adalah {valueconter}</h1>
   <form onSubmit={handleSubmit}>
     <input type="text" onChange={(e) => setPost({...post, body: e.target.value})}/>
     <input type="text" onChange={(e) => setPost({...post,title:e.target.value})}/>
   </form>
   <Halo />
    </div>
  );
}

export default App;
