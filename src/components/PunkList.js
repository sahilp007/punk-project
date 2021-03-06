import React from "react";
import CollectionCard from './CollectionCard'
import './PunkList.css'
// import HorizontalScroll from "react-horizontal-scrolling";

function PunkList({ punkListData, selectPunk }) {
  return (
    // <HorizontalScroll>
      <div className="punkList">
        {punkListData.map((punk) => {
          return (
            <div key={punk.token_id} onClick={() => selectPunk(punk.token_id)}>
              <CollectionCard
                key={punk.token_id}
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                img={punk.image_original_url}
              />
            </div>
          );
        })}
      </div>
    // </HorizontalScroll>
  );
}

export default PunkList
