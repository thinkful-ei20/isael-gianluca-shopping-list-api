/* global api */

// eslint-disable-next-line no-unused-vars
const store = (function(){
	const addItem = function(item) {
		this.items.push(item);
	};

	const findById = function(id) {
		return this.items.find(item => item.id === id);
	};

	const findAndDelete = function(id) {
		this.items = this.items.filter(item => item.id !== id);
	};

	const findAndUpdate = function(id, newData) {
		const item = this.items.find(item => item.id === id);
		Object.assign(item, newData);
	};

	const toggleCheckedFilter = function() {
		this.hideCheckedItems = !this.hideCheckedItems;
	};

	const setSearchTerm = function(term) {
		this.searchTerm = term;
	};

	const setError = function(error) {
		this.errorMessage = error;
	};

	return {
		items: [],
		errorMessage:'',
		hideCheckedItems: false,
		searchTerm: '',
		findAndUpdate,
		addItem,
		findById,
		findAndDelete,
		toggleCheckedFilter,
		setSearchTerm,
		setError,
	};
}());
