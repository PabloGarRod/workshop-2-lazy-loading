const isIntersecting = (entry)=>{
    return entry.isIntersecting; //true si está en la pantalla
}

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    observer.unobserve(container);
}
const observer = new IntersectionObserver((entries)=>{
    entries
    .filter(isIntersecting) //filtramos las que isIntersecting retorna true
    .forEach(loadImage)
})


export const registerImage = (imagen) => {
    //IntersectionObserver --> Obervar imagen
    observer.observe(imagen)
}