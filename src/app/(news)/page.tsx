import React from "react";
import { DEMO_NEWS_SIMPLE } from "@/data/posts";
import SectionNews from "@/components/Sections/SectionNews";

const PageNews = () => {
  return (
    <div className="nc-PageNews">
      <div className="container relative py-16">
        <SectionNews 
          news={DEMO_NEWS_SIMPLE}
          heading="Latest News 📰"
          className="pb-16 lg:pb-28"
        />
      </div>
    </div>
  );
};

export default PageNews;