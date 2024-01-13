
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;  // Allows for additional properties
}

// Usage example
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Extending the Teacher interface to create Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'Mark',
  lastName: 'Andrew',
  location: 'Nyeri',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract: true,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string) : string {
  return `${firstName.charAt(0)}.  ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working"
  }

  displayName() {
    return this.firstName;
  }


}

interface Student {
  firstName: string
  lastName: string
  workOnHomework(): string
  displayName(): string
}

interface StudentContructor {
  firstName: string
  lastName: string
}


