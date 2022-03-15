import { useEffect,useState } from "react";
import instance from "./instance";

import {Link} from "react-router-dom";

import styled from "styled-components";

const FixedHeader = styled.header`
    position:sticky;
    top: 0;
    left: 0;
    right:0;
    background:var(--bg);
    z-index:1000;
`;

const NavList = styled.ul`
   display : flex;
   li{
       margin-right:10px;
       a{
           color:#fff;
           background:#000;
           text-decoration:none;
           padding:10px;

       }
   }
`;

const GenresList = styled.ul`
   li{
    display: inline-block;
      margin-left:10px;
      margin-right:10px;
   }
`;

const last20Years = () =>{
    const currentYear = new Date().getFullYear();
    const endYear = currentYear - 20;
    const yearArray = [];
    for(let i =currentYear; i>endYear;i--){
        yearArray.push(i);
    }
    return yearArray;
}

const Header = () =>{

    const [genres,setGenres] = useState([]);

    const yearValues = last20Years();

    useEffect(() => {
        instance.get(`genre/movie/list`)
        .then((res)=>setGenres(res.data.genres))
    },[]);

    return (
        <FixedHeader>
        <NavList>
            <li><Link to ="/">Main</Link></li>
            <li><Link to ="/movie">Movie</Link></li>
        </NavList>
        <GenresList>
            {genres.map((item,index) => (
                <li key={index}>
                    <Link to={`/genres/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </GenresList>
        <GenresList>
            {yearValues.map((item,index)=>(
                <li key={index}>
                  <Link to={``}>{item}</Link> 
                </li>

            ))}
        </GenresList>
        </FixedHeader>
        
    )
}

export default Header;