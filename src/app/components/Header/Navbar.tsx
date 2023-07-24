"use client";

import React from "react";
import Image from "next/image";
import IconMenu from "@/assets/icons/icon_menu.svg";
import IconMemo from "@/assets/icons/icon_memo.svg";
import IconInfo from "@/assets/icons/icon_info.svg";
import IconCerticate from "@/assets/icons/certicate.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clx from "classnames";

function Navbar() {
  const asPath = usePathname();

  return (
    <div className="flex">
      <ul className="flex flex-row space-x-8 p-0">
        <li>
          <Link
            className={clx(
              "hover:text-primary-400/[.8] flex text-sm items-center",
              asPath === "/recommand"
                ? "text-primary-400 p-2 lg:p-5"
                : "text-white"
            )}
            href="/自分の記録"
          >
            <Image
              src={IconMemo}
              style={{ width: 32, height: 32 }}
              alt="icon-memo"
              className="mr-2"
            />{" "}
            自分の記録
          </Link>
        </li>
        <li>
          <Link
            className={clx(
              "hover:text-primary-400/[.8] flex text-sm items-center",
              asPath === "/certicate"
                ? "text-moon-400 p-2 lg:p-5 border-b-2"
                : "text-white"
            )}
            href="/チャレンジ"
          >
            <Image
              src={IconCerticate}
              style={{ width: 32, height: 32 }}
              alt="icon-certicate"
              className="mr-2"
            />{" "}
            チャレンジ
          </Link>
        </li>
        <li>
          <Link
            className={clx(
              "hover:text-primary-400/[.8] flex text-sm items-center",
              asPath === "/recommend"
                ? "text-moon-400 p-2 lg:p-5 border-b-2"
                : "text-white"
            )}
            href="/recommend"
          >
            <Image
              src={IconInfo}
              style={{ width: 32, height: 32 }}
              alt="icon-info"
              className="mr-2"
            />{" "}
            お知らせ
          </Link>
        </li>
      </ul>
      <div className="ml-20 hover:cursor-pointer">
        <Image
          src={IconMenu}
          style={{ width: 32, height: 32 }}
          alt="icon-menu"
        />
      </div>
    </div>
  );
}

export default Navbar;
