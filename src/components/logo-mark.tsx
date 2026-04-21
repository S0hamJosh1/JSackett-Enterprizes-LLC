import Image from "next/image"
import { cn } from "@/lib/utils"

type LogoMarkProps = {
  className?: string
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <Image
      src="/jse-logo-clean.png"
      alt=""
      aria-hidden="true"
      width={1682}
      height={1081}
      sizes="(max-width: 640px) 78px, 94px"
      className={cn("h-auto w-[90px] object-contain", className)}
      priority
    />
  )
}
