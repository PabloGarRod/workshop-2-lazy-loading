const isIntersecting = (entry)=>{
    return entry.isIntersecting; //true si está en la pantalla
}

const accion = (entry) => {
    const nodo = entry.target;
    console.log('Hola');
    observer.unobserve(nodo);
}
const observer = new IntersectionObserver((entries)=>{
    entries
    .filter(isIntersecting) //filtramos las que isIntersecting retorna true
    .forEach(accion)
})


export const registerImage = (imagen) => {
    //IntersectionObserver --> Obervar imagen
    observer.observe(imagen)
}