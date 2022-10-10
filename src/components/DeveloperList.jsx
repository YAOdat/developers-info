import '../Cards.css'
import { actionType } from "./Developer";

function DeveloperList(props) {


return (
        <>
            {props.developersList.map(developer => (
                <div class="container"> 
                <div class="card"> 
                <img src="https://cdn2.iconfinder.com/data/icons/membership-account-outline/200/coder-512.png" alt="Developer" class="card__image"/>
                    <p class="dev-name">{developer.fullName}</p>
                    <div class="grid-container"> 
                    <div>{developer.language}</div>
                    <div>{developer.tech}</div>
                    </div>
                    <div>{developer.favFood}</div>
                    <div>{developer.favDrink}</div>
                    <button class="btn draw-border">Hire</button>
                    <button class="btn draw-border" onClick={() => props.dispatch({type: actionType.DELETE_DEVELOPER, payload: {id: developer.id}})}>Delete</button>
                    </div>
                    </div>


            ))}
            <h3> Developer Info 2022 </h3>
        </>
    )
}


export default DeveloperList;