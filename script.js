const qrText = document.querySelector("#qrtext")
const qrImg = document.querySelector("#qrimg")
const btn = document.querySelector("#btn")

btn.addEventListener("click",(e)=>{
    
    if(qrText.value != ""){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value
    }
    else{
        window.alert("please enter a valid url....")
    }
    
})