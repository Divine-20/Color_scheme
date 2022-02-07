for(let box of document.querySelector('#Boxes').children){
    box.addEventListener('click', (e)=>{
        navigator.clipboard.writeText(box.children[0].textContent)
        alert(`Copied the color ${box.children[0].textContent}`)
    })
}
for(let box of document.querySelector(".nextBoxes").children){
    box.addEventListener('click', (e)=>{
        navigator.clipboard.writeText(box.children[0].textcontent)
        alert(`copied the color ${box.children[0].textContent}`)
    })
}