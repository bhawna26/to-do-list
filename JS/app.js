let item=document.querySelector("#item");
let toDoBox=document.querySelector("#to-do-box");

item.addEventListener("keyup",function(event){
  if(event.key=="Enter"){
    addToDo(this.value);
    this.value=""
  }
})

let addToDo=(item)=>{
let listItem=document.createElement("li");
listItem.innerHTML=`${item}
<i class="fas fa-times"></i>`;

listItem.addEventListener("click",()=>{
this.classList.toggle("done");
});

listItem.querySelector("i").addEventListener("click",()=>{
  listItem.remove();
})

toDoBox.appendChild(listItem);
}