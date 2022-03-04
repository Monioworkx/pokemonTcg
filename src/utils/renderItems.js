import React from "react";

const renderItems = (array, Component) => {

    return array?.map(item  => (
        <Component key={item.deckId.toString()} {...item} />
    ));
}

export default renderItems; 