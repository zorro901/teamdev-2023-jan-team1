import Image from "next/image";
import type { ArticlesArrayType } from "@/lib/zodSchema";
import type { FC } from "react";
import { CardInfo } from "@/component/atoms/card/CardInfo";

type Props = {
  listTitle: string;
  articles: ArticlesArrayType;
};

export const CardList: FC<Props> = ({ listTitle, articles }) => {
  return (
    <>
      <h2 className="mb-4 font-bold">{listTitle}</h2>
      <div className="flex flex-col gap-2">
        {articles.map((article) => {
          const { id, title, imageUrl } = article;

          return (
            <div className="rounded-xl shadow-md">
              <div key={id} className="flex max-w-full flex-auto">
                <Image
                  src={imageUrl || "/no-image-card.png"}
                  width={112}
                  height={112}
                  alt={title}
                  className="h-28 w-28 shrink-0 rounded-l-xl object-cover"
                />
                <div className="flex flex-col gap-2 px-2">
                  <CardInfo {...article} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
