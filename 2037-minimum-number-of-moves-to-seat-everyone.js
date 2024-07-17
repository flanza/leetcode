/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((a,b) => a-b);
  students.sort((a,b) => a-b);
  
  let moves = 0;
  for (let i = 0; i < seats.length; i++) {
    const student = students[i];
    const seat = seats[i];
    const move = seat - student;
    moves += Math.abs(move);
  }
    
  return moves;
  // const pos = new Array(101).fill(0);
  // const n = seats.length;
  // for(let i = 0; i < n; i++){
  //   const seat = seats[i];
  //   const student = students[i];
  //   pos[seat]++;
  //   pos[student]--;
  // }
  // let res = 0;
  // let current = 0;
  // for(const i of pos){
  //     res += Math.abs(current);
  //     current += i;
  // }
  // return res;
};


const data = [
  {seats: [12,14,19,19,12], students: [19,2,17,20,7], expected: 19},
  {seats: [3,1,5], students: [2,7,4], expected: 4},
  {seats: [4,1,5,9], students: [1,3,2,6], expected: 7},
  {seats: [2,2,6,6], students: [1,3,2,6], expected: 4},
]

for(let i =0 ; i < data.length; i++) {
  const result = minMovesToSeat(data[i].seats, data[i].students);
  console.log('result = ', result, '; expected =', data[i].expected);
  break;
}