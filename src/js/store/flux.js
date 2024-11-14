const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: {
				url: 'https://playground.4geeks.com/contact',
				selected: null,
				contacts: [],
			},
		},
		actions: {
			
			
		},
	};
};

export default getState;
