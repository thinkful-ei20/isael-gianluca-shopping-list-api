
const api = (function(){
	const BASE_URL = 'https://thinkful-list-api.herokuapp.com/isael-gianluca';

	const getItems = function(success, error){
		const options = {
			url: `${BASE_URL}/items`,
			method: 'GET',
			contentType: 'application/json',
			success: success,
			error: error,
		};
		$.ajax(options);
	};

	const createItem = function(name, success, error){

		const options = {
			url: `${BASE_URL}/items`,
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({name: name}),
			success: success,
			error: error,
		};

		$.ajax(options);
	};

	const updateItem = function(id, updateData, success, error) {
		const options = {
			url: `${BASE_URL}/items/${id}`,
			method: 'PATCH',
			contentType: 'application/json',
			data: JSON.stringify(updateData),
			success: success,
			error: error,
		};
		$.ajax(options);
	};

	const deleteItem = function(id, success, error) {
		const options = {
			url: `${BASE_URL}/items/${id}`,
			method: 'DELETE',
			contentType: 'application/json',
			success: success,
			error: error,
		};
		$.ajax(options);
	};

	return {
		getItems,
		createItem,
		updateItem,
		deleteItem,
	};
}());