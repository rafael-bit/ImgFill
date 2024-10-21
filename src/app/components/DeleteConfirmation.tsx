"use client";

import { useTransition } from "react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteImage } from "@/lib/actions/image.actions";

import { Button } from "@/components/ui/button";

export default function DeleteConfirmation ({ imageId }: { imageId: string }) {
	const [isPending, startTransition] = useTransition();

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild className="w-full rounded-full">
				<Button
					type="button"
					className="button h-12 w-full"
					variant="destructive"
				>
					Delete Image
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className="flex flex-col gap-10">
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you sure you want to delete this image?
					</AlertDialogTitle>
					<AlertDialogDescription className="p-16-regular">
						This will permanently delete this image
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						className="border bg-red-500 text-white hover:bg-red-600"
						onClick={() =>
							startTransition(async () => {
								await deleteImage(imageId);
							})
						}
					>
						{isPending ? "Deleting..." : "Delete"}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};