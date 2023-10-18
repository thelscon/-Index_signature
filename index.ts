// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. 
// Наприклад, тип значення для кожного ключа може бути число | рядок.
interface IFirstTask {
    [index : number] : number | string
}

// обобщённый интерфейс
interface IFirstTaskGeneric <A , B> {
    [index : number] : A | B
}
// обобщённый тип, переназначающий на основе объектного типа имена ключей и их тип
type FirstTaskGeneric<Type , A , B> = {
    [Property in keyof Type as number] : A | B
}


// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. 
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
type Types = string | number | boolean | bigint | symbol | undefined | null | object ;
interface ISecondTask {
    [index : string] : (...value : Types[]) => void
}

// обобщённый интерфейс
type Func<ArgumentTypes> = (...value : ArgumentTypes[]) => void 
interface ISecondTaskGeneric<ArgumentTypes> {
    [index : string] : Func<ArgumentTypes>
}
// обобщённый тип, переназначающий на основе объектного типа имена ключей, являющихся обобщёнными методами
type SecondTaskGeneric<Type , ArgumentTypes> = {
    [Property in keyof Type as string] : Func<ArgumentTypes>
}


// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. 
// Ключі повинні бути числами, а значення - певного типу.
interface IThirdTask {
    [index : number] : string
}

// обобщённый интерфейс
interface IThirdTaskGeneric<Type> {
    [index : number] : Type
}
//обобщённвй тип, превращающий объектный тип на тип объекта, похожего на массив
type ThirdTaskGeneric<Obj , Type> = {
    [Index in Obj as number] : Type
}


// Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface IFourthTask {
    [index : string] : string | boolean

    name : string
}

// обобщённый интерфейс
type DynamicPropertiesTypes<A, B> = A | B
interface IFourthTaskGeneric<S extends string , AnotherType> {
    [index : string] : DynamicPropertiesTypes<S , AnotherType>

    name : S
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
type typesOfFunctions = ((value : string) => string) | ((value : number) => number) | ((value : boolean) => boolean)
interface IIndexSignature {
    [property : string] : string | number | boolean | typesOfFunctions
}
interface IFifthTask extends IIndexSignature {
    [prorepty : number] : boolean

    name : string ,
    age : number ,
    badРabits : boolean ,
    showProperty : (property : string) => string
}

// на основе generic
type typesOfFunctionsGeneric<Type> = (value : Type) => Type
interface IIndexSignatureGeneric<Type> {
    [property : string] : string | number | boolean | typesOfFunctionsGeneric<Type>
}
interface IFifthTaskGeneric<Type> extends IIndexSignatureGeneric<Type> {
    [prorepty : number] : boolean

    name : string ,
    age : number ,
    badРabits : boolean ,
    showProperty : (property : Type) => Type
}


// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям 
// (наприклад, чи всі значення є числами).

// interface IVarious {
//     [index : string | number] : string | number
// }
function valuesAreNumbers (obj : /*IVarious*/ { [index : string | number] : string | number }) : boolean {
    // // первый способ
    // for (let key in obj) {
    //     if (typeof obj[key] !== 'number' && isFinite(obj[key])) {
    //         return false ;
    //     }
    // }
    // return true ;

    // второй способ
    return Object.values (obj)
            .every (item => typeof item === 'number' && Number.isFinite(Number(item)))
    
    // // третий способ, проверяя также строки
    // return Object.values (obj)
    //         .every (item => Number.isFinite(Number(item)))
}

// console.log (valuesAreNumbers({as : 2 , a : Infinity}))