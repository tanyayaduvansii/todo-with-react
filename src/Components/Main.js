import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';


export const Main = () => {

    const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [todoState,setTodoState] = useState(false)


  useEffect(()=>{
     getTodos().then((res)=>{
      // console.log(res,"resss")
     })
     .catch((err)=>{
      console.log(err,"errr")

    })
  },[todoState])
  // const addTodo = () => {
  //     if (newTodo.trim() !== '') {
  //         setTodos([...todos, newTodo]);
  //         setNewTodo('');
  //       }
  //   };
    //
    // const removeTodo = (index) => {
    //     console.log(index,"fjfjdh")
    //     const updatedTodos = [...todos];
    //     console.log(updatedTodos,"updatedTodos")
    //     updatedTodos.splice(index, 1);
    //     console.log(updatedTodos,"kkupdatedTodos")

    //     setTodos(updatedTodos);
    //   };
    
    //     console.log(todos,"todos")

    //     console.log(newTodo.trim(),"stringgg")
    //     console.log(newTodo,"todooo")

        const addTodo = async(newTodo)=>{
              try {
                console.log(newTodo,"event")
                 
                let response  = await axios.post(`http://localhost:3500/api/client/saveTodo`, {todoName:newTodo}, {
                  headers: { 
                    // Authorization: `Bearer ${user.accessToken}`,
                  },
                })
                if(response.status === 200){
                  setTodoState(true)
                  alert("sucessfull")
                  console.log(response, "response add layer side ")
                  // toast.success(response.data?.message)
                  // setLayer(true)
                  // handleClose()
                //   setLayer(response.data.data)
                //   setCategoryAdded(true)
                }
            
              } catch (error) {
                alert("failed")

                 console.log(error,"errorcatch")
              }
        }

        
        const getTodos = async()=>{
          try {
            let response  = await axios.get(`http://localhost:3500/api/client/getTodos`, {
              headers: { 
                // Authorization: `Bearer ${user.accessToken}`,
              },
            })

            console.log(response,"responseee")
            if(response.status === 200) {

              // alert("sucessfull")
              setTodos(response.data?.data)
              console.log(response, "response add layer side ")
              // toast.success(response.data?.message)
              // setLayer(true)
              // handleClose()
            //   setLayer(response.data.data)
            //   setCategoryAdded(true)
            }
        
          } catch (error) {
            alert("failed")

             console.log(error,"errorcatch")
          }
    }
console.log(todos,"todoss")
  return (
    <Container>
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <h1>Todo List</h1>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Add a new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={()=>{
            addTodo(newTodo)
          }}>
            Add Todo
          </Button>
        </Form>
        <ListGroup className="mt-3">
          {todos.map((todo, index) => (
            <ListGroup.Item key={'index'}>
              {todo.todoName}
              <Button
                className="float-right"
                variant="danger"
                size="sm"
                onClick={() => 'removeTodo(index)'}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </Container>
  )
}
