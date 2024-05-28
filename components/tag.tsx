"use client"

import Link from "next/link";
import { badgeVariants } from "./ui/badge";
import { usePathname, useSearchParams } from "next/navigation";
import { createPageURL } from "@/lib/utils";

interface TagProps {
  tag: string;
  count?: number;
  current?: boolean;
}
export function Tag({ tag, current, count }: TagProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag") || 'all';
  let currentPage = Number(searchParams.get("page")) || 1;
  if(currentTag !== tag) currentPage = 1;
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md",
      })}
      href={createPageURL(pathname, tag, currentPage)}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
