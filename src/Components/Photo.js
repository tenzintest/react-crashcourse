import React, {useState, useEffect} from 'react'


const hiStyle = {
  color: 'red',
  fontSize: '20px'
}

const Photo = () => {

  const [photo, setPhoto] = useState([]);


  useEffect(() => {
    const updatePic = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        const  data = await response.json()
        setPhoto(data);
    };
    updatePic();
  }, [])

  console.log(photo);

 

  return (
    <div>
        {
             photo.map((pic) => (
                <div key={pic.id}>
                    <h1 style={hiStyle}>{pic.title}</h1>
                    <p className='userName'>{pic.body}</p>
                </div>
                  
              ))
        }
    </div>
  )
}

export default Photo