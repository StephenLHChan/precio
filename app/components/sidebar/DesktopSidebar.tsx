'use client';

import DesktopItem from './DesktopItem';
import useRoutes from '@/app/hooks/useRoutes';
import Avatar from './Avatar';
import { User } from '@prisma/client';
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';

interface DesktopSidebarProps {
	currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
	const routes = useRoutes();

	console.log({ currentUser }, 'TEST');

	return (
		<>
			<div
				className="
					hidden 
					lg:fixed 
					lg:inset-y-0 
					lg:left-0 
					lg:z-40 
					lg:w-20 
					xl:px-6
					lg:overflow-y-auto 
					lg:bg-white 
					lg:border-r-[1px]
					lg:pb-4
					lg:flex
					lg:flex-col
					justify-between
				">
				<nav className="mt-4 flex flex-col justify-between">
					<ul role="list" className="flex flex-col items-center space-y-1">
						{routes.map((item) => (
							<DesktopItem
								key={item.label}
								href={item.href}
								label={item.label}
								icon={item.icon}
								active={item.active}
							/>
						))}
					</ul>
				</nav>
				<nav className="mt-4 flex flex-col justify-between items-center">
					<div className="cursor-pointer hover:opacity-75 transition">
						<Avatar user={currentUser} />
					</div>
					<ul>
						<DesktopItem
							href="#"
							label="Logout"
							icon={HiArrowLeftOnRectangle}
							onClick={() => signOut()}
						/>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default DesktopSidebar;