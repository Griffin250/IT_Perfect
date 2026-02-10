import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../../../assets/IT_Perfect_Logo.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={LogoImage}
        width={200}
        height={100}
        alt="IT Perfect Logo"
        className={` cursor-pointer w-24 h-24 dark:invert ${className}`}
      />
    </Link>
  );
}
