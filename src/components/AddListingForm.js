import React, { useState } from "react";

function AddListingForm({ handleDataUpload }) {
  const [formData, setFormData] = useState({
    description: "",
    location: "",
    image: ""
  })
  // const [image, setImage] = useState("")
  const [imageFile, setFile] = useState()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const getImage = (e) => {
    setFile(e.target.files[0]) //save chosen image to imagefile
  }

  // function uploadImage(){
  //   const imageData = new FormData();
  //   imageData.append("myFile", imageFile, imageFile.name);
  //   console.log(imageFile)
  //   axios.post("../../public/images", imageData)
  // }

  function handleFormsubmit(e) {
    e.preventDefault()
    // uploadImage()
    console.log(formData)
    const sentData = {
      ...formData,
      image: `./images/${imageFile.name}`
    }
    handleDataUpload(sentData)
  }
  return (
    <form onSubmit={handleFormsubmit}>
      <input type="text" name="description" placeholder="Enter description" onChange={handleChange} />
      <input type="text" name="location" placeholder="Enter location" onChange={handleChange}/>
      <input type="file" name="image" onChange={getImage} accept="image/png, image/jpg"/>
      <input type="submit" />
    </form>
  )
}

export default AddListingForm