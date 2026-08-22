const calculateWeeklyTotal = (expenses: number[]): number => {
    if (expenses.length === 0){
        return 0
    }
    const total = expenses.reduce((acc, sum) => acc+sum)
    return total
}
console.log(calculateWeeklyTotal([200, 450, 100]));
console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));