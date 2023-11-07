const { configureStore } = require("@reduxjs/toolkit");
const { default: mainReducers } = require("../reducers");

const store = configureStore({
    reducer: mainReducers
})

export default store