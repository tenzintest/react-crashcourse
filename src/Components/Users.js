import React, { useState, useEffect } from 'react'
import '../styles/User.css';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase-config';


const Users = () => {

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getUsers();
  },[])

  console.log(users);
  return (
    <div>
        {
          users.map((user) => {
            return (
              <div>
                  {" "}
                  <h1>Name: {user.name}</h1>
                  <p>Age: {user.age} </p>
              </div>
            )
          })
        }
    </div>
  )
}

export default Users