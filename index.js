const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
  
  // Task 1: find all female name
  console.log(students.filter(s => s.gender === 'female').map(s=>s.name))

  //Task 2: Starting with 'A'
  console.log(students.filter(s => s.name[0] === 'A').map(s=>s.name))

  // Task 3: Count the no. of males
  console.log(students.filter(s => s.gender === 'male').map(s=>s.name))