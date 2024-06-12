import React, { useEffect, useState } from 'react'
import './Content.css'
import axios from 'axios'
import { API_KEY } from '../../constants'

export default function Content() {

    const[news,Setnews]=useState([])

    useEffect(()=>{
        axios.get(`https://gnews.io/api/v4/search?q=example&apikey=${API_KEY} `)
        .then((response)=>{
            console.log(response);
            Setnews(response.data.articles)

        })
        .catch((error)=>{
            console.log(error);
        })

    },[])

//     const date = new Date();
// const day = date.getDate();
// const month = date.toLocaleString('default', { month: 'long' });
// const year = date.getFullYear();
// const formattedDate = `${day} ${month} ${year}`;
// console.log(formattedDate);

const date = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long',  };
const formattedDate = date.toLocaleDateString('en-GB', options);
console.log(formattedDate);

  return (
    <>
<div className='container-fluid navnews'>

  <p className='paradate'>
{formattedDate}</p>

<div class="newscard">

{news.map((gnews)=>(

<div class="firstcard">
<a href={gnews.source.url} className='titlelink' target='_blank'>
  <img src={gnews.image} className='newsimg' />
  <h2 className='titlefont'>{gnews.title}</h2>
  </a>

  <h4 className='sourcefont'><span className='byspan'>by</span> {gnews.source.name}</h4>
  <h4 className='newsdate'>{gnews.publishedAt.split('T')[0]}</h4>
</div>

))}
</div>

</div>  
    </>
  )
}
