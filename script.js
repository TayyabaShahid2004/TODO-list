let inputfield=document.querySelector(".input input");
let buttfield=document.querySelector(".butt");
let clearfield=document.querySelector(".clear");
let tasklist=document.querySelector("ul");
//logic

const clearall=()=>{
    tasklist.innerHTML="";
};

const addtask=()=>{
    let task=inputfield.value;
    let newtask=document.createElement("li") ;
    newtask.innerHTML=`
                <p> ${task}</p>
                <div>
                    <button class="check">✔</button>
                    <button   class="del">🗑️</button>
                </div>
      `;
      tasklist.appendChild(newtask)   ;
//again query selector
let checkfield=document.querySelector(".check");
let deletefield=newtask.querySelector(".del");
//event list
checkfield.addEventListener('click',()=>{newtask.querySelector("p").style.textDecoration="line-through";});
deletefield.addEventListener('click',()=>tasklist.removeChild(newtask));
};
//event listener
clearfield.addEventListener('click',clearall);
buttfield.addEventListener('click',addtask);
