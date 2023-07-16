'use client';

import useRoutes from '@/app/hooks/useRoutes';
import MobileItem from './MobileItem';
import { signOut } from 'next-auth/react';
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';

const MobileFooter = () => {
	const routes = useRoutes();

	return (
		<div
			className="
				fixed 
				justify-between 
				w-full 
				bottom-0 
				z-40 
				flex 
				items-center 
				bg-white 
				border-t-[1px] 
				lg:hidden
				"
		>
			{routes.map((route) => (
				<MobileItem
					key={route.href}
					href={route.href}
					active={route.active}
					icon={route.icon}
				/>
			))}
			<MobileItem
				href="#"
				icon={HiArrowLeftOnRectangle}
				onClick={() => signOut()}
			/>
		</div>
	);
};

export default MobileFooter;
