'use strict';
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/isael-gianluca';

  const getItems = function(callback){
    const options = {
      url: `${BASE_URL}/items`,
      method: 'GET',
      contentType: 'application/json',
      success: callback,
      error: callback,
    };
    $.ajax(options);
  };

  const createItem = function(name, callback){
    let newItem = {name: name};

    newItem = JSON.stringify(newItem);

    const options = {
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: callback,
    };

    $.ajax(options);
  };

  const updateItem = function(id, updateData, callback) {
    const options = {
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
      error: callback,
    }
    $.ajax(options);
  }

  const deleteItem = function(id, callback) {
    const options = {
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback,
      error: callback,
    }
    $.ajax(options);
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());