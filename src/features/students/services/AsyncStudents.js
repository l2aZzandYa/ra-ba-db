export default async function fetchStudents() {
  const response = await fetch(
    'https://raw.githubusercontent.com/lonqie/SchaleDB/main/data/en/students.min.json'
  ),
    data = await response.json();
  return data;
}; 