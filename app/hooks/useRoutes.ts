import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { BsUpcScan } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';

const useRoutes = () => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{
				label: 'Scan',
				href: '/scan',
				icon: BsUpcScan,
				active: pathname === '/conversations',
			},
			{
				label: 'Users',
				href: '/users',
				icon: BiSearchAlt,
				active: pathname === '/users',
			},
		],
		[pathname]
	);

	return routes;
};

export default useRoutes;
