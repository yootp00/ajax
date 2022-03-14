import { IMAGE_BASE_URL } from "../constants/_constants";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MovieListItem= ({item})=>{
    return (
        <li>
        <img src={`${IMAGE_BASE_URL}w500${item.poster_path}`}
        className="poster" alt={item.title}/>
        <p className="date">{item.release_date}</p>
        <p className="title">{item.title}</p>
        <div className="vote">
            <CircularProgressbar value={item.vote_average *10} text={`${item.vote_average*10}%`} />
        </div>
    </li>
    )

}

export default MovieListItem;