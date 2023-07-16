import Link from 'next/link';

interface CardProps {
	label: string;
	icon: any;
	href: string;
}

const Card: React.FC<CardProps> = ({ label, icon: Icon, href }) => {
	return (
		<div
			className="
                mx-4
                my-4
                w-40
                h-40
                border
                rounded-lg
                shadow
                text-gray-700
                hover:text-black 
                bg-white
            "
		>
			<Link
				href={href}
				className="
                    px-4 
                    py-4 
                    h-full 
                    flex 
                    justify-center 
                    items-center  
                "
			>
				<Icon className="h-20 w-20 shrink-0" aria-hidden="true" />
				<h3 className="hidden">{label}</h3>
			</Link>
		</div>
	);
};

export default Card;
