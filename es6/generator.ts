

// Generator

const items = [1, 2, 4, 5, 6, 7]

const gene = function* (arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        const item = arr[i];
        if (typeof item !== 'number') {
            yield* gene(item);
        } else {
            yield item;
        }
    }
}

console.log(gene(items)); //Object [Generator] {} //输出生成器对象本身，而不是生成器产生的值;

// 使用for..of展开生成的对象
for (var f of gene(items)) {
    console.log(f);
}
// 使用...展开对象
console.log(...gene(items));