import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "./News";
import newsCategory from "../../api/newscategory.json";

function NewsList() {
  const { filteredNews } = useContext(NewsContext);

  const filteredNewsDisplayonhome = filteredNews.filter(
    (filteredNews) => filteredNews.showOnHomepage === "yes"
  );
  return filteredNewsDisplayonhome.slice(0, 6)?.map((newsitem) => (
    <div className="col-sm-6 col-lg-4" key={newsitem.id}>
      <div className="card_item">
        <div className="news_img">
          <img src={newsitem.urlToImage} alt={newsitem.title} />
        </div>
        <div className="news_details">
          <p>{newsitem.content}</p>
          <div className="date d-flex justify-content-start">
            <svg
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              width="18.8"
              height="20.733"
              viewBox="0 0 18.8 20.733"
            >
              <path
                id="ic_date_range_24px"
                d="M9.267,11.33H7.178V13.4H9.267Zm4.178,0H11.355V13.4h2.089Zm4.178,0H15.533V13.4h2.089Zm2.089-7.257H18.666V2H16.577V4.073H8.222V2H6.133V4.073H5.089A2.072,2.072,0,0,0,3.01,6.147L3,20.66a2.081,2.081,0,0,0,2.089,2.073H19.711A2.087,2.087,0,0,0,21.8,20.66V6.147A2.087,2.087,0,0,0,19.711,4.073Zm0,16.587H5.089V9.257H19.711Z"
                transform="translate(-3 -2)"
                fill="#13beff"
              />
            </svg>

            <span>{newsitem.publishedDate}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="category">Technology</span>
            <div>
              <a href="#" className="mx-2">
                <svg
                  id="ic_favorite_border_24px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.806"
                  height="15.85"
                  viewBox="0 0 16.806 15.85"
                >
                  <path
                    id="ic_favorite_border_24px-2"
                    data-name="ic_favorite_border_24px"
                    d="M14.185,3A4.978,4.978,0,0,0,10.4,4.805,4.978,4.978,0,0,0,6.622,3,4.642,4.642,0,0,0,2,7.751c0,3.265,2.857,5.925,7.185,9.968L10.4,18.85l1.218-1.14c4.328-4.034,7.185-6.694,7.185-9.959A4.642,4.642,0,0,0,14.185,3Zm-3.7,13.431-.084.086-.084-.086c-4-3.723-6.638-6.185-6.638-8.681A2.913,2.913,0,0,1,6.622,4.728a3.285,3.285,0,0,1,3,2.038h1.571a3.264,3.264,0,0,1,2.992-2.038,2.913,2.913,0,0,1,2.941,3.023C17.126,10.247,14.487,12.709,10.487,16.431Z"
                    transform="translate(-2 -3)"
                    fill="#13beff"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  id="ic_share_24px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.399"
                  height="19.215"
                  viewBox="0 0 17.399 19.215"
                >
                  <path
                    id="ic_share_24px-2"
                    data-name="ic_share_24px"
                    d="M17.348,15.581a2.773,2.773,0,0,0-1.875.743l-6.82-4a3.183,3.183,0,0,0,.086-.675,3.183,3.183,0,0,0-.086-.675L15.4,7.006a2.845,2.845,0,0,0,1.951.781,2.894,2.894,0,1,0-2.87-2.894,3.183,3.183,0,0,0,.086.675L7.821,9.533A2.845,2.845,0,0,0,5.87,8.752a2.894,2.894,0,0,0,0,5.788,2.845,2.845,0,0,0,1.951-.781l6.811,4.013a2.743,2.743,0,0,0-.077.627,2.793,2.793,0,1,0,2.793-2.817Z"
                    transform="translate(-3 -2)"
                    fill="#13beff"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default NewsList;
