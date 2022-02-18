import { useEffect, useState } from "react";

const useMounted = () =>{
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        return () => setIsMounted(false);
    }, [])
    return isMounted;
}

export default useMounted;