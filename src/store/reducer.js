const initialState ={
    counter:0,
    results:[]
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                counter:state.counter + 1
            }
        case 'DECREMENT':
            return{
                ...state,
                counter:state.counter - 1
            }
        case 'ADD':
            return{
                ...state,
                counter:state.counter + action.val
            } 
        case 'SUBTRACT':
            return{
                ...state,
                counter:state.counter - action.val
            }  
         case 'STORE_RESULT':
            return{        
                ...state,
                results:state.results.concat({id:new Date(),value:state.counter})
            }
        case 'DELETE_RESULT':
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