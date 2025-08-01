import './globals.css'
import '@/styles/index.scss'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import SiteHeader from './SiteHeader'

export const metadata = {
	title: 'Peer Information Website',
	description: 'Certified Recovery Peer Advocate and Recovery Coach, Resources, Job Information, Training',
}

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={poppins.className}>
			<body className="">
				<div className="bg-[#278ab0] text-base text-blue-900 dark:bg-neutral-900/95 light:text-neutral-200">
					<SiteHeader />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
