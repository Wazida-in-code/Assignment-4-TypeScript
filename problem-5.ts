type Result = { total: number, average: number }

const getQuizSummary = (scores: number[]):Result => {
    const total:number = scores.reduce((acc:number, sum:number) => acc+sum ,0)
    const average:number = total/scores.length

    return {
        total: total,
        average: isNaN(average)? 0: average
    }
}

console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));