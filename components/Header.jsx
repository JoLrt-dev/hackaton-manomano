import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoManoMano from "../public/Img/LogoManoMano.png";

export default function Header() {
  return (
    <div className="bg-red">
      <Link href="/">
        <a className="flex justify-center md:justify-end bg-red">
          <Image src={LogoManoMano} alt="Logo" width="50px" height="50px" />
        </a>
      </Link>
      <a className="text-blue">COUCOU</a>
    </div>
  );
}
