/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  // Merge overlapping meetingsd
  for (let i = meetings.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < meetings.length; j++) {
      const curr = meetings[i];
      const mergeCandidate = meetings[j];

      if (curr[0] <= mergeCandidate[1] && curr[1] >= mergeCandidate[0]) {
        meetings[i] = [Math.min(curr[0], mergeCandidate[0]), Math.max(curr[1], mergeCandidate[1])];
        meetings.splice(j, 1);
        j--;
      }
    }
  }

  meetings.sort((a, b) => a[1] - b[1]);

  // Find the gap between meetings
  let daysWithoutMeetings = meetings[0][0] - 1;
  for (let i = 1; i < meetings.length; i++) {
    const currentMeetingStart = meetings[i][0],
          previousMeetingEnd = meetings[i - 1][1] < days ? meetings[i - 1][1] : days;

    daysWithoutMeetings += previousMeetingEnd >= currentMeetingStart ? 0 : currentMeetingStart - previousMeetingEnd - 1;
  }

  const result = daysWithoutMeetings + (days - meetings[meetings.length - 1][1]);
  return result;
};

const data = [
  { days: 14, meetings: [[6,11],[7,13],[8,9],[5,8],[3,13],[11,13],[1,3],[5,10],[8,13],[3,9]], output: 1 },
  { days: 24, meetings: [[21, 24], [9, 18], [6, 20], [8, 21], [14, 24], [19, 24], [13, 21], [1, 23], [13, 24], [7, 18]], output: 0 },
  { days: 8, meetings: [[3, 4], [4, 8], [2, 5], [3, 8]], output: 1 },
  { days: 10, meetings: [[5, 7], [1, 3], [9, 10]], output: 2 },
  { days: 5, meetings: [[2, 4], [1, 3]], output: 1 },
  { days: 6, meetings: [[1, 6]], output: 0 },
];

// const curr = [21, 24];
// const candidate = [6,20];
// console.log(merge(curr, candidate));
// process.exit(0);

for (const d of data) {
  console.log(JSON.stringify(d));
  const result = countDays(d.days, d.meetings);
  console.log('result = ', JSON.stringify(result));
  console.log('----------');
}

[6, 20]
[21, 24],
  [9, 18],

  [1, 7]
  [7, 10]