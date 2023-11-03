import { useContext, useEffect } from "react";
import { useState } from "react";
import newsCategory from "../../api/newscategory.json";
import { NewsContext } from "./News";


function NewsCategories() {
  const [tabActive, setTabActive] = useState(0);
  const { newsList, setFilteredNews } = useContext(NewsContext);


  const handleClickFilter = (id) => {
    setTabActive(id);
    const filteredNews = newsList.filter(newsitem => newsitem.categoryID.includes(id));
    if(id === 0) {
        setFilteredNews(newsList);
    } else {
        setFilteredNews(filteredNews);
    }
  }

  return (
    <ul className="news_filter d-flex justify-content-center">
        <li className={tabActive === 0 ? "active" : undefined }onClick={() => handleClickFilter(0)} >
            All
        </li>
    {newsCategory.newsCategory.map((category) => (
       <li className={tabActive === category.id ? "active" : undefined}
          key={category.id}
          
          onClick={() => handleClickFilter(category.id)}  
        >{category.name}</li>
      ))}
    </ul>
  )
}

export default NewsCategories;