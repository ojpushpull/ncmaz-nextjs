'use client'

import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import {
	CurrencyDollarIcon,
	CurrencyBangladeshiIcon,
	CurrencyEuroIcon,
	CurrencyPoundIcon,
	CurrencyRupeeIcon,
} from '@heroicons/react/24/outline'
import { FC, Fragment } from 'react'

export const headerCurrency = [
	{
		id: 'EUR',
		name: 'EUR',
		href: '##',
		icon: CurrencyEuroIcon,
		active: true,
	},
	{
		id: 'USD',
		name: 'USD',
		href: '##',
		icon: CurrencyDollarIcon,
	},
	{
		id: 'GBF',
		name: 'GBF',
		href: '##',
		icon: CurrencyBangladeshiIcon,
	},
	{
		id: 'SAR',
		name: 'SAR',
		href: '##',
		icon: CurrencyPoundIcon,
	},
	{
		id: 'QAR',
		name: 'QAR',
		href: '##',
		icon: CurrencyRupeeIcon,
	},
	{
		id: 'BAD',
		name: 'BAD',
		href: '##',
		icon: CurrencyBangladeshiIcon,
	},
]

export const headerLanguage = [
	{
		id: 'English',
		name: 'English',
		description: 'United State',
		href: '##',
		active: true,
	},
	{
		id: 'Vietnamese',
		name: 'Vietnamese',
		description: 'Vietnamese',
		href: '##',
	},
	{
		id: 'Francais',
		name: 'Francais',
		description: 'Belgique',
		href: '##',
	},
	{
		id: 'Francais',
		name: 'Francais',
		description: 'Canada',
		href: '##',
	},
	{
		id: 'Francais',
		name: 'Francais',
		description: 'Belgique',
		href: '##',
	},
	{
		id: 'Francais',
		name: 'Francais',
		description: 'Canada',
		href: '##',
	},
]

interface LangDropdownProps {
	panelClassName?: string
}

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

const LangDropdown: FC<LangDropdownProps> = ({ panelClassName = '' }) => {
	const renderLang = (close: () => void) => {
		return (
			<div className="grid gap-8 lg:grid-cols-2">
				{headerLanguage.map((item, index) => (
					<a
						key={index}
						href={item.href}
						onClick={() => close()}
						className={`-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-gray-700 ${
							item.active ? 'bg-gray-100 dark:bg-gray-700' : 'opacity-80'
						}`}
					>
						<div className="">
							<p className="text-sm font-medium">{item.name}</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								{item.description}
							</p>
						</div>
					</a>
				))}
			</div>
		)
	}

	const renderCurr = (close: () => void) => {
		return (
			<div className="grid gap-7 lg:grid-cols-2">
				{headerCurrency.map((item, index) => (
					<a
						key={index}
						href={item.href}
						onClick={() => close()}
						className={`-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-gray-700 ${
							item.active ? 'bg-gray-100 dark:bg-gray-700' : 'opacity-80'
						}`}
					>
						<item.icon className="h-[18px] w-[18px]" />
						<p className="ms-2 text-sm font-medium">{item.name}</p>
					</a>
				))}
			</div>
		)
	}

	return (
		<div className="LangDropdown hidden md:block">
			<Popover className="relative">
				{({ open, close }) => (
					<>
						<PopoverButton
							className={` ${open ? '' : 'text-opacity-80'} group inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-gray-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-neutral-200 sm:h-12`}
						>
							<GlobeAltIcon className="h-[18px] w-[18px] opacity-80" />
							<span className="ms-2">Language</span>
							<ChevronDownIcon
								className={`${open ? '-rotate-180' : 'text-opacity-70'} ms-1 h-4 w-4 transition duration-150 ease-in-out group-hover:text-opacity-80`}
								aria-hidden="true"
							/>
						</PopoverButton>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<PopoverPanel
								className={`absolute end-0 z-20 mt-3.5 w-96 ${panelClassName}`}
							>
								<div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-800">
									<TabGroup>
										<TabList className="flex space-x-1 rounded-full bg-gray-100 p-1 dark:bg-slate-700">
											{['Language', 'Currency'].map((category) => (
												<Tab
													key={category}
													className={({ selected }) =>
														classNames(
															'w-full rounded-full py-2 text-sm font-medium leading-5 text-gray-700',
															'focus:outline-none focus:ring-0',
															selected
																? 'bg-white shadow'
																: 'text-gray-700 hover:bg-white/70 dark:text-slate-300 dark:hover:bg-slate-900/40',
														)
													}
												>
													{category}
												</Tab>
											))}
										</TabList>
										<TabPanels className="mt-5">
											<TabPanel
												className={classNames(
													'rounded-xl p-3',
													'focus:outline-none focus:ring-0',
												)}
											>
												{renderLang(close)}
											</TabPanel>
											<TabPanel
												className={classNames(
													'rounded-xl p-3',
													'focus:outline-none focus:ring-0',
												)}
											>
												{renderCurr(close)}
											</TabPanel>
										</TabPanels>
									</TabGroup>
								</div>
							</PopoverPanel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	)
}
export default LangDropdown
