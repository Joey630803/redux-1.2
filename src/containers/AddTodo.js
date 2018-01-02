import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {addTodo} from '../actions'
import AddTodoUi from '../components/AddTodoUi'

const mapDispatchToProps=(dispatch,ownProps)=>({
    addtodoClick : (text)=>{
        console.log('123')
        dispatch(addTodo(text))
        // type:'ADD_TODO',
        // text
    }
})

// const mapDispatchToProps=dispatch=>({
//     addtodoClick:bindActionCreators(addTodo, dispatch)
// })
  
const AddTodo=connect(
    mapDispatchToProps
)(AddTodoUi)

export default AddTodo