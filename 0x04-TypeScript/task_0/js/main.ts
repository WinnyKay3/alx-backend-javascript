interface Student {
  firstName: string
  lastName: string
  age: number
  location: string


}


const student1 : Student = {
  lastName: 'John',
  firstName: 'Doe',
  age: 20,
  location: 'Tokyo',

};

const student2 : Student = {
   firstName: 'Jane',
   lastName: 'Doe',
   age: 30,
   location: 'Cairo',
}

const studentsList = [student1,student2]
 

function renderTable(students: Student[]) {
  // Create table and table header
  const table = document.createElement('table');
  const header = table.insertRow();
  const headerCell1 = header.insertCell();
  const headerCell2 = header.insertCell();
  headerCell1.textContent = 'First Name';
  headerCell2.textContent = 'Location';

  // Append rows for each student
  students.forEach(student => {
      const row = table.insertRow();
      const firstNameCell = row.insertCell();
      const locationCell = row.insertCell();
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  });

  // Append the table to the document body or a specific element
  document.body.appendChild(table);
}

// Call the function with the students list
renderTable(studentsList);
