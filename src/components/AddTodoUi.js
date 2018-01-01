import React from 'react'

let  AddTodoUi=({addtodoClick})=>{
    
    // const addtodo=(e)=>{
    //     e.preventDefault()
    //     if(e.keyCode===13){
    //         console.log(123)
    //     const inputValue=e.target.value.trim()
    //     if(!inputValue){
    //         return 
    //     }
    //     this.props.addtodoClick(inputValue)
    //     e.target.value=''
    // }
    // }
    let input
    return(

    <div>
        <form onSubmit={e=>{
            e.preventDefault()
            if(!input.value.trim()){
                return
            }
            addtodoClick(input.value)
            input.value=''
        }}>
            <input ref={node=>{
                input=node
            }}/>
            <button >add todo</button>
        </form>
    </div>
)}

export default AddTodoUi