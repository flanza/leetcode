/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let couldntEatLastRound = students.length, leftForThisRound = students.length;
  do {
    leftForThisRound--;
      const student = students.shift();
      if (student === sandwiches[0]) {
          sandwiches.shift();
      } else {
          students.push(student);
      }

      if (leftForThisRound === 0) {
        if (couldntEatLastRound == students.length ) {
          break;
        }

        couldntEatLastRound = leftForThisRound = students.length;
      }
  } while (students.length > 0);

  return couldntEatLastRound;
};

// console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));