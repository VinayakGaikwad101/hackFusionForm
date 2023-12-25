import React from 'react'
import {useForm} from 'react-hook-form'
import {useState} from 'react'

const Form = () => {

// validation 
const {register, handleSubmit, formState: {errors}} = useForm();

// preview for images 
const[selectedImages, setSelectedImages] = useState([]);

const onSelectFile = (e) => {
  const selectedFiles = e.target.files;
  const selectedFilesArray = Array.from(selectedFiles)
  // array of image urls
  const imagesArray = selectedFilesArray.map((file) => {
    return URL.createObjectURL(file);
  })
  setSelectedImages((previousImages)=> previousImages.concat(imagesArray))

  // do not delete this comment 
  // e.target.value = "";
}

  return (
       <form className="w-full max-w-lg" onSubmit={handleSubmit((data) => {
        console.log(data);
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
      <span className='redAsterisk'>*</span> Name of Member 2
      </label>
      <input {...register("member2Name", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.member2Name?.message}</p>
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
      <span className='redAsterisk'>*</span> Name of Member 4
      </label>
      <input {...register("member4Name", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
      <p className='errorMessage'>{errors.member4Name?.message}</p>
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
      <span className='redAsterisk'>*</span>City
      </label>
      <input {...register("cityName", {required: "This is required"})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="NANDED" />
      <p className='errorMessage'>{errors.cityName?.message}</p>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
      <span className='redAsterisk'>*</span>District
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Nanded</option>
          <option>Ahmednagar</option>
<option>Akola</option>
<option>Amravati</option>
<option>Aurangabad / Chhatrapati Sambhaji Nagar</option>
<option>Beed</option>
<option>Bhandara</option>
<option>Buldhana</option>
<option>Chandrapur</option>
<option>Dhule</option>
<option>Gadchiroli</option>
<option>Gondia</option>
<option>Hingoli</option>
<option>Jalgaon</option>
<option>Jalna</option>
<option>Kolhapur</option>
<option>Latur</option>
<option>Mumbai City</option>
<option>Mumbai Suburban</option>
<option>Nandurbar</option>
<option>Nagpur</option>
<option>Nashik</option>
<option>Osmanabad</option>
<option>Palghar</option>
<option>Parbhani</option>
<option>Pune</option>
<option>Raigad</option>
<option>Ratnagiri</option>
<option>Sangli</option>
<option>Satara</option>
<option>Sindhudurg</option>
<option>Solapur</option>
<option>Thane</option>
<option>Wardha</option>
<option>Washim</option>
<option>Yavatmal</option>

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
  </div>

{/* fileUpload:  */}
<section className='imageSection'><label htmlFor="images" className='imageLabel'>
  + Add Documents<br />
  <span>1. Passport Size Photo each for all members <br />2. Their college ID cards <br />3. Payment Screenshot <br />All individial clear image(s) / or as PDF(s)</span>
  <input type="file" name='images' onChange={onSelectFile} multiple accept="image/*, .pdf" className='imageInput'
  />
  </label>
  <div className="imagePreview">
    {selectedImages && selectedImages.map((image, index)=> {
      return (
        <div key={image} className="imageShowPreview">
          <img src={image} height="200" width="200" alt='uploadedDocs'className='previewImages'/>
          <button onClick={() => setSelectedImages(selectedImages.filter((e)=> e!==image))}>Delete File</button>
          <p>{index+1}</p>
        </div>
      )
    } )}
  </div>
  </section>


  {/* submit form button  */}
  <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/> 
</form> 
  )
}
export default Form