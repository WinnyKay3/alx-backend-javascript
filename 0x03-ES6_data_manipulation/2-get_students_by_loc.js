function getStudentsByLocation(students, city) {
  // Using filter function to get students located in the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  return studentsInCity;
}

export default getStudentsByLocation;
