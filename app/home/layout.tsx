import Sidebar from '../components/sidebar/Sidebar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Sidebar>
			<div className="h-full">{children}</div>
		</Sidebar>
	);
};

export default HomeLayout;
