// For loop
let busyStudent = (startTime, endTime, queryTime) => {
  let studentsAtQuery = 0;
  for(let i = 0; i < startTime.length; i++){
    if(queryTime >= startTime[i] && queryTime <= endTime[i]){
      studentsAtQuery++
    }
  }
  return studentsAtQuery
};

// While loop
let busyStudent2 = (startTime, endTime, queryTime) => {
  let students = 0;
  let current = 0;
  while(current < startTime.length){
    if(queryTime >= startTime[current] && queryTime <= endTime[current]){
      students++
    }
    current++
  }
  return students
};
