import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
			setLoading(false);
		}
	};

	return (
		<>
			<h2 className="card-title text-3xl lg:text-4xl font-bold justify-center mb-6 mt-16">Send Me an Email</h2>
			<div className="w-full flex justify-center items-center mt-10 mb-36">
				<div className="card w-full md:w-3/5 lg:w-3/5 shadow-xl bg-base-200">
					<div className="card-body px-20">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control w-full mb-5">
								<label className="label">
									<span className="label-text">Your Name</span>
								</label>
								<input type="text" placeholder="e.g. John Doe" className="input input-bordered w-full text-base-content" {...register('from_name', { required: 'Your name is required' })} />
								{errors.from_name && <span className="text-xs text-error text-center">{errors.from_name?.message as string}</span>}
							</div>
							<div className="form-control w-full mb-5">
								<label className="label">
									<span className="label-text">Your Email Adress</span>
								</label>
								<input type="email" placeholder="yourname@email.com" className="input input-bordered w-full text-base-content" {...register('from_email', { required: 'Your email is required' })} />
								{errors.from_name && <span className="text-xs text-error text-center">{errors.from_name?.message as string}</span>}
							</div>
							<div className="form-control w-full mb-5">
								<label className="label">
									<span className="label-text">Subject</span>
								</label>
								<input type="text" placeholder="e.g. Hiring for an amazing project" className="input input-bordered w-full" {...register('subject', { required: 'Subject is required' })} />
								{errors.subject && <span className="text-xs text-error text-center">{errors.subject.message as string}</span>}
							</div>
							<div className="form-control mb-5">
								<label className="label">
									<span className="label-text">Your Message</span>
								</label>
								<textarea className="textarea textarea-bordered h-40" {...register('message', { required: 'Please enter your message for the developer' })}></textarea>
								{errors.message && <span className="text-xs text-error text-center">{errors.message.message as string}</span>}
							</div>

							{loading ? (
								<span className="btn loading w-full mt-4 normal-case cursor-pointer"> Sending</span>
							) : (
								<input className="btn btn-primary w-full mt-4 normal-case" type="submit" value="Send" />
							)}
						</form>
					</div>
				</div>

				<ToastContainer />
			</div>
		</>
	);
};

export default Contact;
