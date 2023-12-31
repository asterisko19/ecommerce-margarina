const productosDestacados = [
    { nombre: 'Margarina uso directo' , precio: 23000 },
    { nombre: 'Margarina Premium Hojaldre', precio: 23000 },
    { nombre: 'Margarina Premium Masa', precio: 23000 },
    { nombre: 'Grasa Refinada', precio: 23000 }
];

function crearProductoDestacadoHTML(producto, index) {
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
                        <button class="btn btn-outline-dark mt-auto" onclick="agregarAlCarritoDesdeDestacados(${index})">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
const productosDestacadosContainer = document.getElementById('productos-destacados-container');
let rowDestacados = document.createElement('div');
rowDestacados.className = 'row';

productosDestacados.forEach((producto, index) => {
    if (index % 4 === 0 && index !== 0) {
        productosDestacadosContainer.appendChild(rowDestacados);
        rowDestacados = document.createElement('div');
        rowDestacados.className = 'row';
    }

    rowDestacados.innerHTML += crearProductoDestacadoHTML(producto, index);
});

productosDestacadosContainer.appendChild(rowDestacados);

function agregarAlCarritoDesdeDestacados(index) {
    const producto = productosDestacados[index];
    agregarAlCarritoDesdeLista(producto, productosDestacados);
}