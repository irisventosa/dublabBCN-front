/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { formatSlugToGetShowName } from "@/app/lib/processSlug";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Tags from "./Tag";

interface Profile {
  host?: string;
  picture: string;
  tags: string[];
  slug: string;
  description: string;
}

interface ProfileCardMobileProps {
  profile: Profile;
  listPosition?: number;
  height: string;
}

const ProfileCardMobile = ({
  profile: { host, picture, tags, slug },
  height,
}: ProfileCardMobileProps): React.ReactElement => {
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

  return (
    <article className={`w-[353px] h-[${height}px] relative leading-[120%]`}>
      <Link className="text-base z-10" href={`/${dynamicPath}/${slug}`}>
        <div className="block group relative">
          <div className="group relative brightness-75">
            {picture && (
              <Image
                src={picture}
                alt={`Imatge del programa ${slug}`}
                height={300}
                width={253}
                className="overflow-hidden sm:h-auto h-[280px]  w-[353px] relative  object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMM971fDwAEigIECrXFHQAAAABJRU5ErkJggg=="
              />
            )}
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white ">
            <h1 className="text-[1.375rem]">{showName}</h1>
            {host && <span className="text-sm">Hosted by {host}</span>}
          </div>
        </div>
        <Tags tags={tags} isShows={isShows} />
      </Link>
    </article>
  );
};
export default ProfileCardMobile;
