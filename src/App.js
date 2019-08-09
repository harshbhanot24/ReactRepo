import React , {Component} from 'react';
import './App.css';
import Person from './Person/Person.jsx';
///////////////////old syntax//////////////

class App extends Component {
  // constructor(props,context){
  //   super(props,context)
  //   this.switchHandler = this.switchHandler.bind(this);

  // }


  state={
     person:[{id:1,name:'harsh',age:23},
             {id:2,name:'harsh2',age:233},
             {id:3,name:'harsh3',age:223}],
             showPerson:false,
             showButton:false
 }
//  switchHandler(newname){
//    this.setState({
//              person:[{name:newname,age:23},
//              {name:'harsh2',age:233},{name:'harsh2',age:233},
//              {name:'harsh3',age:23}]
//    })
//  }
 InputHandler = (event,id) =>{
   const person={ ...this.state.person.find((p)=> p.id === id )};
   
   person.name=event.target.value;
   const persons=this.state.person.slice();
   console.log('the state copied person is',persons)
   console.log('id of person is',persons.indexOf(person))
      persons[persons.findIndex((p)=>p.id===id)]=person;
      console.log(persons)
      this.setState({
        person: persons
      })

//    console.log('the data is',event.target.value)
//   this.setState({
//     person:[{name:'old name',age:23},
//     {name:event.target.value,age:233},
//     {name:'harsh2',age:233},
//     {name:'harsh3',age:23}],
    
// })
}
togglePerson= ()=>{
  const bool= this.state.showPerson;
  this.setState({
    showPerson : !bool
  })
 }
 toggleButton= ()=>{
   console.log("toggle button is called   ",this.state.showButton)
  const bool= this.state.showButton;
  this.setState({
    showButton : !bool
  })
 }
 
 render() {
   let button=null;
   if(this.state.showButton)
   {
     button=<button className='btn btn-primary' onClick={this.togglePerson}>Toggle Person</button>;
   }
   return (
    <div>
    <button onClick={this.toggleButton}>Click to toggle button to see person</button>
    {button}
   { this.state.showPerson ?
   <div>
     {this.state.person.map((person,index) =>{
      return <Person key={person.id} name={person.name} age={person.age} changed={(event)=>this.InputHandler(event,person.id)}>
      ITerator
      </Person>
     })}
     {/* < Person name={this.state.person[0].name} age={this.state.person[0].age}>this is extra text</ Person>
    <button onClick={()=>this.switchHandler('new button name')}>Switch button</button> 
     
     < Person name={this.state.person[1].name}   changed={this.InputHandler}age='221'/>
     < Person name='harsh4' age='22 1' click={this.switchHandler}>Click me to change</Person> */}
   </div>  : null
   }
   </div>
 )
 }
}
export default App;

// const App = () => {
//   const [personState, setPersonState] = useState({
//       person:[{name:'harsh',age:23},
//               {name:'harsh2',age:233},
//               {name:'harsh3',age:223}],
//       otherState : 'HY I A THE  OTHER STATE'
//   })

//   const switchHandler = () =>{
//     setPersonState({
//       person:[{name:'harsh',age:23},
//       {name:'harsh2',age:233},
//       {name:'harsh3',age:223}]
//     })
//     console.log(person,x);
//   }
//   const [x,y]=useState({
//     OtherState:'Hy this is a new state'
//   })
//     return (
//     <div>
//       HY I am div one
//       < Person name={personState.person[0].name} age={personState.person[0].age}>this is extra text</ Person>
//      <button onClick={switchHandler}>Switch button</button> 
//       < Person name='harsh2' age='2 1'/>
//       < Person name='harsh3' age='221'/>
//       < Person name='harsh4' age='22 1'/>
//     </div>
    
//   )
//   }
