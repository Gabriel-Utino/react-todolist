import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    // タスクの追加
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ])
    //入力した文字を消す
    setInputText("")
  } 

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  } 
  
  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit} >
        <input type="text" className="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}
