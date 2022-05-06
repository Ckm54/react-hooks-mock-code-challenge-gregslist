import React, { useState, useEffect } from "react";
import AddListingForm from "./AddListingForm";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [isFormShown, setFormshown] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then((res) => res.json())
    .then((fetchedListings) => setListings(fetchedListings))
  }, [])

  function onItemDelete(item) {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => {
      const remainingListings = listings.filter((listing) => listing.id !== item.id)
      setListings(remainingListings)
    })
  }

  function handleUserSearch(nameInput) {
    const searchResult = listings.filter((listing) => listing.description === nameInput)
    setListings(searchResult)
  }

  function sortListings() {
    const sortedListings = [...listings].sort((listing1, listing2) => (listing1.location > listing2.location) ? 1 : -1)
    setListings(sortedListings)
  }

  function handleFormShow() {
    setFormshown(!isFormShown)
  }

  function uploadNewData(userInput) {
    fetch(`http://localhost:6001/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput)
    })
    .then((res) => res.json())
    .then((newData) => {
      setListings([...listings, newData])
      handleFormShow()
    })
  }
  return (
    <div className="app">
      <Header onSearchHandle={ handleUserSearch }/>
      <button onClick={handleFormShow}>{isFormShown ? "Hide Form" : "Add New Data"}</button>
      {isFormShown ? <AddListingForm handleDataUpload={uploadNewData}/> : null}
      <ListingsContainer productListings={listings} handleListingDelete={onItemDelete} handleListingSort={sortListings}/>
    </div>
  );
}

export default App;
