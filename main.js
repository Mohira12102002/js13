


// // 1. 10 kunda 3 tadan kop dars qoldirgan bolsa chopish kerak.

// // 2. addStudent(ismi, familyasi,course, balance)

// // 3. Admin uchun studentlarni balance tugaganlarini tepada chiqazib quyish

// // 4. Ismlari bo'yicha qidirish

// // 5. faqatgina chetlatilgan studentlarni chiqazib bersin

// // 6. admin bitta functionni chaqirsin shunga userning id sini berib yuborsa va statusini (ya'ni o'qishdan chetlatilgan yoki yo'qligini statusi) students arraydan update qilib quysin

// // 7. userlarning ismi, familyasi, balansinigina chiqazib beradigan function tuzing

// // 8. userning balancini yangilash imkoniyati bo'lsin

const students = [
  {
    id: 1,
    firstName: 'Anvar',
    lastName: 'Jabborov',
    course: 'Javascript',
    balance: 100,
    tasks: [
      { date: '12', isFinished: false },
      { date: '13', isFinished: true },
      { date: '14', isFinished: true },
      { date: '15', isFinished: false },
      { date: '16', isFinished: true },
      { date: '17', isFinished: true },
      { date: '18', isFinished: false },
      { date: '19', isFinished: true },
      { date: '20', isFinished: true },
    ],
    lessons: [],
    isOurStudent: true,
  },
];

function addStudent(firstName, lastName, course, balance) {
  const newStudent = {
    id: students.length + 1,
    firstName,
    lastName,
    course,
    balance,
    tasks: [],
    lessons: [],
    isOurStudent: true,
  };
  students.push(newStudent);
  return newStudent
}

function banStudent(studentId) {
  const student = students.find((student) => student.id === studentId);
  if (student) {
    student.isOurStudent = true;
  }
  return student
}

function updateStudentStatus(studentId, newStatus) {
  const student = students.find((student) => student.id === studentId);
  if (student) {
    student.isOurStudent = newStatus;
  }
  return student
}




function searchStudentByName(name) {
  const matchingStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(name.toLowerCase())
  );
  for (const student of matchingStudents) {
    console.log(`${student.firstName} ${student.lastName}`);
  }

  return matchingStudents
}




console.log(addStudent('John', 'Doe', 'Python', 50));
console.log(banStudent(2));
console.log(updateStudentStatus(1, false));
console.log(searchStudentByName('Anvar'));
