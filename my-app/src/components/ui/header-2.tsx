'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { useRouter, usePathname } from 'next/navigation';
import { useIntakeFormSafe } from '@/app/context/IntakeFormContext';
import { GetStartedButton } from '@/components/ui/get-started-button';
import {
	ConnectButton,
	useAutoConnect,
} from 'thirdweb/react';
import { client } from '@/app/helper/client';
import { createWallet, inAppWallet } from 'thirdweb/wallets';
import { RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

const wallets = [
	inAppWallet(),
	createWallet('io.metamask'),
	createWallet('com.coinbase.wallet'),
	createWallet('me.rainbow'),
];

interface NavigationProps {
	scrollToSection?: (sectionId: string) => void;
	refSection1?: RefObject<HTMLDivElement>;
	refSection2?: RefObject<HTMLDivElement>;
	refSection3?: RefObject<HTMLDivElement>;
	refSection4?: RefObject<HTMLDivElement>;
	textColor?: boolean;
	customLinks?: Array<{
		label: string;
		onClick: () => void;
	}>;
}

export default function Navigation({
	scrollToSection,
	customLinks,
}: NavigationProps) {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);
	const router = useRouter();
	const pathname = usePathname();
	const intakeForm = useIntakeFormSafe();

	useAutoConnect({ client, wallets });

	const handleGetStarted = React.useCallback(() => {
		if (intakeForm) {
			intakeForm.openIntakeForm();
		} else {
			router.push('/contact');
		}
	}, [intakeForm, router]);

	const handleNavigation = (sectionId: string) => {
		if (pathname !== '/') {
			router.push(`/#${sectionId}`);
			setTimeout(() => {
				const element = document.getElementById(sectionId);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		} else if (scrollToSection) {
			scrollToSection(sectionId);
		}
	};

	const mobileNavClick = (sectionId: string) => {
		handleNavigation(sectionId);
		setOpen(false);
	};

	const defaultLinks = [
		{ label: 'Home', sectionId: 'home' },
		{ label: 'About Us', sectionId: 'about' },
		{ label: 'Projects', sectionId: 'projects' },
	];

	// Body scroll lock + ESC-to-close while the sheet is open
	React.useEffect(() => {
		if (!open) {
			document.body.style.overflow = '';
			return;
		}
		document.body.style.overflow = 'hidden';
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
					{
						'md:px-2': scrolled,
					},
				)}
			>
				<button
					onClick={() => router.push('/')}
					className="text-xl font-medium tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
				>
					OnCode
				</button>

				<div className="hidden items-center gap-2 md:flex">
					{customLinks
						? customLinks.map((link, i) => (
								<button
									key={i}
									className={buttonVariants({ variant: 'ghost' })}
									onClick={link.onClick}
								>
									{link.label}
								</button>
							))
						: defaultLinks.map((link, i) => (
								<button
									key={i}
									className={buttonVariants({ variant: 'ghost' })}
									onClick={() => handleNavigation(link.sectionId)}
								>
									{link.label}
								</button>
							))}

					{/* Connect Wallet (desktop) - hidden, not needed for current marketing site
					<div className="connect-wallet-wrapper border-l border-border pl-2 flex items-center">
						<ConnectButton
							client={client}
							wallets={wallets}
							theme="light"
							connectButton={{
								label: 'Connect Wallet',
								className:
									'!bg-transparent !border !border-input !rounded-md !px-4 !py-2 !text-sm !font-medium hover:!bg-accent hover:!text-accent-foreground !transition-colors !h-10',
							}}
							appMetadata={{
								name: 'OnCode',
								url: 'https://oncode.com',
							}}
						/>
					</div>
					*/}

				<GetStartedButton onClick={handleGetStarted} />
			</div>

			<Button
					size="icon"
					variant="ghost"
					onClick={() => setOpen(!open)}
					aria-label={open ? 'Close menu' : 'Open menu'}
					aria-expanded={open}
					className="md:hidden h-11 w-11 rounded-full hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-foreground/20"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			{/* Mobile sheet - refined editorial layout, glass overlay, smooth open/close */}
			<AnimatePresence>
				{open && (
					<motion.div
						key="mobile-sheet"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.18, ease: 'easeOut' }}
						className="fixed inset-x-0 top-14 bottom-0 z-40 bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-xl md:hidden"
					>
						<motion.div
							initial={{ y: -12, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -8, opacity: 0 }}
							transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
							className="flex h-full w-full flex-col"
						>
							{/* Small label / wayfinder */}
							<div className="px-6 pt-8 pb-4">
								<p className="text-[10px] uppercase tracking-[0.18em] text-foreground/40">
									Menu
								</p>
							</div>

							{/* Nav items - editorial list with index numerals */}
							<nav className="flex-1 overflow-y-auto px-6">
								<ul className="flex flex-col">
									{customLinks
										? customLinks.map((link, i) => (
												<li
													key={link.label}
													className="border-t border-border last:border-b"
												>
													<button
														onClick={() => {
															link.onClick();
															setOpen(false);
														}}
														className="group flex w-full items-baseline justify-between py-6 text-left transition-opacity hover:opacity-60 focus-visible:opacity-60 focus-visible:outline-none cursor-pointer"
													>
														<span className="flex items-baseline gap-5">
															<span className="text-[10px] font-medium tabular-nums tracking-[0.12em] text-foreground/40">
																{String(i + 1).padStart(2, '0')}
															</span>
															<span className="text-3xl font-light tracking-tight">
																{link.label}
															</span>
														</span>
														<ArrowUpRight className="size-5 text-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
													</button>
												</li>
											))
										: defaultLinks.map((link, i) => (
												<li
													key={link.label}
													className="border-t border-border last:border-b"
												>
													<button
														onClick={() => mobileNavClick(link.sectionId)}
														className="group flex w-full items-baseline justify-between py-6 text-left transition-opacity hover:opacity-60 focus-visible:opacity-60 focus-visible:outline-none cursor-pointer"
													>
														<span className="flex items-baseline gap-5">
															<span className="text-[10px] font-medium tabular-nums tracking-[0.12em] text-foreground/40">
																{String(i + 1).padStart(2, '0')}
															</span>
															<span className="text-3xl font-light tracking-tight">
																{link.label}
															</span>
														</span>
														<ArrowUpRight className="size-5 text-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
													</button>
												</li>
											))}
								</ul>
							</nav>

							{/* Connect Wallet (mobile) - hidden, not needed for current marketing site
							<div className="connect-wallet-wrapper">
								<ConnectButton
									client={client}
									wallets={wallets}
									theme="light"
									connectButton={{
										label: 'Connect Wallet',
										className:
											'!w-full !bg-transparent !border !border-input !rounded-md !px-4 !py-2 !text-sm !font-medium hover:!bg-accent hover:!text-accent-foreground !transition-colors !h-10',
									}}
									appMetadata={{
										name: 'OnCode',
										url: 'https://oncode.com',
									}}
								/>
							</div>
							*/}

							{/* Footer - primary CTA, contact, fine print */}
							<div className="px-6 pt-6 pb-10 space-y-6">
								<GetStartedButton
									onClick={() => {
										handleGetStarted();
										setOpen(false);
									}}
								/>
								<div className="flex items-center justify-between text-[11px] text-foreground/50">
									<a
										href="mailto:oncodesoftware@gmail.com"
										className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
									>
										<Mail className="size-3.5" />
										oncodesoftware@gmail.com
									</a>
									<span className="tabular-nums tracking-wider">© OnCode</span>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
