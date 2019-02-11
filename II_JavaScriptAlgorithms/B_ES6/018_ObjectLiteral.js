////////////////////////////////////////////////////////////////////////////////
//      ES6: Write Concise Object Literal Declarations Using Simple Fields                        //
////////////////////////////////////////////////////////////////////////////////

// EXAMPLE
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

const getMousePosition = (x, y) => ({ x, y });

/*//////////////////////////////////////////////////////////////////////////////
Use simple fields with object literals to create and return a Person object.
//////////////////////////////////////////////////////////////////////////////*/
// const createPerson = (name, age, gender) => ({ name, age, gender});

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
