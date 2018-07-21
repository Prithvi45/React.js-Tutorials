
const redux = require('redux')
const createStore = redux.createStore


const initialState = {
    counter : 0
}

// Reducer: takes old state and action as arg
// *ES6 feature : if my state arg is null, then by default it takes initialState as an arg* 
const rootReducer = (state = initialState, action) =>{
    if(action.type === 'INC_COUNTER'){
        // return state + 1;   we cannot immutate state
        return {
            ...state,
            counter : state.counter + 1 
        }  
    }

    if(action.type === 'ADD_COUNTER'){
        // return state + 1;   we cannot immutate state
        return {
            ...state,
            counter : state.counter + action.value 
        }  
    }
    return state;
};


// Store 
const store = createStore(rootReducer);
console.log(store.getState());


// Subscriptions
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});



// Dispatching Action : takes an obj as an arg, type is mandatory (which type of action) 
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value:10 });
console.log(store.getState())

