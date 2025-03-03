interface IValidator{
    name:string,
    email:string,
    body:string
}

export default function Validatior({name,email,body}:IValidator){

    const errors={
        name:"",
        email:"",
        body:"",
    }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length>25){errors.name="Name is too long"}
    if(name.length<=2){errors.name="Name is too short"}

    if(email.length>2){
        if(email.length>25){errors.name="Email is too long"}
        if(email.length<=2){errors.email="Email is too short"}
    }

    if(!emailRegex.test(email)){errors.email="Enter a valid email"}

    if(body.length >2){
        if(body.length>2500){errors.body="Message is too long sorry"}
        if(body.length<15){errors.body="Message is too short sorry"}
    }
    
    return errors
}   