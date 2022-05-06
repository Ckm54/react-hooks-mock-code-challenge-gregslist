import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ productListings, handleListingDelete, handleListingSort }) {

  const myListings = productListings.map((listing) => <ListingCard key={listing.id} item={listing} onDeleteItem={handleListingDelete}/>)
  return (
    <main>
      <button onClick={handleListingSort}>Sort listings by locations [A - Z]</button>
      <ul className="cards">
        { myListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
