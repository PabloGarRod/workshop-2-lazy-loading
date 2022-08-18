const max = 122
const min = 1
const random = () => Math.floor(Math.random() * (max-min)) + min



const imagenNode = ()=>{
    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img')
    imagen.className = 'mx-auto'
    imagen.width = '320'
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`

    container.appendChild(imagen)
    return container;
}

const nuevaImagen = imagenNode();

const mountNode = document.getElementById('images')

const addButton = document.querySelector('button')
const addImage = () => {
  const newImage = imagenNode();
  mountNode.append(newImage)

}
addButton.addEventListener('click',addImage)


