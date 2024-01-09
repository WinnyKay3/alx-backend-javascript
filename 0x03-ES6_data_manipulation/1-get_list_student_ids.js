function getListStudentIds(students) {
  //get list of students
  if (!Array.isArray(students)) {
    return [];
  }
  // use map function to extract id properties
  const studentIds = students.map((student) => student.id);

  return studentIds;
}
export default getListStudentIds;
