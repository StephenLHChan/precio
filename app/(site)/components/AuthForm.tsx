'use client';

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import { useState, useCallback } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
	const [variant, setVariant] = useState<Variant>('LOGIN');
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const toggleVariant = useCallback(() => {
		if (variant === 'LOGIN') {
			setVariant('REGISTER');
		} else {
			setVariant('LOGIN');
		}
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		if (variant === 'REGISTER') {
			// axios register
		}

		if (variant === 'LOGIN') {
			// NextAuth signin
		}
	};

	const socialAction = (action: string) => {
		setIsLoading(true);

		// NextAuth Social Sign In
	};

	return (
		<div
			className="
				mt-8
				sm:mx-auto
				sm:w-full
				sm:max-w-md
		">
			<div
				className="
					bg-white
					px-4
					py-8
					shadow
					sm:rounded-lg
					sm:px-10
			">
				<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
					{variant === 'REGISTER' && (
						<Input
							id="name"
							label="Name"
							register={register}
							errors={errors}
							disabled={isLoading}
						/>
					)}

					<Input
						id="email"
						label="Email Address"
						type="email"
						register={register}
						errors={errors}
						required
						disabled={isLoading}
					/>
					<Input
						id="password"
						label="Password"
						type="password"
						register={register}
						errors={errors}
						required
						disabled={isLoading}
					/>
					<div>
						<Button type="submit" fullWidth disabled={isLoading}>
							{variant === 'LOGIN' ? 'Sign in' : 'Register'}
						</Button>
					</div>
				</form>
				<div className="mt-6">
					<div className="relative">
						<div
							className="
								absolute
								inset-0
								flex
								items-center
						">
							<div className="w-full border-t border-gray-300" />
						</div>
						<div
							className="
								relative
								flex
								justify-center
								text-sm">
							<span className="bg-white px-2 text-gray-500">
								Or continue with
							</span>
						</div>
					</div>
					<div className="mt-6 flex gap-2">
						<AuthSocialButton
							icon={BsGoogle}
							onClick={() => socialAction('google')}
						/>
						<AuthSocialButton
							icon={BsInstagram}
							onClick={() => socialAction('instagram')}
						/>
						<AuthSocialButton
							icon={BsFacebook}
							onClick={() => socialAction('facebook')}
						/>
					</div>
				</div>
				<div
					className="
						flex
						gap-2
						justify-center
						text-sm
						mt-6
						px-2
						text-gray-500
				">
					<div>
						{variant === 'LOGIN'
							? 'New to Precio?'
							: 'Already have an account?'}
					</div>
					<div onClick={toggleVariant} className="underline cursor-pointer">
						{variant === 'LOGIN' ? 'Create an account' : 'Login'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
