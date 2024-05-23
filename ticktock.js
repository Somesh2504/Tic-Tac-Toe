let boxes=document.querySelectorAll(".box");
let neww =document.querySelector(".new");
let reset=document.querySelector(".reset");
let msg=document.querySelector(".winner");

let turn0=true;
let winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
       if(turn0){
          box.innerHTML="O";
          turn0=false;       
       }
       else{
          box.innerHTML="X";
          turn0=true;
       }
       box.disabled=true;
       checkWinner();
    });
  
  });
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner=(winner)=>{
    msg.innerHTML=`Winner is  ${winner}`;
    disableBoxes();
    msg.classList.remove("hide");
    neww.classList.remove("hide");
}
checkWinner=()=>{
  winpat.forEach((pattern) => {
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    // console.log("po1","po2","po3");   
    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
          showWinner(pos1);
        }
    }
  });
};

const resetGame=()=>{
   turn0=true;
   enableBoxes(); 
   msg.classList.add("hide");
   neww.classList.add("hide");
}
neww.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);