import React, { useEffect, useState } from 'react'
import './World.css'
import axios from 'axios'


export default function World() {

    const[world,Setworld]=useState([])

    useEffect(()=>{
axios.get('https://gnews.io/api/v4/top-headlines?category=world&lang=en&apikey=16b68d66d05960a017a25800790ec6e2')
.then((response)=>{
    console.log(response.data.response);
    Setworld(response.data.articles)
})
.catch((error)=>{
    console.log(error);
})
    },[])

    const date = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long',  };
const formattedDate = date.toLocaleDateString('en-GB', options);
console.log(formattedDate);

  return (
    <>

<div className='world'>
    <h1 className='worldhead'>World News</h1>
    <p className='worldpara'>{formattedDate}</p>

    <div className='worldrow'>
        {world.map((events)=>(

<div className='worldcol'>
            
            <a href={events.source.url} className='worldurl' target='_blank'>
            <img src={events.image} className='worldimg' />
            <h2 className='worldtitle'>{events.title}</h2>
            </a>

            <h4 className='worldsource'><span className='worldby'>by</span> {events.source.name}</h4>
            <h4 className='worldpublish'>{events.publishedAt.split('T')[0]}</h4>
        </div>

        ))}
        



    </div>
</div>

      
    </>
  )
}
