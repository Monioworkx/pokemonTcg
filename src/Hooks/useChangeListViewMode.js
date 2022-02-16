import { useEffect, useState } from "react";

const useChangeListViewMode = () => {
    const [activeImages, setActiveImages] = useState(true);
    const [activeList,setActiveList] = useState(false);
    

    const handleListIconOnClick = (event) => {
        setActiveImages(false);
        setActiveList(true);
    }

    const handleImagesIconOnClick = (event) => {
        setActiveImages(true);
        setActiveList(false);
    }

    return [activeImages, activeList, handleImagesIconOnClick, handleListIconOnClick]
}

export default useChangeListViewMode;