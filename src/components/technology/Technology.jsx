import React, { useEffect, useState } from 'react'
import './Technology.css'
import axios from 'axios'


export default function Technology() {

    const[list,Setlist]=useState([])

    useEffect(()=>{
        axios.get('https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=16b68d66d05960a017a25800790ec6e2')
        .then((response)=>{
            console.log(response.data.response);
            Setlist(response.data.articles)
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

<div className='tech'>
    <h1 className='techhead'>Technology News</h1>
    <p className='techpara'>{formattedDate}</p>

    <div className='techrow'>
        {list.map((events)=>(

<div className='techcol'>
            
            <a href={events.source.url} className='techurl' target='_blank'>
            <img src={events.image} className='techimg' onError={(event)=>event.target.src='/images/newsimage1.jpg'}/>
            <h2 className='techtitle'>{events.title}</h2>
            </a>

            <h4 className='techsource'><span className='techby'>by</span> {events.source.name}</h4>
            <h4 className='techpublish'>{events.publishedAt.split('T')[0]}</h4>
        </div>

        ))}
        
    </div>
</div>
      
    </>
  )
}
