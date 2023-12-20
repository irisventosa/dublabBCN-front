/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import descriptionFormatting from "@/app/lib/descriptionFormatting";
import { formatSlugToGetShowName } from "@/app/lib/processSlug";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
}: ProfileCardProps): React.ReactElement => {
  const pathname = usePathname();
  const dynamicPath = pathname === "/b-sides" ? "b-sides" : "shows";

  const showName = formatSlugToGetShowName(slug);
  const formatedDescription = descriptionFormatting(description);

  const [backgroundColor, setBackgroundColor] = useState("white");
  const changeBackgroundPath = "/b-sides";

  useEffect(() => {
    setBackgroundColor(pathname === changeBackgroundPath ? "black" : "");
  }, [pathname]);

  return (
    <article className="w-[353px] h-[385px] relative overflow-hidden leading-[120%]">
      <div className="block group relative">
        <div className="group relative">
          {picture && (
            <Image
              src={picture}
              alt={`Imatge del programa ${slug}`}
              height={353}
              width={353}
              className="overflow-hidden h-[353px] w-[353px] relative transition duration-300 ease-in-out group-hover:opacity-0"
            />
          )}
          <div
            className={`absolute inset-0 bg-${backgroundColor} bg-opacity-50 transition duration-300 ease-in-out opacity-0  group-hover:opacity-100`}
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
      {tags && (
        <ul className="h-4 flex gap-[10px] text-[11px] flex-row p-4 absolute text">
          <li>{tags[0]} ///</li>
          <li>{tags[1]} ///</li>
          <li>{tags[2]} </li>
        </ul>
      )}
    </article>
  );
};
export default ProfileCard;
