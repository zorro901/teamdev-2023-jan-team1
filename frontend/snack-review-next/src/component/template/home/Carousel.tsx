import Image from "next/image";
import Link from "next/link";
import type { ArticlesType } from "@/lib/zodSchema";
import type { FC } from "react";
import { CardInfo } from "@/component/atoms/card/CardInfo";
import { articlePath } from "@/constants/routes";

type Props = {
  popularArticles: ArticlesType["popularArticles"];
};

export const Carousel: FC<Props> = ({ popularArticles }) => {
  return (
    <div className="carousel-center carousel h-72 max-w-xl space-x-6">
      <div className="pl-10" />
      {popularArticles.map((article) => {
        const { id, title, imageUrl } = article;

        return (
          <Link href={articlePath(id.toString())} key={article.id} className="carousel-item">
            <div className="relative">
              <Image
                priority
                src={imageUrl || "/no-image-carousel.png"}
                width={320}
                height={208}
                alt={title}
                className="h-52 w-80 rounded-3xl object-cover"
              />

              <div className="absolute top-32 mx-6 flex flex-col gap-1 rounded-3xl bg-white px-4 py-3 shadow-md">
                <CardInfo {...article} />
              </div>
            </div>
          </Link>
        );
      })}
      <div className="pr-10" />
    </div>
  );
};
