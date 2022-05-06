import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then((res) => res.json())
    .then((fetchedListings) => setListings(fetchedListings))
  }, [])

  console.log(listings)
  const myListings = listings.map((listing) => <ListingCard key={listing.id} description={listing.description} image={listing.image} location={listing.location}/>)
  return (
    <main>
      <ul className="cards">
        { myListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
