const loadBtn= document.getElementById("loadBtn");
const message = document.getElementById("message");
const users = document.getElementById("users");

loadBtn.addEventListener("click",()=>{
    message.textContent= "Loading...."
    getUsers()
    .then((result)=>{
        users.innerHTML= " ";
        result.forEach((user)=>{
            users.innerHTML +=
            ` <p> Name :  ${user.name} </p>
             <p> Age : ${user.age}</p>`
        })
    })
    .catch((error)=>{
        message.textContent= error
    })
    .finally(()=>{
        message.textContent="";
    })
})

const getUsers = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([ {name: "Abdullah" , age: 22},
                      {name: "Rahul" , age: 25},
                      {name: "Aisha" , age: 21}
            ])
        },2000)
    })
}