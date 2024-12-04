

const form = document.querySelector("[data-form]");

async function createCard(evento){
    evento.preventDefault();

    const name =document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image= document.querySelector("[data-image]").value;     
    
   
    try{
        await conectaAPI.crearVideo(name, price, image)
    
        window.location.href=""
    }catch(e){
        alert(e);
    }
}

form,addEventListener("submit",evento=>createCard(evento));