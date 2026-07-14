let choice;

const container=document.querySelector(".container");
const topContainer=document.querySelector(".top");

const userInputButton=document.createElement("button");
userInputButton.textContent="Create a new sketchpad";
topContainer.appendChild(userInputButton);

const clearButton=document.createElement("button");
clearButton.textContent="Reset the sketchpad";
topContainer.appendChild(clearButton);

userInputButton.addEventListener("click",()=>{
    container.replaceChildren();
    choice=parseInt(prompt("Enter a number to generate a sketchpad : "));
    if(choice>1439){
        let message=alert("The value cannot exceed 1439");
        return;
    }
    for(let i=0;i<=choice;i++){
    const squareBox=document.createElement("div");
    squareBox.style.width="15px";
    squareBox.style.height="15px";
    squareBox.style.border="1px solid red";
    squareBox.style.margin="0px";
    squareBox.style.padding="0px";
    squareBox.style.minWidth="0px";
    squareBox.style.minHeight="0px";
    squareBox.style.flexShrink="1";
    container.appendChild(squareBox);
    squareBox.addEventListener("mouseenter",()=>{
        squareBox.style.backgroundColor="lightgreen";
        });
    }
});

clearButton.addEventListener("click",()=>{
    container.replaceChildren();
});
