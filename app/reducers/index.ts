import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

const CreateRootReducer =(history:any)=>combineReducers({
    router: connectRouter(history)
});

export interface IState {
}

export default CreateRootReducer;
