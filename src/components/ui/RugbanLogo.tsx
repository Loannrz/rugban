import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const LOGO_SRC = "/logo-rugban.png";
const ASPECT = 427 / 302;

type RugbanLogoProps = {
  className?: string;
  height?: number;
  linkToHome?: boolean;
  priority?: boolean;
};

export function RugbanLogo({
  className,
  height = 36,
  linkToHome = false,
  priority = false,
}: RugbanLogoProps) {
  const width = Math.round(height * ASPECT);

  const image = (
    <Image
      src={LOGO_SRC}
      alt="Rugban - Rugby Urban Attitude"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
      style={{ height, width }}
    />
  );

  if (linkToHome) {
    return (
      <Link
        href="/"
        prefetch={false}
        className="inline-flex shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6b35]"
        aria-label="Rugban - accueil"
      >
        {image}
      </Link>
    );
  }

  return image;
}
