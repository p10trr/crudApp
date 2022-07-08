import React from 'react'
import "./destinations.css"
import DestinationCard from './DestinationCard'

export default function Destinations({destinations, baseUrl}) {
  return (
    <div className='destinations-container'>
        {
            destinations.map(destination=>{
               return <DestinationCard key={destination.id} destination={destination} baseUrl={baseUrl} />
            })
        }
    </div>
  )
}
 