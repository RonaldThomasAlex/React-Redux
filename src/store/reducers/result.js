import * as actionTypes from '../Actions'
const initialState ={
    results:[]
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
         case actionTypes.STORE_RESULT:
            return{        
                ...state,
                results:state.results.concat({id:new Date(),value:action.result})
            }
        case actionTypes.DELETE_RESULT:
            // 1.way
            // const index = 2;
            // const newArray = [...state.results];
            // newArray.splice(index,1);
            // return{        
            //     ...state,
            //     results:newArray
            // } 
            //2.WAY
            const upDatedArray = state.results.filter(result => result.id !== action.resultEltd)
            return{        
                    ...state,
                    results:upDatedArray
                }    
        }
    return state;
}

export default reducer