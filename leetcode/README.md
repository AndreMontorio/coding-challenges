# LeetCode Solutions

My solutions to problems from [LeetCode](https://leetcode.com). [← Back to all challenges](../README.md)

## Structure

Solutions are grouped by **difficulty → problem**. Inside each folder, files are prefixed with the problem number, so they sort in the same order as on LeetCode.

```
leetcode/
├── easy/
│   └── <number>-<problem>.js
├── medium/
├── hard/
└── README.md
```

The `medium/` and `hard/` folders are created when the first problem of that difficulty is solved.

### Conventions

- File names are `<number>-<slug>.<ext>`: the problem number zero-padded to 4 digits, followed by the slug from the problem URL (e.g. `leetcode.com/problems/two-sum/` → `0001-two-sum.js`).
- Keep LeetCode's function signature and its `@param`/`@return` JSDoc block, so the solution can be pasted straight back into the editor.
- Every solution file starts with a standard header describing the problem and the approach:

```js
/**
 * <Number>. <Problem Name>
 * <link to the problem on LeetCode>
 * <Difficulty>
 *
 * Task: <short summary of what the problem asks, in my own words>
 *
 * Approach: <how the solution works>
 * Complexity: <time complexity>
 */
```

- Every new solution gets a row in the index below.

## Solutions Index

### Easy

| # | Problem | Solution |
| --- | --- | --- |
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | [JavaScript](easy/0001-two-sum.js) |
| 9 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | [JavaScript](easy/0009-palindrome-number.js) |
| 13 | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) | [JavaScript](easy/0013-roman-to-integer.js) |
| 14 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | [JavaScript](easy/0014-longest-common-prefix.js) |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | [JavaScript](easy/0020-valid-parentheses.js) |
| 26 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | [JavaScript](easy/0026-remove-duplicates-from-sorted-array.js) |
