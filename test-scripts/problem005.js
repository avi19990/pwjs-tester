let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, strangeSum(1, 2) === 3);
test(2, strangeSum(1, 1) === 6);
test(3, strangeSum(1, -1) === 0);
test(4, strangeSum(1, 1.1) === null);
test(5, strangeSum(1, 'a') === null);
[_correct, _failed, _failedTests];