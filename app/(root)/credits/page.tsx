import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/Checkout";

export default async function Credits () {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-9 xl:grid-cols-3 mr-10">
          {plans.map((plan) => (
            <li key={plan.name} className="w-full rounded-md border bg-white p-8 shadow-md lg:max-w-none">
              <div className="flex-center flex-col gap-2">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="p-5 mt-2 text-gray-800">
                  {plan.name}
                </p>
                <p className="text-2xl font-bold text-dark-600">${plan.price}</p>
                <p className="p-16-regular">{plan.credits}Credits</p>
              </div>

              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/icons/${inclusion.isIncluded ? "check.svg" : "cross.svg"
                        }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p>{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Button variant="outline" className="credits-btn">
                  Free Consumable
                </Button>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                  />
                </SignedIn>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};