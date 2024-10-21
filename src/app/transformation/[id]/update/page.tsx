import { auth } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

import Header from "@/app/components/Header";
import TransformationForm from "@/app/components/TransformationForm";
import { transformationTypes } from "@/app/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { getImageById } from "@/lib/actions/image.actions";

export default async function Update ({ params: { id } }: SearchParamProps) {
	const { userId } = auth();

	if (!userId) redirect("/sign-in");

	const user = await getUserById(userId);
	const image = await getImageById(id);

	const transformation =
		transformationTypes[image.transformationType as TransformationTypeKey];

	return (
		<div>
			<Header title={transformation.title} subTitle={transformation.subTitle} />

			<section className="mt-10">
				<TransformationForm
					action="Update"
					userId={user._id}
					type={image.transformationType as TransformationTypeKey}
					creditBalance={user.creditBalance}
					config={image.config}
					data={image}
				/>
			</section>
		</div>
	);
};