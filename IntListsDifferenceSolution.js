
// Implement a logic that finds difference between "first" and "secord" lists
// and prints the result to the console:
// [1, 2, 4]
const arr1 = [1, 3, 3, 4, 6, 5, 4];
const arr2 = [6, 3, 5, 2, 2];
//удаление дубликатов в массиве
a = arr1.filter(function (item, pos) {
    return arr1.indexOf(item) == pos;
});
b = arr2.filter(function (item, pos) {
    return arr2.indexOf(item) == pos;
});
//нахождение разницы
function arrayDiff(a, b) {
    return [
        ...a.filter(x => !b.includes(x)),
        ...b.filter(x => !a.includes(x))
    ];
}
//сортировка чисел
result = arrayDiff(a, b).sort((a, b) => a - b)

console.log(result);