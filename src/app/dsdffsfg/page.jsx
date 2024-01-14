'use client';

import React from 'react';
import {useState, useEffect} from 'react';
import { get, ref } from 'firebase/database';
import { database } from '../firebase';

const Admin = () => {
    // stores array of userObjects
    const [users, setUsers] = useState([]);
    let teamCounter = 1;

    useEffect(()=> {
        const usersRef = ref(database, 'users');
        get(usersRef)
        .then((snapshot)=> {
            if(snapshot.exists()) {
                const usersArray = Object.entries(snapshot.val()).map(([id, data])=> ({
                    ...data,
                }));
                setUsers(usersArray);
            } 
            else {
                console.log("No data available");
            }
        })
        .catch((error)=> {
            console.log(error);
        });
    }, []);

// teamname, collegename, cityname, districtname,
// paymentrefid,registereddatetime
  return (
    <main className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center my-10'>Registered Teams: </h1>
        <div className='grid grid-cols-1 gap-4'>
            {users.map((user)=> (
                    <div key={++teamCounter} className='bg-gray-100 p-4 rounded-lg'>
                    <h2 className='text-2xl text-gray-900 border-2 border-blue-500 text-center'>Team {teamCounter}</h2>
                    <p className='text-gray-600 border-2 border-blue-500'>Team Name: {user.TeamName}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>College Name: {user.CollegeName}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>City Name: {user.CityName}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>District Name: {user.DistrictName}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Payment Ref ID: {user.PaymentReferenceID}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Registered at: {user.RegisteredDateTime}</p>

                    <p className='text-gray-600 border-2 border-blue-500'>Leader Name: {user.LeaderName}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Leader Mobile No: {user.LeaderMobileNo}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Leader Email: {user.LeaderEmail}</p>

                    <p className='text-gray-600 border-2 border-blue-500'>Member 2 Name: {user.Member2Name}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Member 2 Mobile No: {user.Member2MobileNo}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Member 2 Email: {user.Member2Email}</p>
                    
                    <p className='text-gray-600 border-2 border-blue-500'>Member 3 Name: {user.Member3Name}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Member 3 Mobile No: {user.Member3MobileNo}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Member 3 Email: {user.Member3Email}</p>

                    <p className='text-gray-600 border-2 border-blue-500'>Member 4 Name: {user.Member4Name}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Member 4 Mobile No: {user.Member4MobileNo}</p>
                    <p className='text-gray-600 border-2 border-blue-500'>Member 4 Email: {user.Member4Email}</p>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Admin