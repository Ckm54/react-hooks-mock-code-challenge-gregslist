import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

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

  return (
    <div className="app">
      <Header onSearchHandle={ handleUserSearch }/>
      <ListingsContainer productListings={listings} handleListingDelete={onItemDelete} handleListingSort={sortListings}/>
    </div>
  );
}

export default App;
