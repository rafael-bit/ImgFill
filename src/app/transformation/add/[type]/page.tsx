import Header from "@/app/components/Header";
import TransformationForm from "@/app/components/TransformationForm";
import { transformationTypes } from "@/app/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function update({ params: { type } }: SearchParamProps) {
	const { userId } = auth();
	const transformation = transformationTypes[type];

	if (!userId) redirect('/sign-in')

	const user = await getUserById(userId);

	return (
		<div className="p-7 mt-1">
			<Header
				title={transformation.title}
				subTitle={transformation.subTitle}
			/>
			<section className="mt-10">
				<TransformationForm
					action="Add"
					userId={user._id}
					type={transformation.type as TransformationTypeKey}
					creditBalance={user.creditBalance}
				/>
			</section>
		</div>
	)
}