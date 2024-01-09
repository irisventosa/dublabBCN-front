"use client";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { formatAndSortRelatedShowsInfo } from "@/app/lib/processSlug";
/* eslint-disable react/jsx-no-comment-textnodes */
import { ApiProfile, RadioApiShow } from "@/app/types";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface RelatedShowsProps {
  shows: RadioApiShow[];
}

const RelatedShows = ({ shows }: RelatedShowsProps) => {
  const { getProfileData } = useDublabApi();

  const formattedShows = formatAndSortRelatedShowsInfo(shows);

  const { data: profileData } = useSWR<ApiProfile>(
    formattedShows[0].showName,
    getProfileData
  );

  if (!profileData) return <div>Loading...</div>;

  return (
    <article>
      {formattedShows.map(
        ({ showName, showDateForList, showDateForUrl, showTags }) => (
          <>
            <div className="flex justify-between mt-[17px]">
              <Link href={`/shows/${showDateForUrl}`}>
                <span>
                  {showName === "macGuffin-20" ? "Macguffin 2.0" : showName}
                </span>
              </Link>
              <time>
                {showDateForList.length === 11
                  ? showDateForList.substring(3)
                  : showDateForList}
              </time>
            </div>
            <ul className="flex text-xs pt-[3px] pb-[17px] ">
              {(showTags || (profileData && profileData.tags)).map(
                (tag, index, array) => (
                  <>
                    <li>{tag}</li>
                    {index !== array.length - 1 && <li>&nbsp;///&nbsp;</li>}
                  </>
                )
              )}
            </ul>
            <hr className="border-black w-[719px] " />
          </>
        )
      )}
    </article>
  );
};

export default RelatedShows;
