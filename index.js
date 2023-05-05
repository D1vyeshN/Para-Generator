const input = document.getElementById("numberOfword");

const container = document.querySelector(".container");

const ganerateWord = (n) => {
    let text = "";
   const latters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

   for(let i=0 ; i<n ; ++i){
    const random = (Math.random() * (latters.length - 1) ).toFixed(0);
    text += latters[random];
   }

    return text;
}



let numberOfword; 
const genaretePara = () =>{
    numberOfword = input.value;

    const para = document.createElement("p");

    let data ="";
    
    for (let i = 0; i < numberOfword; ++i) {
        const randomNumber = (Math.random() * 10 ).toFixed(0);
        data += ganerateWord(randomNumber)+ " "; 
    }


    para.innerText = data;
    
    para.setAttribute("class","paras");

    container.append(para);
}
