import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postSlice'
const AddPost = () => {
    const dispatch = useDispatch()
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const onTitleChanged = (e)=>{
       setTitle(e.target.value)
    }
    const onContentChanged = (e)=>{
        setContent(e.target.value)
     }
     const savePost =()=>{
         if(title&&content){
             dispatch(
                 postAdded({
                     id:nanoid(),
                     title,
                     content
                 })
             )
             setTitle('')
             setContent('')
         }
     }
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="masukan Nama" 
            onChange={onTitleChanged}/>
               <input type="text" placeholder="masukan Nama" 
            onChange={onContentChanged}/>
             <button  onClick={savePost}type="submit" >Save</button>
        </form>
    </div>
  )
}

export default AddPost