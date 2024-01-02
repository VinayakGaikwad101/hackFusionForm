'use client';

import React from 'react'
import {set, database, ref} from '../firebase'
import { getStorage, ref as storageRef, uploadBytesResumable } from "firebase/storage";
import Image from 'next/image'
import Logo from '../../../public/hackfusionlogo.png'
import QRCode from '../../../public/QRCode.jpeg'


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
      () => {
        // Handle successful uploads on complete
            // Here we get the download URL of the uploaded file
              fileRef.getDownloadURL.then((url) => {
              console.log(`File uploaded successfully. Download URL: ${url}`);})
      }
    );
}

  alert("Form submitted");
  form.target.reset();
}
  
  return (
    <form  id="frmContact" onSubmit={handleSubmit}>
          <div className="logoContainer">             <Image src={Logo} layout="fill" alt='hackfusion2024logo'/></div>
        <p>
            Leader Name: <input type="text" name="fullname" id="leaderName" required />
        </p>
        <p>
            Leader Email: <input type="email" name="teamname" id="leaderEmail" required />
        </p>
        <p>
            Leader Mobile No: <input type="text" name="email" id="leaderMobNo" required />
        </p>
        <p>
            Member 2 Name: <input type="text" name="email" id="member2Name" required />
        </p>
        <p>
            Member 2 Email: <input type="email" name="email" id="member2Email" required />
        </p>
        <p>
            Member 2 Mobile No: <input type="text" name="email" id="member2MobNo" required />
        </p>
        <p>
            Member 3 Name: <input type="text" name="email" id="member3Name" required />
        </p>
        <p>
            Member 3 Email: <input type="email" name="email" id="member3Email" required />
        </p>
        <p>
            Member 3 Mobile No: <input type="text" name="email" id="member3MobNo" required />
        </p>
        <p>
            Member 4 Name: <input type="text" name="email" id="member4Name" required />
        </p>
        <p>
            Member 4 Email: <input type="email" name="email" id="member4Email" required />
        </p>
        <p>
            Member 4 Mobile No: <input type="text" name="email" id="member4MobNo" required />
        </p>
        <p>
            Team Name: <input type="text" name="email" id="teamName" required />
        </p>
        <p>
            College Name: <input type="text" name="email" id="collegeName" required />
        </p>
        <p>
            City: <input type="text" name="email" id="cityName" required />
        </p>
        <p>
            District: <input type="text" name="email" id="districtName" required />
        </p>
        <p>
            Payment Reference ID: <input type="text" name="email" id="refID" required placeholder='PP1234567890'/>
        </p>

        <div className="qrCodeContainer">
          <Image src={QRCode}  layout='fill'  alt='qrcode'/>
        </div>
        
        <p>
    Leader Photo: <input type="file" id="leaderPhoto" required />
</p>
<p>
    Leader ID: <input type="file" id="leaderID" required />
</p>

<p>
    Member 2 Photo: <input type="file" id="member2Photo" required />
</p>
<p>
    Member 2 ID: <input type="file" id="member2ID" required />
</p>

<p>
    Member 3 Photo: <input type="file" id="member3Photo" required />
</p>
<p>
    Member 3 ID: <input type="file" id="member3ID" required />
</p>

<p>
    Member 4 Photo: <input type="file" id="member4Photo" required />
</p>
<p>
    Member 4 ID: <input type="file" id="member4ID" required />
</p>

        <p>
            Screenshot of Payment: <input type="file" id="paymentSS" required />
        </p>

        <button type="submit" name="submit" >Submit</button>
    </form>
  )
}
