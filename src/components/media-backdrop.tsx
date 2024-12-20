import { ComponentProps } from "react";
import Image from "next/image";
import { BackdropSize, tmdbImage } from "@/tmdb/utils";
import { Popcorn } from "lucide-react";

import { cn } from "@/lib/utils"

interface MediaBackdropProps extends ComponentProps<"div"> {
  image?: string
  size?: BackdropSize
  alt: string
  priority?: boolean
}

export const MediaBackdrop: React.FC<MediaBackdropProps> = ({
  image,
  size = "original",
  alt,
  className,
  priority,
  ...props
}) => {
  const src = image ? tmdbImage.backdrop(image, size) : null

  if (!src) {
    return (
      <div
        className={cn(
          "bg-muted text-muted-foreground size-full rounded-md border",
          className
        )}
        {...props}
      >
        <div className="grid size-full place-items-center">
          <Popcorn className="size-12" />
        </div>
      </div>
    )
  }

  return (
    <Image
      className={cn(
        "bg-muted size-full rounded-md border object-cover",
        className
      )}
      src={src}
      alt={alt}
      priority={priority}
      unoptimized
      fill
    />
  )
}
