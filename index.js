"use strict";
// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям 
// (наприклад, чи всі значення є числами).
// interface IVarious {
//     [index : string | number] : string | number
// }
function valuesAreNumbers(obj) {
    // первый способ
    // for (let key in obj) {
    //     if (typeof obj[key] !== 'number') {
    //         return false ;
    //     }
    // }
    // return true ;
    // второй способ
    return Object.values(obj)
        .every(item => typeof item === 'number');
}
