const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
const developers = data.filter((person) => person.profession === 'developer');
console.log(developers);
}

// 2. Add Data
function addData() {
  const newName = prompt('Enter name:');
  const newAge = parseInt(prompt('Enter age:'), 10);
  const newProfession = prompt('Enter Profession:');

  if(!newName || isNaN(newAge) || !newProfession){
    alert('Invalid input.');
    return ;
  }

  const newData = { name: newName , age: newAge , profession: newProfession};
  data.push(newData);
  console.log("The data has been added.")
}

// 3. Remove Admins
function removeAdmin() {
  const res = data.filter((element) => element.profession !== 'admin');
  console.log(res);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    {name: "Neha" , age: 34 , profession: "developer"},
    {name: "Vishal" , age: 26 , profession: "designer"}
  ];

  const resultArray = data.concat(dummyArray);
  console.log("Here is your concatenated Array:" , resultArray);
}

// 5. Average Age
function averageAge() {
  const totalage = data.reduce((sum, person) => sum + person.age, 0);
  const avgage = Math.floor(totalage/data.length);
  console.log("The average age of all profiles is:", avgage);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some((person) => person.age > 25);
  console.log(
    above25
    ? "Yes, there is at least one profile with an age above 25."
    : "No, there is no profile with an age above 25."
  );
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map((person) => person.profession))];
  console.log(professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("The array has been sorted in ascending order based on age.")
}

// 9. Update Profession
function updateJohnsProfession() {
  const updatedData = data.map((person) =>{
    if(person.name === 'john'){
      return { ...person, profession: 'manager'};
    }
    return person;
  });
  console.log(updatedData);
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCount = data.reduce((count, person) =>{
    if(person.profession === "developer" || person.profession === "admin"){
      count[person.profession] = (count[person.profession] || 0) + 1;
    }
    return count;
  });
  console.log("Developer Count:" , professionCount.developer  || 0);
  console.log("Admin Count:" , professionCount.admin || 0);
}
