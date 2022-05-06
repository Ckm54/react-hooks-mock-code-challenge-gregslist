import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then((res) => res.json())
    .then((fetchedListings) => setListings(fetchedListings))
  }, [])

  function handleListingDelete(item) {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => {
      const remainingListings = listings.filter((listing) => listing.id !== item.id)
      setListings(remainingListings)
    })
  }

  const myListings = listings.map((listing) => <ListingCard key={listing.id} item={listing} onDeleteItem={handleListingDelete}/>)
  return (
    <main>
      <ul className="cards">
        { myListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
