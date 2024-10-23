import { Collection } from "@/components/Collection"
import { BlacknavLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"

export default async function Home ({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
      <section className="sm:flex-center hidden h-72 flex-col gap-4 rounded-lg border bg-banner bg-cover bg-no-repeat p-10 shadow-inner bg-gray-800 md:mr-5">
        <h1 className="text-5xl font-bold max-w-[500px] flex-wrap text-center text-white shadow-sm">
          Ignite Your Creative Vision with ImgFill
        </h1>
        <ul className="flex-center w-full gap-20">
          {BlacknavLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-7">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}