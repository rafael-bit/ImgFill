import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Collection } from "@/components/Collection";
import Header from "@/components/Header";
import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";

export default async function Profile({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id });

  return (
    <>
      <Header title="Profile" />

      <section className="profile">
        <div className="w-10/12 rounded-md border-2 border-gray-100 bg-white p-5 shadow-lg md:px-6 md:py-8">
          <p className="p-14-medium md:p-16-medium">Credits avaliable</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="text-4xl font-bold text-gray-800">{user.creditBalance}</h2>
          </div>
        </div>

        <div className="w-10/12 rounded-md border-2 border-gray-100 bg-white p-5 shadow-lg md:px-6 md:py-8 mr-10">
          <p className="p-14-medium md:p-16-medium">Image manipulation done</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/icons/photo.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="text-4xl font-bold text-gray-800">{images?.data.length}</h2>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-14">
        <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};