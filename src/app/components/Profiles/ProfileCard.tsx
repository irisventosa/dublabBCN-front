/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import descriptionFormatting from "@/app/lib/descriptionFormatting";
import { formatSlugToGetShowName } from "@/app/lib/processSlug";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Tags from "./Tag";

interface Profile {
  host?: string;
  picture: string;
  tags: string[];
  slug: string;
  description: string;
}

interface ProfileCardProps {
  profile: Profile;
  listPosition?: number;
  height: string;
}

const ProfileCard = ({
  profile: { host, picture, tags, slug, description },
  height,
}: ProfileCardProps): React.ReactElement => {
  const pathname = usePathname();
  let dynamicPath;

  if (pathname === "/b-sides") {
    dynamicPath = "b-sides";
  } else if (pathname === "/shows") {
    dynamicPath = "shows";
  } else {
    dynamicPath = "arxiu";
  }

  const isShows = dynamicPath === "shows";

  const showName = formatSlugToGetShowName(slug);
  const formatedDescription = descriptionFormatting(description);

  const [backgroundColor, setBackgroundColor] = useState("white");
  const changeBackgroundPath = "/b-sides";

  useEffect(() => {
    setBackgroundColor(pathname === changeBackgroundPath ? "black" : "white");
  }, [pathname]);

  const defaultImage = picture ? picture : "/assets/default-arxiu.jpg";

  return (
    <article className={`w-[353px] h-[${height}] relative leading-[120%]`}>
      <div className="block group relative">
        <div className="group relative brightness-75 hover:brightness-100  ">
          <img
            src={defaultImage}
            alt={`Imatge del programa ${slug}`}
            className="overflow-hidden sm:h-auto h-[280px] w-[353px] relative transition duration-300 ease-in-out group-hover:opacity-0 object-cover"
          />
          <div
            className={`absolute inset-0 bg-${backgroundColor} bg-opacity-80 transition duration-300 ease-in-out opacity-0 px-4 group-hover:opacity-100`}
          >
            <div className="flex flex-col justify-center items-start gap-6 max-w-[320px] ">
              <p className="text-base mt-2">{formatedDescription}</p>
              <Link
                className="text-base h-4 z-10"
                href={`/${dynamicPath}/${slug}`}
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 p-4 text-white opacity-100 group-hover:hidden ">
          <h1 className="text-[1.375rem]">{showName}</h1>
          {host && <span className="text-sm">Hosted by {host}</span>}
        </div>
      </div>
      <Tags tags={tags} isShows={isShows} />
    </article>
  );
};
export default ProfileCard;
