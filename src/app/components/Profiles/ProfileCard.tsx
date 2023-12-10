/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { ApiProfile } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProfileCardProps {
  profile: ApiProfile;
  listPosition?: number;
  height: string;
}

const ProfileCard = ({
  profile: { host, picture, tags, slug },
}: ProfileCardProps): React.ReactElement => {
  return (
    <article
      className={`w-[353px] h-[385px] relative overflow-hidden leading-[120%]`}
    >
      <Link href={`/shows/${slug}`}>
        <div>
          <Image
            src={picture}
            alt={`Imatge del programa ${slug}`}
            height={353}
            width={353}
            className="overflow-hidden h-[353px] w-[353px] relative "
          />
        </div>
        <ul className="flex flex-col absolute p-4 bottom-6 text-white">
          <li>
            <h2 className="text-[1.375rem] h-5">{slug}</h2>
          </li>
          <li className="h-[17px]">
            <span className="text-sm ">Hosted by {host}</span>
          </li>
        </ul>
        <ul className="h-4 flex gap-[10px] text-[11px] flex-row p-4 absolute text">
          <li>{tags[0]} ///</li>
          <li>{tags[1]} ///</li>
          <li>{tags[2]} </li>
        </ul>
      </Link>
    </article>
  );
};

export default ProfileCard;
