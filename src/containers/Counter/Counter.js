import React, { Component } from 'react';
import {connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/Actions'


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtract5Counter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Resut</button>
                <ul>
                    {
                        this.props.storedResults.map(strResult=>(
                            <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                        ))
                    }
                </ul>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
         ctr:state.ctr.counter ,
         storedResults :state.res.results 
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type:actionTypes.DECREMENT}),
        onAdd5Counter: () => dispatch({type:actionTypes.ADD,val:10}),
        onSubtract5Counter: () => dispatch({type:actionTypes.SUBTRACT,val: 15}),
        onStoreResult:(result) => dispatch({type:actionTypes.STORE_RESULT,result:result}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RESULT,resultEltd:id})
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
// export default Counter;
