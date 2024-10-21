export default function Header({ title, subTitle }: { title: string, subTitle?: string }) {
	return (
		<header>
			<h2 className="text-3xl font-bold">
				{title}
			</h2>
			{subTitle && <p className="pt-2">
				{subTitle}
			</p>}
		</header>
	)
}