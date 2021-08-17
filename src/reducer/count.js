import * as actions from '../action'
const initialState = {
    count:0
}
const countReducer = (state=initialState, action) =>{
    switch(action.type){
        case  actions.INCREASEMENT:
            return {
                count : state.count+1
            }
        case  actions.DECREASEMENT:
            return {
                count : state.count+1
            }    
        default: return state
    }
}