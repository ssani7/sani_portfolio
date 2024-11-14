import emailjs from '@emailjs/browser';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useScrollContext } from '../ScrollContext';

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const contactRef = useScrollContext();

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data: FieldValues) => {
		setLoading(true);
		const from_email = data.from_email;
		const from_name = data.from_name;
		const to_email = 'sanaullah.sani756@gmail.com';
		const subject = data.subject;
		const message = data.message;

		const template = {
			from_email,
			from_name,
			to_email,
			to_name: 'Sanaullah Sani',
			message,
			subject,
		};

		try {
			const emailRes = await emailjs.send('google', 'template_xap02hr', template, 'Gk24mox0snUD7ToWx');
			if (emailRes.status === 200) toast.success('Sent email. You will get a response very soon');
			else toast.error(`${emailRes.status} Something went wrong.`);
		} catch (error) {
			toast.error(`${'Sorry. Could not set email. Please try again later'}`);
		} finally {
			// setLoading(false);
		}
	};

	const socials = [
		{
			title: 'sanaullah.sani756@gmail.com',
			icon: faAt,
			link: '#',
		},
		{
			title: 'sanaullah756',
			icon: faLinkedin,
			link: 'https://www.linkedin.com/in/sanaullah756',
		},
		{
			title: '@sanaullahsani07',
			icon: faTwitter,
			link: 'https://twitter.com/sanaullahsani07',
		},
		{
			title: 'Dhaka, Bangladesh',
			icon: faLocationDot,
			link: '#',
		},
	];

	return (
		<div ref={contactRef} className="pt-20">
			<h2 className="card-title text-3xl lg:text-4xl font-bold justify-center mb-4">Send Me an Email</h2>
			<div className="w-full flex flex-col-reverse xl:flex-row justify-center mb-36">
				<div className="my-5 flex flex-col justify-evenly gap-4 px-8">
					{socials.map((social, i) => (
						<a key={i} target="_blank" href={social.link} className="flex items-center gap-4">
							<FontAwesomeIcon className="h-7 my-3 xl:hover:text-primary xl:hover:scale-125 transition-all" icon={social.icon} />
							<p>{social.title}</p>
						</a>
					))}
				</div>
				<div className="card w-full md:w-3/5 lg:w-3/5">
					<div className="card-body xl:px-20">
						<form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
							<div className="flex flex-col xl:flex-row items-center gap-5">
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">Your Name</span>
									</label>
									<input type="text" className="input input-bordered shadow-md w-full text-base-content py-7 px-5" {...register('from_name', { required: 'Your name is required' })} />
									{errors.from_name && <span className="text-xs text-error text-center">{errors.from_name?.message as string}</span>}
								</div>
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">Your Email Adress</span>
									</label>
									<input type="email" className="input input-bordered shadow-md w-full text-base-content py-7 px-5" {...register('from_email', { required: 'Your email is required' })} />
									{errors.from_name && <span className="text-xs text-error text-center">{errors.from_name?.message as string}</span>}
								</div>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Subject</span>
								</label>
								<input type="text" className="input input-bordered shadow-md w-full py-7 px-5" {...register('subject', { required: 'Subject is required' })} />
								{errors.subject && <span className="text-xs text-error text-center">{errors.subject.message as string}</span>}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Your Message</span>
								</label>
								<textarea className="textarea textarea-bordered shadow-md h-40" {...register('message', { required: 'Please enter your message for the developer' })}></textarea>
								{errors.message && <span className="text-xs text-error text-center">{errors.message.message as string}</span>}
							</div>

							{loading ? (
								<button className="btn btn-primary mt-4 normal-case cursor-pointer">
									<span className="loading loading-spinner"></span>
									Sending Email
								</button>
							) : (
								<input className="btn btn-primary w-full mt-4 normal-case" type="submit" value="Send" />
							)}
						</form>
					</div>
				</div>

				<ToastContainer />
			</div>
		</div>
	);
};

export default Contact;
