import { people } from './data.js'
import { getImageUrl } from './utilities.js'
import './App.css' 

export default function List(){

    const listItems = people.map(person => 
        
    <li key={person.id}>
      <img className='images' src={getImageUrl(person)} alt={person.name}/>

      <p>

        <b>{person.name}</b>:
        {' '+person.professian+', '} {person.accomplishment} 

      </p>
    </li>

    )


  return(
    <div className='maindiv'>

      <h1>Important Persons</h1>

      <ul className='liste'>{listItems}</ul>
        
      <p className='description'>"This study is conducted to improve my knowledge in React."</p>

    </div>
  );
}
