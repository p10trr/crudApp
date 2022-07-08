import axios from 'axios'
import React,{useEffect,useState, useContext} from 'react'
import { UserContext } from '../../context/UserContext'

export default function DestinationCard({destination, baseUrl}) {
  const [userId,setUserId]=useState()
  const {user, setUser}= useContext(UserContext)

const handleDelete=()=>{
  axios.delete(`${baseUrl}/destinations/${destination.id}`,{
})
.then(res=>{
  console.log(res.data)
})
.catch(err=>console.log(err))
}


  return (
    <div className='destination-card'>
        <img className='destination-img' src={destination.imageUrl} alt="destination"/>
        <div className='destination-info'>
            <h1>{destination.title}</h1>
            <p>{destination.description}</p>
        
        </div> 
        <div>
          <button>See details</button>
          {
            user.id===destination.user_id ? <button onClick={handleDelete}>delete</button> :null
          }
          
        </div>
        
    </div>
  )
}
 