import React, { useEffect, useState } from 'react'
import './Health.css'
import axios from 'axios'


export default function Health() {


    const[events,Setevents]=useState([])

    useEffect(()=>{
        axios.get('https://gnews.io/api/v4/top-headlines?category=health&lang=en&apikey=16b68d66d05960a017a25800790ec6e2')
        .then((response)=>{
            console.log(response);
            Setevents(response.data.articles)
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

<div className='container-fluid health'>
        <h1 className='healthhead'>Health</h1>
        <p className='healthpara'>{formattedDate}</p>

        <div className='healthrow'>
            {events.map((events)=>(

                <div className='healthcol'>

                    <a href={events.source.url} className='healthlink' target='_blank'>
                <img src={events.image} className='healthimg' onError={(event)=>event.target.src='/images/newsimage1.jpg'} />
                <h2 className='healthtitle'>{events.title}</h2>
                </a>

                <h4 className='healthsource'><span className='byspan'>by</span> {events.source.name}</h4>
                <h4 className='healthpublish'>{events.publishedAt?.substring(0,10)}</h4>
            </div>

            ))}
            
        </div>






    </div>
      

      
    </>
  )
}
