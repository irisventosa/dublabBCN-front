/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import descriptionFormatting from "@/app/lib/descriptionFormatting";
import { formatSlugToGetShowName } from "@/app/lib/processSlug";
import Image from "next/image";
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
  const dynamicPath = pathname === "/b-sides" ? "b-sides" : "shows";
  const isShows = dynamicPath === "shows";

  const showName = formatSlugToGetShowName(slug);
  const formatedDescription = descriptionFormatting(description);

  const [backgroundColor, setBackgroundColor] = useState("white");
  const changeBackgroundPath = "/b-sides";

  useEffect(() => {
    setBackgroundColor(pathname === changeBackgroundPath ? "black" : "white");
  }, [pathname]);

  return (
    <article className={`w-[353px] h-[${height}px] relative leading-[120%]`}>
      <div className="block group relative">
        <div className="group relative brightness-75 hover:brightness-100  ">
          {picture && (
            <Image
              src={picture}
              alt={`Imatge del programa ${slug}`}
              height={300}
              width={253}
              className="overflow-hidden sm:h-auto h-[280px]  w-[353px] relative transition duration-300 ease-in-out group-hover:opacity-0 object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMM971fDwAEigIECrXFHQAAAABJRU5ErkJggg=="
            />
          )}
          <div
            className={`absolute inset-0 bg-${backgroundColor} bg-opacity-70 transition duration-300 ease-in-out opacity-0  group-hover:opacity-100`}
          >
            <div className="flex flex-col justify-center items-start gap-6 max-w-[320px] ">
              <p className="text-base mt-2">{formatedDescription}</p>
              <Link className="text-base z-10" href={`/${dynamicPath}/${slug}`}>
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 p-4 text-white opacity-100 group-hover:opacity-0 ">
          <h1 className="text-[1.375rem]">{showName}</h1>
          {host && <span className="text-sm">Hosted by {host}</span>}
        </div>
      </div>
      <Tags tags={tags} isShows={isShows} />
    </article>
  );
};
export default ProfileCard;
