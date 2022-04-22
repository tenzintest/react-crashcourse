import React, {useState, useEffect} from 'react'

const Photo = () => {

  const [photo, setPhoto] = useState([]);


  useEffect(() => {
    const updatePic = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?userId=1")
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
                    <img src={pic.url} width="50" />
                    <h1>{pic.title}</h1>
                </div>
                  
              ))
        }
    </div>
  )
}

export default Photo