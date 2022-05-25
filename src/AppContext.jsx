import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [message, setMessage] = useState('technology');

	return (
		<AppContext.Provider value={{ message, setMessage }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
