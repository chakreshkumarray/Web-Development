/*Count substrings having frequency of a character exceeding that of another character in a string*/
/*Input: S = “abcc”
Output: 2
Explanation:
Below are all the possible substrings of S(= “abcc”) having the frequency of the character greater than the character c:
“a”: The frequency of a and c is 1 and 0 respectively.
“ab”: The frequency of a and c is 1 and 0 respectively.
Therefore, the count of such substrings is 2.
Input: S = “abcabcabcaaaaabbbccccc”
Output: 148*/

function countSubstrings(s)
{
    var n = s.length;
    var ans = 0;
    var i,j;
    for (i = 0; i < n; i++) {
        var cnt = 0;
         for (j = i; j < n; j++) {
            if (s[j] == 'a')
                cnt++;
            else if (s[j] == 'c')
                cnt--;
            if (cnt > 0) {
                ans++;
            }
        }
    }
   console.log(ans);
}
  var S = "abccaab";
  countSubstrings(S);