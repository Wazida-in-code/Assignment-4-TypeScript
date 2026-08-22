"use strict";
const getQuizSummary = (scores) => {
    const total = scores.reduce((acc, sum) => acc + sum, 0);
    const average = total / scores.length;
    return {
        total: total,
        average: isNaN(average) ? 0 : average
    };
};
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
