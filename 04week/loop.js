// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;

do {
  i = i + 1;
console.log(i);
} while (i < 1000);

// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

for (let [key, value] of Object.entries(person)) {
  if(person.birthDate % 2 !== 0) {
    console.log(person.birthDate);
  }
}


// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = {
  person1: [
    {firstName: "Jan"},
    {lastName: "Doe"},
    {birthDate: "Jan 5, 1925"},
    {gender: "female"},
  ],
  person2: [
    {firstName: "Jerry"},
    {lastName: "Doe"},
    {birthDate: "Jan 5, 1955"},
    {gender: "female"},
  ],
  person3: [
    {firstName: "Janice"},
    {lastName: "Doe"},
    {birthDate: "Jan 5, 1975"},
    {gender: "male"},
  ]
}

// Use .map() to map over the arrayOfPersons and console.log() their information.

const map = arrayOfPersons.map((info) => {
  return `General info-${info}`;
});

console.log(map);

// Use .filter() to filter the persons array and console.log only males in the array.

const malePerson = arrayOfPersons.filter((gender) => {
  return gender.length < 5;
});
  
console.log(malePerson);

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const bornBefore = arrayOfPersons.filter((birthDate) => {
  return birthdate.length < 1990;
});
  
console.log(bornBefore);
