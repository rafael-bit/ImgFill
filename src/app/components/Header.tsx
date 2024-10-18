export default function Header({ title, subTitle }: { title: string, subTitle?: string }) {
	return (
		<header className="p-16 mt-4">
			<h2 className="h2-bold">
				{title}
			</h2>
			{subTitle && <p className="">
				{subTitle}
			</p>}
		</header>
	)
}