

const num: number = 1;

const AAA = [0, 2, 3];
AAA.push(1);
const B = [0];
const C = [2];

const nums: number[][] = [[], [], [11]];

function func(A: number[], B: number[], C: number[]) {
    console.log("A:", A);
    console.log("B:", B);
    console.log("C:", C);

    nums.push(A)
    nums.push(B)
    nums.push(C)

    console.log(nums);

}

[
    [0], // 0 , nums[0]
    [0, 2, 3, 1], // nums[1], 4
    [2]
]


func(B, AAA, C);

const n = nums.length;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        console.log(`nums[${i}]`, nums[i][j]);
    }
}

// 取引用访问，取值访问

const aa = 0;
const bb = 1;

const swap = (a: number, b: number) => {
    let temp = a
    a = b
    b = temp
    console.log(`A: ${a} , B: ${b}`);
}

swap(aa,bb)
console.log(`AA: ${aa} , BB: ${bb}`);

