/* eslint-disable react/jsx-no-comment-textnodes */
import processSlug from "@/app/lib/processSlug";
import { RadioApiShow } from "@/app/types";
import Link from "next/link";
import React from "react";

interface RelatedShowsProps {
  shows: RadioApiShow[];
}

const RelatedShows = ({ shows }: RelatedShowsProps) => {
  const formattedShows = shows.map((show) => {
    const processedSlug = processSlug(show.slug);
    const showTags = show.tags;

    return { processedSlug, showTags };
  });

  return (
    <article>
      {formattedShows.map(
        ({
          processedSlug: { showName, showDateforLists, showDateforUrl },
          showTags,
        }) => (
          <>
            <div className="flex justify-between mt-[17px]">
              <Link href={`/shows/${showDateforUrl}`}>
                <span>{showName}</span>
              </Link>
              <time>{showDateforLists}</time>
            </div>
            <ul className="flex text-xs pt-[3px] pb-[17px] ">
              {showTags.map((tag, index) => (
                <React.Fragment key={index}>
                  <li>{tag}</li>
                  {index !== showTags.length - 1 && <li>&nbsp;///&nbsp;</li>}
                </React.Fragment>
              ))}
            </ul>
            <hr className="border-black w-[719px] " />
          </>
        )
      )}
    </article>
  );
};

export default RelatedShows;
