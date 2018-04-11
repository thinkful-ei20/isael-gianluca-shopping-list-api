/* global shoppingList, store, Item, api */
'use strict';
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});


//api.getItems(data => console.log(data));
api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  const item = items[4];
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, {name:'foobar'});
  console.log('new name: ' + item.name);
  shoppingList.render();
});
