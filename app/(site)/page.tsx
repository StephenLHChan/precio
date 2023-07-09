import AuthForm from './components/AuthForm';

const Home = () => {
	return (
		<div
			className="
                felx
                min-h-full
                flex-col
                justify-center
                py-12
                sm:px-6
                lg:px-8
                bg-gray-100
            ">
			<div
				className="
                    sm:mx-auto
                    sm:w-full
                    sm:max-x-md
                ">
				<h2
					className="
                        mt-6
                        text-center
                        text-3xl
                        font-bold
                        tracking-tight
                        text-grey-900
                        ">
					Sign in to your acount
				</h2>
			</div>
			<div>
				<AuthForm />
			</div>
		</div>
	);
};
export default Home;
