import Image from "next/image";

import LogoImage from "../../../public/images/oz-green-star-logo.svg"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Logo() {

    const [width, setWidth] = useState(0);

    const updateWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      updateWidth();
    }, []);
    
    return (
        <Link href="/" className="ozgs-header__logo">
            <Image src={LogoImage} alt="logo" width={width < 1024 ? "200" : "300"}
            height={100} />
        </Link>
    )
}