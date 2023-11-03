import React, { useEffect, useState } from "react";
import { createContext } from "react";


import NewsList from "./NewsList";
import NewsCategories from "./NewsCategories";
import news from "../../api/newslist.json";


export const NewsContext = createContext();


function NewsSection() {
    const [newsList, setNewsList] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
  
    const fetchNewsList=()=>{
       
         
            setNewsList(news.News);
            setFilteredNews(news.News);
         
      }
    useEffect(() => {
      fetchNewsList();
    }, []);

    const value = {
      newsList,
      filteredNews,
      setFilteredNews
    }
  
 
  
    return (
        <NewsContext.Provider value={value}>

    <section className="media">
        <div className="container-md">
            <h6 className="text-center">Media</h6>
            <h3 className="text-center">Top News</h3>
            <div className="news_section">

       <NewsCategories />
                <div className="row news_cards">
             <NewsList  />
               
                </div>
                <div className="text-center">
                    <button className="btn btn-orange btn-lg">View All News</button>
                </div>

            </div>
        </div>
    </section>
    </NewsContext.Provider>

  )}

export default NewsSection;