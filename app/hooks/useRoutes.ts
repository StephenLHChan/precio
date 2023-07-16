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
				href: '/home/scan',
				icon: BsUpcScan,
				active: pathname === '/home/scan',
			},
			{
				label: 'Search',
				href: '/home/search',
				icon: BiSearchAlt,
				active: pathname === '/home/search',
			},
		],
		[pathname]
	);

	return routes;
};

export default useRoutes;
