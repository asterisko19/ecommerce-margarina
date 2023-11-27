const productos = [
    { nombre: 'Margarina uso directo' , precio: 23000 },
    { nombre: 'Margarina Premium Hojaldre', precio: 23000 },
    { nombre: 'Margarina Premium Masa', precio: 23000 },
    { nombre: 'Margarina masas y batidos', precio: 23000 },
    { nombre: 'Margarina hojaldre suave', precio: 23000 },
    { nombre: 'Oleomargarina refinada nitrogenada', precio: 23000 },
    { nombre: 'Oleomargarina refinada', precio: 23000 },
    { nombre: 'Grasa Refinada', precio: 23000 },
];

function crearProductoHTML(producto, index) {
    return `
        <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src="../media/${producto.nombre.toLowerCase().replace(/ /g, '-')}.png" alt="${producto.nombre}" />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${producto.nombre}</h5>
                        $${producto.precio}
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <button class="btn btn-outline-dark mt-auto" onclick="agregarAlCarritoDesdeProductos(${index})">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
const productosContainer = document.getElementById('productos-container');
let row = document.createElement('div');
row.className = 'row';

productos.forEach((producto, index) => {
    if (index % 4 === 0 && index !== 0) {
        productosContainer.appendChild(row);
        row = document.createElement('div');
        row.className = 'row';
    }

    row.innerHTML += crearProductoHTML(producto, index);
});

productosContainer.appendChild(row);

function agregarAlCarritoDesdeProductos(index) {
    const producto = productos[index];
    agregarAlCarritoDesdeLista(producto);
}