const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			url: 'https://playground.4geeks.com/contact',
			selected: null,
			contacts: [],
		},
		
		actions: {
			selectContact: (contact) =>setStore({selected: contact}),

			getUserAgenda: async () => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
						},
					});
			
					console.log("Respuesta completa:", resp);
			
					if (resp.status === 404) {
						console.log("Agenda no encontrada. Creando nueva agenda...");
						return getActions().createAgenda();
					}
			
					if (!resp.ok) {
						throw new Error(`Error al obtener la agenda, código: ${resp.status}`);
					}
			
					const data = await resp.json();
					console.log("Datos obtenidos de la API:", data);
			
					setStore({ contacts: data.contacts });
					return true;
				} catch (error) {
					console.error("Error obteniendo la agenda:", error);
					return false;
				}
			},
			
			createAgenda: async () => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe', {
						method: 'POST',
						headers: { 
							'Content-Type': 'application/json' 
						},
					});

					if (!resp.ok) {
						throw new Error(`Error al crear la agenda, código: ${resp.status}`);
					}

					const createdAgenda = await resp.json();
					console.log("Agenda creada exitosamente:", createdAgenda);

					// Llamar a la función para obtener la agenda después de crearla
					getActions().getUserAgenda();

				} catch (error) {
					console.error('Error creando la agenda:', error);
					alert('No se pudo crear la agenda');
				}
			},

			createContact: async (contact) => {
				try {
					// Validación de datos del contacto
					console.log("Datos del contacto:", contact);
					if (!contact || !contact.name || !contact.phone || !contact.email || !contact.address) {
						alert("Todos los campos del contacto son obligatorios.");
						return;
					}
			
					const resp = await fetch(getStore().url+'/agendas/pepe/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
			
					console.log("Respuesta de la API:", resp);
					if (!resp.ok) {
						const errorDetails = await resp.text(); // Capturar el detalle del error
						console.error("Detalles del error en la respuesta:", errorDetails);
						throw new Error(`Error al crear el contacto, código: ${resp.status}`);
					}
			
					const createdContact = await resp.json();
					console.log("Contacto creado exitosamente:", createdContact);
			
					// Actualizar contactos en el estado
					return getActions().getUserAgenda();
			
				} catch (error) {
					console.error("Detalles del error:", error);
					alert(`No se pudo crear el contacto. Error: ${error.message}`);
				}
			},		
			
			UpdContact: async (id, contact) => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe/contacts/'+id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(contact),
					});
					if (!resp.ok) throw new Error('Error while updating user');
					return getActions().getUserAgenda();
				} catch (error) {
					console.error('Error creating user:', error);
				}
			},

			delContact: async (id) => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe/contacts/'+id, {
						method: 'DELETE',
					});
					if (!resp.ok) throw new Error('Error while deleting user');
					return getActions().getUserAgenda();
				} catch (error) {
					console.error('Error deleting contact:', error);
				}
			},
		}
	};
};

export default getState;
