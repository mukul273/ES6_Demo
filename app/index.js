import React, { Component } from 'react';
import ReactDOM from 'react-dom';


console.log("Hello World..This is my first ES6 exercise using webpack...and It worked with autoUpdate");
let a = 'Hello, ES6!!';

console.log(a);

{
  let a = "Nothing Happened !!";
  console.log(a);
}

const c = 2*3;
console.log("Using const:"+c);

const arr = [1,2,3,4];
console.log("Before:"+arr);
arr.push(4);
console.log("After pushing 4 again:"+ arr);
arr.push(5);
console.log("After pushing 5:"+ arr);
// template literals
let e = 'template literals demo';
let d = `Hello ${e}`;
console.log(d);

let array1 = [1,2,3];
let array2 = [0, ...array1, 5];
console.log(array2);

function print(...z) {
  console.log(z);
}

print('Str1',1,true);


function butter(...zz) {
  let aa = [1, 2, 3, ...zz];
  return aa;
}

var bb = butter(4, 5, 6);
console.log(bb);

//deconstructing array values
let f = [100, 200];
let [g,h] = f;
console.log(g,h);
console.log(h,g);

let fellowship = ['fellow1','fellow2','fellow3'];
let [item1,item2,item3] = fellowship;
console.log(item1,item2,item3);

/** This is invalid block
let [1,2,3] = fellowship;
console.log(1,2,3);
*/
//destructuring arrays
let StrArray = ['a1','a2','a3','a4'];
let [StrArrayFirst, ...StrArrayRest]=StrArray;
console.log(StrArrayFirst, StrArrayRest);

//destructuring objects
//In older Javascript
let wizard = {magical:true, power:10};
let magical = wizard.magical;
let power = wizard.power;
console.log(magical, power);

// ES6 Syntax
let objArr = {ObjExists:true, objId:100};
let {ObjExists, objId} = objArr;
console.log(ObjExists, objId);

// Another example
let bool1 = true;
let idVal = 10;
console.log(bool1, idVal)
let ranger ={bool1:false, idVal:200};
({bool1, idVal} = ranger);
console.log(bool1, idVal)

//Anonymous / arrow functions
function blastoff () {
  console.log('3..2..1..blastoff !!!');
}
blastoff();
//Still not completely Anonymous since we are using the fucntion keyword
setTimeout(function() {
  console.log('3..2..1..blastoff !!!');
}, 5000)
//Completely Anonymous
setTimeout(()=> {
  console.log('3..2..1..blastoff !!!');
}, 10000)

//Another way
const blastOffAgain = () => {
  console.log('blastOffAgain...');
}
blastOffAgain();


// map functions
let points = [10,20,30];
let addOne = function (element) {
  return element +1;
}

points = points.map(addOne);
console.log(points);

//Another way with Anonymous function
let points1 = [10,20,30];
let addOne1 = (element1) => {
  return element1 +1;
}

points1 = points1.map(addOne1);
console.log(points1);
// yet anothet way of doing it
let points2 = [10,20,30];

points2 = points2.map(element => {
  return element+1;
});
console.log("points2:" + points2);

// Filters
let isPassing = (grade) => {
  return grade>=70;
}

let scores = [95, 67, 90, 85, 71, 69];
let passing = scores.filter(isPassing);

console.log(passing);
//another filter implementatation
let passing1 = scores.filter(element => element>=70)
console.log(passing1);


const averages = [6, 15.7, 9, 18, 22.1, 9.2, 4];

 const highlight = (element) => {
   return element>=15; // TODO fill out the rest of this line
 };

 let avg = averages.filter(highlight)
 console.log (avg);

// Modules
import { students } from './moduleKnow';
console.log(students);

import { add, multiply, minus } from './calculator';
console.log(add(3,5));
console.log(multiply(3,5));
console.log(minus(3,5));


// extending the class from imported file
import Entity from './Entity';

class Hobbit extends Entity{
    constructor(name, height) {
      super(name, height);
    }
}

let frodo = new Hobbit("Weirdo", 4.5);
console.log(frodo);
frodo.greet();

 // React Code below
 const api_key='6aedaed404b3a5a3876da04890234ea9';
 class  App extends Component {
   constructor (props) {
     super(props);
     this.state = {
       zip: '48187',
       description: ''
     }
   }

   componentDidMount() {
     this.grabWeather(this.state.zip);
   }

   grabWeather(city) {
     console.log(api_key);
     console.log(this.state.zip);
     console.log('http://api.openweathermap.org/data/2.5/weather?APPID=6aedaed404b3a5a3876da04890234ea9&zip=48187');
     fetch('http://api.openweathermap.org/data/2.5/weather?APPID=6aedaed404b3a5a3876da04890234ea9&zip=48187')
     .then(response =>  response.json())
     .then(json =>  {
       this.setState({description: json.weather[0].description})
     });
   }
   render() {
     return (
       <div>React JS and JSX in Action! Weather Action for {this.state.zip} and <br/>Sky Condition description {this.state.description}</div>
     )
   }
 }

ReactDOM.render(<App />, document.getElementById('root'));
