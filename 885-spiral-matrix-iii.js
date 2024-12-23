const RIGHT = 0, DOWN = 1, LEFT = 2, UP = 3;
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let currR = rStart, 
        currC = cStart, 
        nextMove = RIGHT, 
        topLimit = rStart,
        bottomLimit = rStart,
        leftLimit = cStart,
        rightLimit = cStart;
    const result = [[rStart, cStart]];
    while(result.length < rows * cols){
        switch(nextMove) {
            case RIGHT:
                currC++;
                if (currC > rightLimit) {
                    nextMove = DOWN;
                    rightLimit = currC;
                }
                break;
            case DOWN:
                currR++;
                if (currR > bottomLimit) {
                    nextMove = LEFT;
                    bottomLimit = currR;
                }
                break;
            case LEFT:
                currC--;
                if (currC < leftLimit) {
                    nextMove = UP;
                    leftLimit = currC;
                }
                break;
            case UP:
                currR--;
                if (currR < topLimit) {
                    nextMove = RIGHT;
                    topLimit = currR;
                }
                break;
        }

        if (currR >= 0 && currC >= 0 && currR < rows && currC < cols) {
            result.push([currR, currC]);
        }
    }
    return result;
};

const data = [
  { rStart: 1, cStart: 4, rows: 5, cols: 6, output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]}
]



for (let d of data) {
  console.log(JSON.stringify(d));
  const result = spiralMatrixIII(d.rows, d.cols, d.rStart, d.cStart);
  console.log('result = ', JSON.stringify(result));
  (JSON.stringify(result) === JSON.stringify(d.output)) ? console.log('ok') : console.error('nok');
  console.log('----------');
}