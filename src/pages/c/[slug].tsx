/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRouter } from "next/router";
import { api } from "../../utils/api";
import Head from "next/head";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import { type FC } from "react";

interface SlugProps {

}

const Slug: FC<SlugProps> = ({ }) => {
  const router = useRouter()
  const { slug } = router.query
  if (typeof slug !== "string") return null;

  const { data: card } = api.card.getCard.useQuery({ slug });

  return (
    <div
      className="absolute inset-0 grid place-items-center bg-gradient-to-br from-rose-500 to-purple-600"
    >
      <Head>
        <title>
          {card?.name} | {card?.title}
        </title>
      </Head>
      <BusinessCard card={card} />
    </div>
  )
}

export default Slug;