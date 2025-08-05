import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import { NewsPostType } from "@/data/posts";

export interface SectionNewsProps {
  news?: NewsPostType[];
  className?: string;
  heading?: string;
}

const SectionNews: FC<SectionNewsProps> = ({
  news = [],
  heading = "Latest News 📰",
  className = "",
}) => {
  const renderNewsItem = (item: NewsPostType, index: number) => {
    return (
      <div
        key={item.id}
        className="flex flex-col space-y-3 p-5 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <span className="font-medium">{item.authorName}</span>
          <span>{item.date}</span>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {item.text}
        </p>
      </div>
    );
  };

  return (
    <div className={`nc-SectionNews relative ${className}`}>
      <Heading>{heading}</Heading>
      <div className="grid gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {news.map(renderNewsItem)}
      </div>
    </div>
  );
};

export default SectionNews;