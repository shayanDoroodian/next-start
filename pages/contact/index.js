import React from 'react';
import st from '../../styles/contact.module.css';
import Link from 'next/link';

const Contact = () => {
	return (
		<div className={st.mainContact}>
			<div className={st.contactBox}>
				<h1>Shayan Doroodian</h1>
				<h2>Front-End Developer</h2>

				<a
					href='https://www.linkedin.com/in/shayan-doroodian/'
					target='_blank'
					rel='noreferrer'
					className={st.btnBox}>
					LinkedIn
				</a>

				<a
					href='https://github.com/shayanDoroodian'
					target='_blank'
					rel='noreferrer'
					className={st.btnBox}>
					GitHub
				</a>

				<a
					href='https://t.me/shyn_d'
					target='_blank'
					rel='noreferrer'
					className={st.btnBox}>
					Telegram
				</a>
				<a
					href='../../public/linkedin-resume.pdf'
					target='_blank'
					rel='noreferrer'
					download
					className={st.btnBox}>
					Download CV
				</a>
			</div>
		</div>
	);
};

export default Contact;
