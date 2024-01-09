function getStudentIdsSum(students) {
  // Use the reduce function to calculate the sum of student ids
  const sumOfIds = students.reduce((accumulator, student) => accumulator + student.id, 0);

  return sumOfIds;
}

export default getStudentIdsSum;
