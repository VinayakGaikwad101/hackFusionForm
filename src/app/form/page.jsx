'use client';

import React from 'react'
import {set, database, ref} from '../firebase'
import { getStorage, ref as storageRef, uploadBytesResumable } from "firebase/storage";
import Image from 'next/image'
import Logo from '../../../public/hackfusionlogo.png'
import QRCode from '../../../public/QRCode.jpeg'
import backgroundImage1 from '../../../public/background01.jpg'
import backgroundImage2 from '../../../public/background02.jpg'

export default function Form() {
const handleSubmit = async (form) => {
  form.preventDefault();
  let now = new Date();
  let currentTime = now.toLocaleTimeString();
  let currentDate = now.toLocaleDateString();
  let dateTimeString = `Time: ${currentTime}, Date: ${currentDate}`;
  const formTextData = {

    // here keys are the field keys in realtime db 
    // values are key values in realtime db(get by ID for each) 
    LeaderName: document.getElementById("leaderName").value,
    LeaderEmail: document.getElementById("leaderEmail").value,
    LeaderMobileNo: document.getElementById("leaderMobNo").value,

    Member2Name: document.getElementById("member2Name").value,
    Member2Email: document.getElementById("member2Email").value,
    Member2MobileNo: document.getElementById("member2MobNo").value,

    Member3Name: document.getElementById("member3Name").value,
    Member3Email: document.getElementById("member3Email").value,
    Member3MobileNo: document.getElementById("member3MobNo").value,

    Member4Name: document.getElementById("member4Name").value,
    Member4Email: document.getElementById("member4Email").value,
    Member4MobileNo: document.getElementById("member4MobNo").value,

    TeamName: document.getElementById("teamName").value,
    CollegeName: document.getElementById("collegeName").value,
    CityName: document.getElementById("cityName").value,
    DistrictName: document.getElementById("districtName").value,
    PaymentReferenceID: document.getElementById("refID").value,

    RegisteredDateTime: dateTimeString,
  }
  
  const uniqueId = Math.random().toString(36).slice(2,7);

  await set(ref(database, "users/" + uniqueId), formTextData);

  const storage = getStorage();
  const fileInputs = ['leaderPhoto', 'leaderID', 'member2Photo', 'member2ID', 'member3Photo', 'member3ID', 'member4Photo', 'member4ID', 'paymentSS'];
  for (let inputId of fileInputs) {
    let file = document.getElementById(inputId).files[0];
      let teamName = document.getElementById("teamName").value; 
    //   folderStruct and names in firebase storage: 
      let fileRef = storageRef(storage, `documents/${teamName}/${uniqueId}/${inputId}/${file.name}`);
      let uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on('state_changed', 
      (snapshot) => {
    // The state_changed event is triggered anytime the state changes
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      }
    }, 
      (error) => {
        // Handle unsuccessful uploads
        console.error('Upload failed:', error);
      }, 
      () => {}
    );
}

  alert("Form submitted");
  form.target.reset();
}
  
  return (
    <>
    <div className="backgroundContainer bg1" style={{
      backgroundImage: `url(${backgroundImage1.src})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      display: 'flex',
      justifyContent: 'center'
    }}>
    <form id="frmContact" onSubmit={handleSubmit} className='max-w-lg w-full'>
          <div className="logoContainer">             <Image src={Logo} layout="fill" alt='hackfusion2024logo'/></div>

          <div className="formContent flex flex-wrap -mx-3 mb-6 p-5">

          <p className='w-full px-3 mb-6 '> <span className='bg-white text-black font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100'><a href="/yourfile.pdf">Rules Handbook here </a></span>
        </p>

        <p className='w-full px-3 mb-6 '> <span className='text-white'>I have read the rules in the rules handbook and agree to abide by it</span>
        <input  type='checkbox'   required  className='mx-1  bg-pink-100 rounded'/>
        </p>


        <p className='w-1/2 px-3 mb-6 mt-3 '>
        <span className='text-white'>Team Name:</span> <input type="text" className='text-black bg-pink-100 rounded' name="email" id="teamName" required />
        </p>

        <p className='w-1/2 px-3 mb-6 mt-3 '>
<span className='text-white'>College Name: </span><input className='text-black bg-pink-100 rounded' type="text" name="email" id="collegeName" required />
        </p>

        <p className='w-1/2 px-3 mb-6  '> <span className='text-white'>Leader Name: </span>
            <input className='text-black bg-pink-100 rounded' type="text" name="fullname" id="leaderName" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Leader Mobile No: </span>
            <input type="text" name="email" className='text-black bg-pink-100 rounded' id="leaderMobNo" required />
        </p>
        <p className=' w-full px-3 mb-6 '> <span className='text-white'>Leader Email: </span> 
             <input type="email" name="teamname" id="leaderEmail" className='text-black bg-pink-100 rounded' required />
        </p>

        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Leader College ID: </span>
            <input type="file"  id="leaderID" required />
        </p>

        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'> Leader Photo: </span>
           <input type="file"  id="leaderPhoto" required />
        </p>

        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 2 Name: </span>
            <input type="text" name="email" className='text-black bg-pink-100 rounded' id="member2Name" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 2 Mobile No: </span>
            <input className='text-black bg-pink-100 rounded' type="text" name="email" id="member2MobNo" required />
        </p>
        <p className='w-full px-3 mb-6 '> <span className='text-white'>Member 2 Email: </span>
            <input className='text-black bg-pink-100 rounded' type="email" name="email" id="member2Email" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 2 College ID: </span>
            <input  type="file" id="member2ID" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 2 Photo: </span>
            <input  type="file" id="member2Photo" required />
        </p>

        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 3 Name: </span>
            <input className='text-black bg-pink-100 rounded' type="text" name="email" id="member3Name" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 3 Mobile No: </span>
            <input className='text-black bg-pink-100 rounded' type="text" name="email" id="member3MobNo" required />
         </p>
        <p className='w-full px-3 mb-6 '> <span className='text-white'>Member 3 Email: </span>
            <input className='text-black bg-pink-100 rounded' type="email" name="email" id="member3Email" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 3 College ID: </span>
            <input  type="file" id="member3ID" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 3 Photo: </span>
            <input  type="file" id="member3Photo" required />
        </p>

        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 4 Name: </span>
            <input className='text-black bg-pink-100 rounded' type="text" name="email" id="member4Name" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 4 Mobile No: </span>
            <input className='text-black bg-pink-100 rounded' type="text" name="email" id="member4MobNo" required />
        </p>
        <p className='w-full px-3 mb-6 '> <span className='text-white'>Member 4 Email: </span>
            <input className='text-black bg-pink-100 rounded' type="email" name="email" id="member4Email" required />
        </p>
        
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 4 College ID: </span>
            <input  type="file" id="member4ID" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Member 4 Photo: </span>
            <input  type="file" id="member4Photo" required />
        </p>



        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>City: </span>
             <input type="text" name="email" className='text-black bg-pink-100 rounded' id="cityName" required />
        </p>
        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>District: </span>
            <input className='text-black bg-pink-100 rounded' type="text" name="email" id="districtName" required />
        </p>


        <div className="qrCodeContainer px-3 mb-6">
          <Image src={QRCode}  layout='fill'  alt='qrcode'/>
        </div>
        

<br />

        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Enter Payment Reference ID: </span>
            <input type="text" className='text-black bg-pink-100 rounded' name="email" id="refID" required placeholder='PP1234567890'/>
            <p className='text-white'>Rs. 499/- per team</p>
        </p>

        <p className='w-1/2 px-3 mb-6 '> <span className='text-white'>Screenshot of Payment: </span>
            <input  type="file" id="paymentSS" required />
        </p>

        <p className='w-full px-3 mb-6 '> <span className='text-white'>I  I have read and agreed to all the terms and conditions </span>
        <input  type='checkbox'   required onChange={async (e) => {
          if(e.target.checked) {
            alert("1) Payment is non refundable.\n2) Minimum one member should be a girl.\n3) 4 Members are must for every team.\n4) Students from Maharashtra must need to come offline for hackathon, meanwhile other students can participate online.")
          }
        }}  className='mx-1  bg-pink-100 rounded'/>
        </p>

        <button type="submit" name="submit" className='btn btn-border-4 w-full'>Submit</button>
        </div>
    </form>
    </div>
        <div className="backgroundContainer bg2" style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: 'flex',
          justifyContent: 'center'
        }}></div>
        </>
  )
}
