// 有趣的JS数组操作
const items = [
    {name: 'A', price: 100},
    {name: 'B', price: 200},
    {name: 'C', price: 300}
];

// filter 在不改变原始array的情况下找到满足对应条件的元素
const filter = items.filter((item) => {
    return item.price <= 100;
});
console.log(filter);


// map 获取原始array中包含对应属性的元素
const arrNames = items.map((item) => {
    return item.name;
});
console.log(arrNames);


// find 函数 找到数组内第一个满足条件的元素
const findName = items.find((item) => { 
    return item.name === 'A';
});
console.log(findName);


//foreach循环 顺序打数组内所有元素
items.forEach((item) => {
    console.log(item);
});


// some 返回布尔变量，判断一个数组里是否有满足条件的元素
const hasItem = items.some((item) => {
    return item.price > 100;
})
console.log(hasItem);

// every 返回布尔，判断数组内每一个元素是否都满足指定条件
const checkItemPrice = items.every((item) =>{
    return item.price <= 300;
});
console.log(checkItemPrice);


// reduce 返回迭代结果
const totalPrice = items.reduce((currentPrice, item)=> {
    return currentPrice + item.price;
}, 0);
console.log(totalPrice);

// 返回布尔，判断一个array是否含有指定元素
let arr = [1, 2, 3];
const checkHasNum = arr.includes(3);
console.log(checkHasNum);


