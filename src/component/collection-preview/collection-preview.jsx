import React from "react";

import CollectionItem from "../collection-items/collection-items.component";

import './collection-preview.style.css';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
           {items
             .filter((item, idex) => idex < 4)
             .map(({id, ...otherItemProps} ) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div> 
);
   
export default CollectionPreview;