import React from  'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps=(state)=>({
    todos:state
})
const VisibleTodoList=connect(
    mapStateToProps
)(TodoList)

export default VisibleTodoList