import getCurrentUser from '../actions/getCurrentUser';
import Card from './components/Card';
import { BsUpcScan } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';

const Home = async () => {
	const user = await getCurrentUser();

	return (
		<div className="lg:block h-full">
			<div
				className="
                px-4 
                py-10 
                sm:px-6 
                lg:px-8 
                h-full 
                flex 
                justify-center 
                items-center 
                bg-gray-100
             ">
				<div className="text-center items-center flex flex-col">
					<h3 className="mt-2 text-2xl font-semibold text-gray-900">
						Welcome back! {user?.name}
					</h3>
					<div
						className="
                        px-20
                        py-10
                        justify-between
                        items-center 
                        flex
                        w-full
                    ">
						<Card label="Scan" href="/home/scan" icon={BsUpcScan} />
						<Card label="Search" href="/home/search" icon={BiSearchAlt} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
