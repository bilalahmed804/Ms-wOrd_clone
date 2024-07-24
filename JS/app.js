let bold = document.getElementById("bold")
let textes = document.getElementById('textes')

let italic2 = document.getElementById("italic")

let underline = document.getElementById("underline")

let button = document.getElementById('bold')

let lineThrough = document.getElementById("line-through")


button.addEventListener('click',function(){
    
    document.execCommand('bold', false, null)
    
})

italic2.addEventListener('click',function(){
    
    document.execCommand('italic', false, null)
    
})

underline.addEventListener('click',function(){
    
    document.execCommand('underline', false, null)
})

lineThrough.addEventListener("click",function(){
     if(textes.style.textDecoration === 'line-through'){
             textes.style.textDecoration='none';
         }else{
     textes.style.textDecoration='line-through';
 }
})


let text = document.querySelector("#fontSelect");


text.addEventListener("change", function(){
    if(text.value == "sans-serif"){
        textes.style.fontFamily = "sans-serif"
    }else if(text.value == "monospace"){
        textes.style.fontFamily = "monospace"
        
    }else if(text.value == "cursive"){
        textes.style.fontFamily = "cursive"
        
    }else if(text.value == "Times New Roman"){
        textes.style.fontFamily = "Times New Roman"
        
    }else if(text.value == "Courier New"){
        textes.style.fontFamily = "Courier New"

    }else if(text.value == "fantasy"){
        textes.style.fontFamily = "fantasy"

    }

})
let fontSize = document.querySelector("#fontSize");


fontSize.addEventListener("click", function(){
    if(fontSize.value == "8"){
        textes.style.fontSize = "8px"
    }else if(fontSize.value == "9"){
        textes.style.fontSize = "9px"
        
    }else if(fontSize.value == "10"){
        textes.style.fontSize = "10px"

    }else if(fontSize.value == "11"){
        textes.style.fontSize = "11px"

    }else if(fontSize.value == "12"){
        textes.style.fontSize = "12px"

    }else if(fontSize.value == "13"){
        textes.style.fontSize = "13px"

    }
    else if(fontSize.value == "14"){
        textes.style.fontSize = "14px"
    }else if(fontSize.value == "15"){
        textes.style.fontSize = "15px"
        
    }else if(fontSize.value == "16"){
        textes.style.fontSize = "16px"

    }else if(fontSize.value == "17"){
        textes.style.fontSize = "17px"

    }else if(fontSize.value == "18"){
        textes.style.fontSize = "18px"

    }else if(fontSize.value == "19"){
        textes.style.fontSize = "19px"

    }
    else if(fontSize.value == "20"){
        textes.style.fontSize = "20px"

    }else if(fontSize.value == "21"){
        textes.style.fontSize = "21px"

    }else if(fontSize.value == "72"){
        textes.style.fontSize = "72px"

    }

})

let textCaseChange = document.querySelector("#textCaseChange");

textCaseChange.addEventListener("click", function(){
    if(textCaseChange.value == "uppercase"){
        textes.style.textTransform = "uppercase";
    }else if(textCaseChange.value == "lowercase"){
        textes.style.textTransform = "lowercase";
    }else if(textCaseChange.value == "capitalize"){
        textes.style.textTransform = "capitalize";
    }
})

let left = document.querySelector("#left")

left.addEventListener("click",function(){
   textes.style.textAlign = "left"
})

let center = document.querySelector("#center");

center.addEventListener("click",function(){
    textes.style.textAlign = "center"
})

let right = document.querySelector("#right");

right.addEventListener("click",function(){
    textes.style.textAlign = "right"
})


let colorInput = document.querySelector("#colorInput")
colorInput.addEventListener("input",function(){
    let colorOne = colorInput.value;

    textes.style.color = colorOne;
})