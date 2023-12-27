'use client';

import Image from 'next/image'
import React from 'react'
import {useForm} from 'react-hook-form'
import {useState, useRef} from 'react'


export default function Form() {

// validation 
const {register, handleSubmit, formState: {errors}} = useForm();

let userInfo = new FormData();
// global FormData object 

// fileValidation and storage:
const [fileNames1, setFileNames1] = useState([]);
const [fileNames2, setFileNames2] = useState([]);
const [fileNames3, setFileNames3] = useState([]);
const [fileNames4, setFileNames4] = useState([]);
const [fileNames5, setFileNames5] = useState([]);

const [errorMessage1, setErrorMessage1] = useState('');
const [errorMessage2, setErrorMessage2] = useState('');
const [errorMessage3, setErrorMessage3] = useState('');
const [errorMessage4, setErrorMessage4] = useState('');
const [errorMessage5, setErrorMessage5] = useState('');

const formRef = useRef();
const onSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(formRef.current);
  for (let pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }
}

  return (

       
<form onSubmit={handleSubmit((data) => {
  // const userInfo = new FormData();

  // Append all non-file inputs
  Object.entries(data).forEach(([key, value]) => {
    if (!(value instanceof File)) {
      userInfo.append(key, value);
    }
  });

  // Append all file inputs
  const fileFields = document.querySelectorAll('input[type="file"]');
  fileFields.forEach((fileField, index) => {
    for(let i = 0; i < fileField.files.length; i++) {
      userInfo.append(`UserFile${index + 1}`, fileField.files[i]);
    }
  });

  // Log all entries of userInfo
  for (let pair of userInfo.entries()) {
    console.log(pair[0]+ ', ' + pair[1]);
  }

  
  console.log("Below is original dataform")
// Log all entries of userInfo
for (let pair of userInfo.entries()) {
  console.log(pair[0]+ ', ' + pair[1]);
}
})}>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      <span className='redAsterisk'>*</span> Name of Leader
      </label>
      <input {...register("leaderName", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.leaderName?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      <span className='redAsterisk'>*</span> Mobile Number of Team leader
      </label>
      <input {...register("mobNo1", {required: "This is required", minLength: {value: 10, message: "Mobile number should be exactly 10 digits long"}, pattern: {value: /^[0-9]{10}$/, message: "Mobile number can only be digits and 10 digits long"}})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.mobNo1?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
    <span className='redAsterisk'>*</span> Email of Team Leader
  </label>
  <input {...register("email1", {
    required: "This is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
      message: "Invalid email address"
    }
  })} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email"  />
  <p className='errorMessage'>{errors.email1?.message}</p>
</div>

<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="userFiles1">
    <span className='redAsterisk'>*</span> Passport Photo and College ID
  </label>
  <input {...register("userFiles1", {
    validate: {
      required: (value) => value.length > 0 || "This is required",
      lessThanTwoFiles: (value) => value.length <= 2 || "You can only upload up to 2 files",
      lessThan4MB: (value) => Array.from(value).every(file => file.size <= 4 * 1024 * 1024) || "Each file must be less than 4MB"
    },
    onChange: (e) => {
      const files = e.target.files;
      const names = Array.from(files).map(file => file.name);
      setFileNames1(names);
    }
  })}
  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  id="userFiles1"
  type="file"
  accept="image/*,application/pdf"
  multiple />
  {fileNames1.map((name, index) => (
    <p key={index}>{name}</p>
  ))}
  <p className='errorMessage'>{errors.userFiles1 && errors.userFiles1.message}</p>
</div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      <span className='redAsterisk'>*</span> Name of Member 2
      </label>
      <input {...register("member2Name", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.member2Name?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      <span className='redAsterisk'>*</span> Mobile Number of Team Member 2
      </label>
      <input {...register("mobNo2", {required: "This is required", minLength: {value: 10, message: "Mobile number should be exactly 10 digits long"}, pattern: {value: /^[0-9]{10}$/, message: "Mobile number can only be digits and 10 digits long"}})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.mobNo2?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
    <span className='redAsterisk'>*</span> Email of Member 2
  </label>
  <input {...register("email2", {
    required: "This is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
      message: "Invalid email address"
    }
  })} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email"  />
  <p className='errorMessage'>{errors.email2?.message}</p>
</div>


<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="userFiles2">
    <span className='redAsterisk'>*</span> Passport Photo and College ID
  </label>
  <input {...register("userFiles2", {
    validate: {
      required: (value) => value.length > 0 || "This is required",
      lessThanTwoFiles: (value) => value.length <= 2 || "You can only upload up to 2 files",
      lessThan4MB: (value) => Array.from(value).every(file => file.size <= 4 * 1024 * 1024) || "Each file must be less than 4MB"
    },
    onChange: (e) => {
      const files = e.target.files;
      const names = Array.from(files).map(file => file.name);
      setFileNames2(names);
    }
  })}
  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  id="userFiles2"
  type="file"
  accept="image/*,application/pdf"
  multiple />
  {fileNames2.map((name, index) => (
    <p key={index}>{name}</p>
  ))}
  <p className='errorMessage'>{errors.userFiles2 && errors.userFiles2.message}</p>
</div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      <span className='redAsterisk'>*</span> Name of Member 3
      </label>
      <input {...register("member3Name", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
      <p className='errorMessage'>{errors.member3Name?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      <span className='redAsterisk'>*</span> Mobile Number of Team Member 3
      </label>
      <input {...register("mobNo3", {required: "This is required", minLength: {value: 10, message: "Mobile number should be exactly 10 digits long"}, pattern: {value: /^[0-9]{10}$/, message: "Mobile number can only be digits and 10 digits long"}})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.mobNo3?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
    <span className='redAsterisk'>*</span> Email of Member 3
  </label>
  <input {...register("email3", {
    required: "This is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
      message: "Invalid email address"
    }
  })} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email"  />
  <p className='errorMessage'>{errors.email3?.message}</p>
</div>

<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="userFiles3">
    <span className='redAsterisk'>*</span> Passport Photo and College ID
  </label>
  <input {...register("userFiles3", {
    validate: {
      required: (value) => value.length > 0 || "This is required",
      lessThanTwoFiles: (value) => value.length <= 2 || "You can only upload up to 2 files",
      lessThan4MB: (value) => Array.from(value).every(file => file.size <= 4 * 1024 * 1024) || "Each file must be less than 4MB"
    },
    onChange: (e) => {
      const files = e.target.files;
      const names = Array.from(files).map(file => file.name);
      setFileNames3(names);
    }
  })}
  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  id="userFiles3"
  type="file"
  accept="image/*,application/pdf"
  multiple />
  {fileNames3.map((name, index) => (
    <p key={index}>{name}</p>
  ))}
  <p className='errorMessage'>{errors.userFiles3 && errors.userFiles3.message}</p>
</div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      <span className='redAsterisk'>*</span> Name of Member 4
      </label>
      <input {...register("member4Name", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.member4Name?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      <span className='redAsterisk'>*</span> Mobile Number of Team Member 4
      </label>
      <input {...register("mobNo4", {required: "This is required", minLength: {value: 10, message: "Mobile number should be exactly 10 digits long"}, pattern: {value: /^[0-9]{10}$/, message: "Mobile number can only be digits and 10 digits long"}})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.mobNo4?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
    <span className='redAsterisk'>*</span> Email of Member 4
  </label>
  <input {...register("email4", {
    required: "This is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
      message: "Invalid email address"
    }
  })} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email"  />
  <p className='errorMessage'>{errors.email4?.message}</p>
</div>

<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="userFiles4">
    <span className='redAsterisk'>*</span> Passport Photo and College ID
  </label>
  <input {...register("userFiles4", {
    validate: {
      required: (value) => value.length > 0 || "This is required",
      lessThanTwoFiles: (value) => value.length <= 2 || "You can only upload up to 2 files",
      lessThan4MB: (value) => Array.from(value).every(file => file.size <= 4 * 1024 * 1024) || "Each file must be less than 4MB"
    },
    onChange: (e) => {
      const files = e.target.files;
      const names = Array.from(files).map(file => file.name);
      setFileNames4(names);
    }
  })}
  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  id="userFiles4"
  type="file"
  accept="image/*,application/pdf"
  multiple />
  {fileNames4.map((name, index) => (
    <p key={index}>{name}</p>
  ))}
  <p className='errorMessage'>{errors.userFiles4 && errors.userFiles4.message}</p>
</div>

    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      <span className='redAsterisk'>*</span>Team Name
      </label>
      <input {...register("teamName", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"  />
      <p className='errorMessage'>{errors.teamName?.message}</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
      <span className='redAsterisk'>*</span>College Name
      </label>
      <input {...register("collegeName", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="SHRI GURU SINGHJI INSTITUTE OF ENGINEERING AND TECHNOLOGY" />
      <p className='errorMessage'>{errors.collegeName?.message}</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
      <span className='redAsterisk'>*</span>State
      </label>
      <input {...register("stateName", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="NANDED" />
      <p className='errorMessage'>{errors.stateName?.message}</p>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
      <span className='redAsterisk'>*</span>District
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Nanded</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        <span className='redAsterisk'>*</span>Payment ID Number
      </label>
      <input {...register("refName", {required: "This is required", minLength: {value: 12, message: "Reference ID should be minimum 12 characters long"}})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text"/>
      <p className='errorMessage'>{errors.refName?.message}</p>
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="refIDFile">
    <span className='redAsterisk'>*</span> Passport Photo and College ID
  </label>
  <input {...register("refIDFile", {
    validate: {
      required: (value) => value.length > 0 || "This is required",
      lessThan4MB: (value) => Array.from(value).every(file => file.size <= 4 * 1024 * 1024) || "Each file must be less than 4MB"
    },
    onChange: (e) => {
      const files = e.target.files;
      const names = Array.from(files).map(file => file.name);
      setFileNames5(names);
    }
  })}
  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  id="refIDFile"
  type="file"
  accept="image/*,application/pdf" />
  {fileNames5.map((name, index) => (
    <p key={index}>{name}</p>
  ))}
  <p className='errorMessage'>{errors.refIDFile && errors.refIDFile.message}</p>
</div>
  </div>
  {/* submit form button  */}
  <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/> 
</form> 
  )
}
