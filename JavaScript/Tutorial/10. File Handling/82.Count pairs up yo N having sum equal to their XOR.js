/*Count pairs up to N having sum equal to their XOR*/

/*
Input: N = 3
Output: 9
Explanation: The pairs satisfying the given conditions are {{0, 0}, {0, 1}, {1, 0}, {0, 2}, {2, 0}, {3, 0}, {0, 3}, {2, 1}, {1, 2}}
Input: N = 10
Output: 37
*/
    let dp = new Array(1000);
    for(let i = 0; i < 1000; i++)
    {
        dp[i] = new Array(2);
    }
    function IsSumEqualsXor(i, n, bound, s)
    {
        if (i == n)
            return 1
        if (dp[i][bound] != -1)
            return dp[i][bound];
        let ans = 0;
        if (bound!=0 && s[i] == '0') {
            ans = IsSumEqualsXor(i + 1, n, 1, s);
        }
        else {
            ans = 2
                  * IsSumEqualsXor(i + 1, n,
                                   bound!=0 & (s[i] == '1')?1:0,s);
            ans += IsSumEqualsXor(i + 1, n, 0, s);
        }
        dp[i][bound] = ans
        return dp[i][bound];
    }
    function reverse(input) {
        let a = input.split('');
        let l, r = a.length - 1;
        for (l = 0; l < r; l++, r--) {
            let temp = a[l];
            a[l] = a[r];
            a[r] = temp;
        }
        return a.join("");
    }
    function convertToBinary(n)
    {
        let ans="";
        while (n>0) {
            let rem = String.fromCharCode(n % 2 + 48);
            ans+=(rem);
            n = parseInt(n / 2, 10);
        }
        ans = reverse(ans);
        return ans;
    }
    function IsSumEqualsXorUtil(N)
    {
        let s = convertToBinary(N);
        for(let i = 0; i < dp.length; i++)
        {
            for (let j = 0; j < dp[0].length; j++) {
                dp[i][j] = -1;
            }
        }
        document.write(IsSumEqualsXor(0, s.length, 1, s.split('')) +"</br>");
    }
    let N = 10;
    IsSumEqualsXorUtil(N);