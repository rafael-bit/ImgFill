export const navLinks = [
	{
		label: "Home",
		route: "/",
		icon: "/icons/home.svg",
	},
	{
		label: "Image Restore",
		route: "/transformation/add/restore",
		icon: "/icons/image.svg",
	},
	{
		label: "Generative Fill",
		route: "/transformation/add/fill",
		icon: "/icons/stars.svg",
	},
	{
		label: "Object Remove",
		route: "/transformation/add/remove",
		icon: "/icons/scan.svg",
	},
	{
		label: "Object Recolor",
		route: "/transformation/add/recolor",
		icon: "/icons/filter.svg",
	},
	{
		label: "Background Remove",
		route: "/transformation/add/removeBackground",
		icon: "/icons/camera.svg",
	},
	{
		label: "Profile",
		route: "/profile",
		icon: "/icons/profile.svg",
	},
	{
		label: "Buy Credits",
		route: "/credits",
		icon: "/icons/bag.svg",
	},
];

export const plans = [
	{
		_id: 1,
		name: "Free",
		icon: "/icons/free-plan.svg",
		price: 0,
		credits: 20,
		inclusions: [
			{
				label: "20 Free Credits",
				isIncluded: true,
			},
			{
				label: "Basic Access to Services",
				isIncluded: true,
			},
			{
				label: "Priority Customer Support",
				isIncluded: false,
			},
			{
				label: "Priority Updates",
				isIncluded: false,
			},
		],
	},
	{
		_id: 2,
		name: "Pro Package",
		icon: "/icons/free-plan.svg",
		price: 40,
		credits: 120,
		inclusions: [
			{
				label: "120 Credits",
				isIncluded: true,
			},
			{
				label: "Full Access to Services",
				isIncluded: true,
			},
			{
				label: "Priority Customer Support",
				isIncluded: true,
			},
			{
				label: "Priority Updates",
				isIncluded: false,
			},
		],
	},
	{
		_id: 3,
		name: "Premium Package",
		icon: "/icons/free-plan.svg",
		price: 199,
		credits: 2000,
		inclusions: [
			{
				label: "2000 Credits",
				isIncluded: true,
			},
			{
				label: "Full Access to Services",
				isIncluded: true,
			},
			{
				label: "Priority Customer Support",
				isIncluded: true,
			},
			{
				label: "Priority Updates",
				isIncluded: true,
			},
		],
	},
];

export const transformationTypes = {
	restore: {
		type: "restore",
		title: "Restore Image",
		subTitle: "Enhance images by reducing noise and correcting flaws",
		config: { restore: true },
		icon: "image.svg",
	},
	removeBackground: {
		type: "removeBackground",
		title: "Background Remove",
		subTitle: "Uses AI to seamlessly remove the image background",
		config: { removeBackground: true },
		icon: "camera.svg",
	},
	fill: {
		type: "fill",
		title: "Generative Fill",
		subTitle: "Expand image dimensions through AI-powered outpainting",
		config: { fillBackground: true },
		icon: "stars.svg",
	},
	remove: {
		type: "remove",
		title: "Object Remove",
		subTitle: "Detect and erase unwanted elements from images",
		config: {
			remove: { prompt: "", removeShadow: true, multiple: true },
		},
		icon: "scan.svg",
	},
	recolor: {
		type: "recolor",
		title: "Object Recolor",
		subTitle: "Identify and change colors of objects within the image",
		config: {
			recolor: { prompt: "", to: "", multiple: true },
		},
		icon: "filter.svg",
	},
};

export const aspectRatioOptions = {
	"1:1": {
		aspectRatio: "1:1",
		label: "Square (1:1)",
		width: 1000,
		height: 1000,
	},
	"3:4": {
		aspectRatio: "3:4",
		label: "Standard Portrait (3:4)",
		width: 1000,
		height: 1334,
	},
	"9:16": {
		aspectRatio: "9:16",
		label: "Phone Portrait (9:16)",
		width: 1000,
		height: 1778,
	},
};

export const defaultValues = {
	title: "",
	aspectRatio: "",
	color: "",
	prompt: "",
	publicId: "",
};

export const creditFee = -1;