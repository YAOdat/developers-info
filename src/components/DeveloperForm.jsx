import { developer } from "./Developer";
import { useReducer } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DeveloperList from './DeveloperList'
import '../App.css';
import '../Cards.css';


function DeveloperForm() {
    const [developersList, dispatch] = useReducer( developer, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch ({
            type: 'ADD_DEVELOPER',
            payload: {
                fullName: e.target[0].value,
                language: e.target[1].value,
                favFood: e.target[2].value,
                favDrink: e.target[3].value,
                tech: e.target[4].value
            }

            
        })
       
    }


    return (
        <> 
        <Form onSubmit={handleSubmit}> 
        <Form.Group className="mb-3">
            <Form.Control placeholder="Full Name" required/>
            <Form.Select id='selectMenu'>
            <option>Select a Language</option>
            <option>JavaScript</option>
            <option>Python</option>
            <option>Java</option>
            <option>C++</option>
            <option>C#</option>
          </Form.Select>
          <Form.Control placeholder="Your Favorite Food" required/>
          <Form.Control placeholder="Your Favorite Drink" required/>
          <Form.Select>
            <option>Select a Technology</option>
            <option>React JS</option>
            <option>Express JS</option>
            <option>Django</option>
            <option>Angular JS</option>
            <option>JQuery</option>
            <option>Vue JS</option>
            <option>Ruby</option>
            <option>Ionic</option>

          </Form.Select>
          
          <Button className='btn draw-border' type="submit">Add</Button>
        </Form.Group>
        </Form>

        <DeveloperList developersList ={developersList} dispatch= {dispatch}/>

        </>
    )

}


export default DeveloperForm;