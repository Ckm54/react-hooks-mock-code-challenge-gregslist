import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ productListings, handleListingDelete }) {

  const myListings = productListings.map((listing) => <ListingCard key={listing.id} item={listing} onDeleteItem={handleListingDelete}/>)
  return (
    <main>
      <ul className="cards">
        { myListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
