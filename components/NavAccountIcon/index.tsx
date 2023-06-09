"use client";
import { useSession } from "next-auth/react";
import SignInIcon32 from "@assets/SignInIcon32.png";
import AccountIcon from "@assets/AccountIcon.png";
import Link from "next/link";
import Image from "next/image";

const NavAccountIcon = () => {
  const { data: session } = useSession();

  return !!session?.user ? (
    <Link href="/dashboard">
      <Image src={AccountIcon} width={32} height={32} alt="AccountIcon" />
    </Link>
  ) : (
    <Link href="/auth/signin">
      <Image src={SignInIcon32} width={32} height={32} alt="SignInIcon" />
    </Link>
  );
};

export default NavAccountIcon;
