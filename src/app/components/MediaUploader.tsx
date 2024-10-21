"use client";

import { useToast } from "@/hooks/use-toast";
import { dataUrl, getImageSize } from "@/lib/utils";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderProps = {
	onValueChange: (value: string) => void;
	setImage: React.Dispatch<any>;
	publicId: string;
	image: any;
	type: string;
}

export default function MediaUploader({
	onValueChange,
	setImage,
	image,
	publicId,
	type,
}: MediaUploaderProps) {
	const { toast } = useToast();

	const onUploadSuccessHandler = (result: any) => {
		setImage((prevState: any) => ({
			...prevState,
			publicId: result?.info?.public_id,
			width: result?.info?.width,
			height: result?.info?.height,
			secureURL: result?.info?.secure_url,
		}));

		onValueChange(result?.info?.public_id);

		toast({
			title: "Image uploaded successfully",
			description: "1 credit was deducted from your account",
			duration: 5000,
			className: "success-toast",
		});
	};

	const onUploadErrorHandler = () => {
		toast({
			title: "Something went wrong while uploading",
			description: "Please try again",
			duration: 5000,
			className: "error-toast",
		});
	};

	return (
		<CldUploadWidget
			uploadPreset="Rafael"
			options={{
				multiple: false,
				resourceType: "image",
			}}
			onSuccess={onUploadSuccessHandler}
			onError={onUploadErrorHandler}
		>
			{({ open }) => (
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl font-bold text-dark-600">Original</h2>

					{publicId ? (
						<>
							<div className="cursor-pointer overflow-hidden rounded-sm">
								<CldImage
									width={getImageSize(type, image, "width")}
									height={getImageSize(type, image, "height")}
									src={publicId}
									alt="image"
									sizes="(max-width: 767px) 100vw, 50vw"
									placeholder={dataUrl as PlaceholderValue}
									className="media-uploader_cldImage"
								/>
							</div>
						</>
					) : (
							<div className="flex items-center justify-center h-72 cursor-pointer flex-col gap-5 rounded-[16px] border border-dashed bg-gray-100/20 shadow-inner" onClick={() => open()}>
								<div className="rounded-sm bg-white  p-5 shadow-sm shadow-gray-200/50">
								<Image
									src="/icons/add.svg"
									alt="Add Image"
									width={24}
									height={24}
								/>
							</div>
							<p className="p-14">Click here to upload image</p>
						</div>
					)}
				</div>
			)}
		</CldUploadWidget>
	);
}