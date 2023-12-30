/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import extractUrlForEmbedPlayer from "@/app/lib/extractUrlForEmbedPlayer";
import { ApiProfile, RadioApiShow } from "@/app/types";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import useSWR from "swr";
import {
  extractDatesForCard,
  formatSlugToGetShowName,
} from "@/app/lib/processSlug";
import Link from "next/link";

interface ShowCardProps {
  show: RadioApiShow;
  listPosition?: number;
  height: string;
  onClickPlayback: (show: string) => void;
}

const dublabApi = "https://api.dublab.es";
const mixcloudEmbedUrl = "https://api.mixcloud.com/";

const ShowCard = ({
  show: { slug, mixcloud_url, tags, host, profile_picture },
  onClickPlayback,
}: ShowCardProps): React.ReactElement => {
  const { getProfileData } = useDublabApi();

  const showName = formatSlugToGetShowName(slug);
  const showDateforCard = extractDatesForCard(slug);

  const { data: profile } = useSWR<ApiProfile>(showName, getProfileData);

  const showUrl = extractUrlForEmbedPlayer(mixcloud_url);

  const handleShowPlayback = () => {
    onClickPlayback(showUrl!);
  };

  if (host === undefined || host === null) {
    host = profile?.host;
  }

  return (
    <article className={` h-[385px] relative overflow-hidden leading-[120%]`}>
      <div>
        <Image
          src={`${dublabApi}${profile_picture}`}
          alt={`Imatge del programa ${showName}`}
          height={353}
          width={353}
          className="overflow-hidden h-[353px] w-[353px] relative object-cover "
        />
        <Button
          className="absolute bottom-52 left-50 text-zinc-200"
          actionOnClick={handleShowPlayback}
        >
          {`${mixcloudEmbedUrl}${showUrl}embed-html/`}
        </Button>
      </div>
      <ul className="flex flex-col absolute p-4 bottom-6 text-white">
        <li className="mb-3 h-[14px]">
          <time className="text-[12px]">{showDateforCard}</time>
        </li>
        <li>
          <Link href={`/shows/${showName}`}>
            <h2 className="text-[1.375rem] h-5 max-w-[300px]">{showName}</h2>
          </Link>
        </li>
        <li className="h-[17px]">
          <span className="text-sm ">Hosted by {host}</span>
        </li>
      </ul>
      <ul className="h-4 flex gap-[10px] text-[11px] flex-row py-4 absolute text">
        {tags.map((tag, index, array) => (
          <>
            <li>{tag}</li>
            {index !== array.length - 1 && <li>&nbsp;///&nbsp;</li>}
          </>
        ))}
      </ul>
    </article>
  );
};

export default ShowCard;
