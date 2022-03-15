import { useEffect,useState } from "react";
import instance from "../components/instance";

import { IMAGE_BASE_URL } from "../constants/_constants";

import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import MovieListItem from "../components/movieListItem";

const PopularList=styled.ul`
    display:flex;
    flex-wrap:wrap;
    li{
        position:relative;
        width:100%;
        padding:10px;
        color:#fff;
        .poster{
            max-width:100%;
        }
        .date{
            font-size:11px;
        }
        .title{
            font-size:17px;
            color:var(--active);
        }
        .vote{
            width:26px;
            height:26px;
            position:absolute;
            right:0;
            bottom:0;
        }
    }
`;

const ViewMoreButton = styled.button`
    display: block;
    width: 100%;
    font-size: 16px;
    background: var(--active);
    color: #fff;
    text-align: center;
    border: 0;
    outline: 0;
    padding: 20px;
    margin-top: 50px;
`;

const Main = () =>{

    const [searchText,setSearchText]=useState('');

    //영화목록
    const [movies, setMovies] = useState([]);
    //페이지 번호
    const [page,setPage]=useState(1);
    //전체 페이지 카운트
    const [totalPages,setTotalPage]=useState(0);
    //전체 게시물 카운트
    const [totalResults,setTotalResults]=useState(0);

    //input change
    const searchAction = (e) =>{
        setSearchText(e.target.value);
        setMovies([]);
        setPage(1);
        //fetchData(`search/movie?query=${searchText}&page=${page}`);
    }

    //data fetch
    const fetchData = (queryString) =>{
        console.log(queryString)
        instance.get(queryString)
        .then((res)=>{
            console.log(res.data.results);
            setPage(res.data.page);
            setTotalPage(res.data.total_pages);
            setTotalResults(res.data.total_results);
            setMovies([...movies, ...res.data.results]);
        })
    }


    //더보기
    const loadMore=()=>{
        console.log('more')
        if(searchText ===''){
            fetchData(`movie/popular?page=${page+1}`);
        } else {
            // 검색
            fetchData(`search/movie?query=${searchText}&page=${page+1}`);
        }

    }


    useEffect(()=>{
        //인기영화 목록
        if(searchText ===''){
            fetchData(`movie/popular?page=${page}`);
        } else {
            // 검색
            fetchData(`search/movie?query=${searchText}&page=${page}`);
        }
    },[searchText]);

    return <>
          <div>
            <input type="text"
            value={searchText}
            onChange={searchAction}
            />
            <p style={{color:'#fff'}}>{searchText}</p>
        </div>
        <PopularList>
            {movies.map((item,index)=>(
                <MovieListItem key={index} item={item}/>
            ))}
        </PopularList>
      
        <ViewMoreButton 
            type="button"
            onClick={loadMore}
            
        >더보기</ViewMoreButton>
    </>
}

export default Main;