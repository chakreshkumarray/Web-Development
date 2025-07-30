/*Sum of subsets nearest to K possible from two given arrays*/
/*
Input: A[] = {1, 7}, B[] = {3, 4}, K = 10
Output: 10
Explanation:
Sum obtained by selecting A[0] and A[1] = 3 + 7 = 10, which is closest to the value K(= 10).

Input: A[] = {2, 3}, B[] = {4, 5, 30}, K = 18
Output: 17
*/
let ans = Number.MAX_SAFE_INTEGER 
let mini = Number.MAX_SAFE_INTEGER
function findClosestTarget(i, curr, B,M, K) {
if (Math.abs(curr - K) < mini) {
mini = Math.abs(curr - K);
ans = curr;
}
if (Math.abs(curr - K) == mini) {
ans = Math.min(ans, curr);
}
if (i >= M)
return;
findClosestTarget(i + 1, curr + B[i], B, M, K);
findClosestTarget(i + 1, curr + 2 * B[i], B, M, K);
findClosestTarget(i + 1, curr, B, M, K);
}
function findClosest(A, B, N, M, K) {
for (let i = 0; i < N; i++) {
findClosestTarget(0, A[i], B, M, K);
}
return ans;
}
let A = [2, 3];
let B = [4, 5, 30];
let N = A.length;
let M = B.length;
let K = 18;
console.log(findClosest(A, B, N, M, K));
