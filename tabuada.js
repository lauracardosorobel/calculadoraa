const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit, (e) =>{
    e.preventDefault()

    const Número = Number(frm.inNumero.value)
    let resposta = ""
    for(let 1 = 1; 1 <= 10; 1++){
        resposta = resposta + Número + " x " + 1 + " = " + (Número * 1) + "\n"
    }
    resp.innerText = resposta
    
})