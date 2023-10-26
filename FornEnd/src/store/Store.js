import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import index from '../store/index';

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(index,composedEnhancers);

export default store;