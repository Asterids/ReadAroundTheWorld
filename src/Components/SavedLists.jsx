import React, { Component } from 'react';

const SavedLists = (props) => {

  let sidebarClasses = props.active ? 'savedList active' : 'savedList';

  console.log("PROPS: ")
  console.log(props)

  return (
    <div className={sidebarClasses}>
      <div id="savedListHeader">
        <h3>Saved Lists</h3>
      </div>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
      </ul>
    </div>
  );
}

export default SavedLists;
