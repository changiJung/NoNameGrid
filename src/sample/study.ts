// 제네릭
// 코드 재사용에 특화
interface Mobile<T>{
    name:string
    price: number;
    option : T
}


const m1: Mobile<object> = {
    name : "ssd"
    , price : 1000
    , option : {
        color: "red",
        coupon: false
    },
}

const m2 : Mobile<string>  = {
    name : "char",
    price : 100000,
    option : "brodken"
}

function showName<T extends {name : string}>(data : T): string {
    return data.name;
}


interface User {
    id: number;
    name : string
    age : number
    gender? : "m" | "f"
}

//keyof
//인터페이스 키 값
type UserKey = keyof User; //id, name, age, gender


const uk:UserKey = "id"

// Partial<T> 







let admin : Partial<User> = {
    id : 1,
}

interface User2 {
    id?: number;
    name? : string
    age? : number
    gender? : "m" | "f"
}

// Required  ?(option 함수) 함수를 무조건 필수로
let admin222:  Required<User2> = {
    id : 1,
    name : 'test',
    age : 23,
    gender : 'm'

}


// Readonly : 할당하면 값 변경 못함

// Record <K, T> K는 키

function isValidUser(user : User) {
    const result : Record<keyof User, boolean> = {
        id : user.id > 0,
        name : user.name !== "",
        age : user.age > 0,
        gender : user.gender === "m",
    };

    return result

}

// Pick<T, K
const admin2 : Pick<User, "id" | "name"> = {
    id : 0,
    name  : "bob"
}

// omit 특정 프로퍼티 생략
const admin3 : Omit<User, "age" | "gender"> = {
    id : 0,
    name  : "bob"
}

// Exclude<T1, T2>

//T1의 타입에서 T2제거

type T1 = string | number;
type T2 = Exclude<T1, number | string>

//NonNullable<Type

type T3 = string | null | undefined | void;
type T4 = NonNullable<T1>;