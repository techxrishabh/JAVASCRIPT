// Web storage API - provided by the browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage, setItem('name', 'john')
// sessionStorage.setItem('name', 'john')

// we pass two argument in this method one is key and another one is key'value

// ==============================================================================
// ======================================================================================================

// we can add value to our local storage by using this method

localStorage.setItem("name", "john");

// we can add value to our session storage by using this method

sessionStorage.setItem("name", "john");
localStorage.setItem("friend", "peter");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "street 123");

// we can also access our add items by using getItem ========

const name = localStorage.getItem("name");
console.log(name);

// we can also remove item by using removeItem()

localStorage.removeItem("name");

// we can also delete everything from storage by using clear()

localStorage.clear();
