import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const { message, setMessage } = useContext(AppContext);
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			<p>Subject : {message}</p>
			<p>{message === 'online' && 'Available for chat'}</p>
			<button
				onClick={() =>
					setMessage(message === 'technology' ? 'history' : 'technology')
				}
			>
				Subject
			</button>
		</div>
	);
};
