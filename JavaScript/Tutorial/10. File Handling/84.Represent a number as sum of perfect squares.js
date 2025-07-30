/*Count ways to represent a number as sum of perfect squares*/
/*
Input: N = 9
Output: 4
Explanation:
There are four ways to represent 9 as the sum of perfect squares:
1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 9
1 + 1 + 1 + 1 + 1 + 4 = 9
1 + 4 + 4 = 9
9 = 9
Input: N = 8
Output: 3
*/

var psquare = []
function calcPsquare(N)
{
  var i;
  for (i = 1; i * i <= N; i++)
  psquare.push(i * i);
}
function countWays(index, target)
{
  if (target == 0)
  return 1;
  if (index < 0 || target < 0)
  return 0;
  var inc = countWays(
  index, target - psquare[index]);
  var exc = countWays(index - 1, target);
  return inc + exc;
}
var N = 9;
calcPsquare(N);
console.log(countWays(psquare.length - 1, N));