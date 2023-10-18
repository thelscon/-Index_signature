"use strict";
// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям 
// (наприклад, чи всі значення є числами).
// interface IVarious {
//     [index : string | number] : string | number
// }
function valuesAreNumbers(obj) {
    // // первый способ
    // for (let key in obj) {
    //     if (typeof obj[key] !== 'number' && isFinite(obj[key])) {
    //         return false ;
    //     }
    // }
    // return true ;
    // второй способ
    return Object.values(obj)
        .every(item => typeof item === 'number' && Number.isFinite(Number(item)));
    // // третий способ, проверяя также строки
    // return Object.values (obj)
    //         .every (item => Number.isFinite(Number(item)))
}
// console.log (valuesAreNumbers({as : 2 , a : Infinity}))
