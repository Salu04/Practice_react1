interface userType{
    name:string,
    age:number,
    address:any
}

let users:userType=
{
    name : 'peter',
    age:30,
    address: 'Pune'
}

//getting error bcz in we dont have email prperty
// users.email="peter@test.com";


console.log(users)