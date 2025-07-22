import React from 'react'
import coverImage from '../assets/images/django-cover.jpg'

const LearnLoadingmage = () => {
  return (
   <>
   <h1>Load Image</h1>
   <img src={coverImage} alt="coverImage" style={{width:'400px', height:'500px'}} />
   </>
  )
}

export default LearnLoadingmage