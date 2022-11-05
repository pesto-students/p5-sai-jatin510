// Given an expression string x.
// Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
// Example 1:Input:{([])}Output:trueExplanation:{ ( [ ] ) }. Same colored brackets can form balanced pairs, with 0 number of unbalanced bracket.
// Example 2:Input:()Output:trueExplanation:(). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balancedway.
// Example 3:Input:([]Output:falseExplanation:([].
// Here square bracket is balanced but the small bracket is not balanced and Hence , the output will unbalanced.
// Expected Time Complexity: O(|x|)
// Expected Auxillary Space: O(|x|)
// Constraints: 1 ≤ |x| ≤ 32000Problem

const input1 = '{([])}';
const input2 = '{([)]}';

function checkIfBalanced(input) {
  const stack = [];

  for (let char of input) {
    switch (char) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (stack.pop() !== char) {
          return false;
        }
    }
  }

  return stack.length === 0;
}

console.log(`${input1} is balanced : `, checkIfBalanced(input1));
console.log(`${input2} is balanced : `, checkIfBalanced(input2));
