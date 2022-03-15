import { useEffect } from "react";

const Genres = ({match}) => {
    useEffect(()=>{
        const {id : idNum}=match.params;
    },[]);
    return <div>genres</div>
}

export default Genres;