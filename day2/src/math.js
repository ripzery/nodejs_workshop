/**
 * Created by ripzery on 2/27/17.
 */

/* Arrow function */
/* Named export */
const add = (a, b) => a + b;
const PI = 3.1416;
const volume = 3500;
const area = (r) => {
    return PI * r * r
};

export {
    add,
    PI,
    volume,
    area
}

// Note : ใน es6 เราสามารถ export ทั้งแบบ named export และ default export ในไฟล์เดียวกันได้
// ส่วนใน es5 เราจะเลือกได้แค่แบบใดแบบหนึ่ง ระหว่าง modules.export.ตัวแปร กับ modules.export = ฟังชั่น เป็นต้น
