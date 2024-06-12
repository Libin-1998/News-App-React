import React, { useEffect, useState } from 'react'
import './Entertainment.css'
import axios from 'axios'


export default function Entertainment() {

    const[list,Setlist]=useState([])

    useEffect(()=>{
        axios.get('https://gnews.io/api/v4/top-headlines?category=entertainment&lang=en&apikey=16b68d66d05960a017a25800790ec6e2')
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
    <div className='container-fluid entertainment'>
        <h1 className='enthead'>Entertaiments</h1>
        <p className='entpara'>{formattedDate}</p>

        <div className='entrow'>
            {list.map((events)=>(

                <div className='entcol'>

                    <a href={events.source.url} className='entlink' target='_blank'>
                <img src={''} className='entimg' onError={(event)=>event.target.src='/images/newsimage1.jpg'} />
                <h2 className='enttitle'>{events.title}</h2>
                </a>

                <h4 className='entsource'><span className='byspan'>by</span> {events.source.name}</h4>
                <h4 className='entpublish'>{events.publishAt?.substring(0,10)}</h4>
            </div>

            ))}
            
        </div>






    </div>
      
    </>
  )
}
