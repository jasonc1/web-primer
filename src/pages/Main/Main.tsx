import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Main.style.scss';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';

interface todoObject {
  value: string;
  id: string;
}

export const Main = () => {
  const [todos, setTodos] = useState([] as todoObject[]);
  const [completed, setCompleted] = useState([] as todoObject[]);
  const [todoValue, setTodoValue] = useState();

  const handleTodoInput = (e) => {
    setTodoValue(e.target.value);
  }

  const handleAddTodo = () => {
    setTodos(prevState => ([...prevState, {value: todoValue, id: uuidv4()}]));
    setTodoValue(""); // reset textInput value
  }

  const handleCheckboxClick = (id) => {
    const result = [...todos];
    let completedItem;
    todos.forEach((todo, index) => {
      if (id === todo.id) {
        completedItem = todo;
        result.splice(index, 1);
      }
    })

    setCompleted(prevState => ([...prevState, completedItem]));
    setTodos(result);
  }

  const memoHandleCheckboxClick = useCallback(handleCheckboxClick, [todos])


  const renderItems = () => {
    return todos.map(todo => ( 
      <div className="twelve cols">
        <Checkbox label={todo.value} key={todo.id} checked={false} marginTop={8} id={todo.id} handleClick={memoHandleCheckboxClick}/>
      </div>))
  }
  
  const renderCompleted = () => {
    const none = (<div className="twelve cols completed__text">No completed items</div>);
    if (completed.length === 0) {
      return none;
    } 
    return completed.map(completedItem => (<div className="twelve cols">
    <Checkbox label={completedItem.value} key={completedItem.id} checked={true} marginTop={8} id={completedItem.id} handleClick={handleCheckboxClick}/>
  </div>))
  }
  

  return (
    <div className="row container main">
      <div className="twelve cols main__title">Todo List</div>
      <div className="twelve cols">
        <div className="row main__todoInput">
          <div className="eleven cols">
            <TextInput handleChange={handleTodoInput} value={todoValue} />
          </div>
          <div className="one col">
            <Button buttonText="Add item" handleClick={handleAddTodo} />
          </div>
        </div>
      </div>

      {renderItems()}

      <div className="twelve cols main__completed">
        Completed Items
      </div>
      {renderCompleted()}

    </div>
  );
};

export default Main;
