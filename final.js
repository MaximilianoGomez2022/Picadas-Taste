'use strict';

const d = document;

let carrito = d.querySelector('#carrito'),
	body = d.querySelector('header'),
	carro = { productos: [], cantidad: [], total:0,},
	mostrar = d.querySelector('#mostrar'),
	cont = 0,
	circuloRojo = d.querySelector('#imgcarrito p');

	if(localStorage.carro) {
		carro = JSON.parse(localStorage.carro)
	
		for (const cantidad of carro.cantidad) {
			cont += cantidad;
		}
		console.log(cont)
		circuloRojo.innerHTML = cont;
	} else {
		localStorage.carro = JSON.stringify(carro)
	}

let listadoDeProductos = [

    {
        'imagen': 'img/original-225.jpg',
        'Nombre': 'Coca Cola 2,25 lts.',
        'Precio': 600,
        'Descripcion': 'Gaseosa coca cola de sabor original. 2,25 lts.',
        'categoria': 'bebidas',
        'id': '1',
    },
    {
        'imagen': 'img/solo-queso-1.jpg',
        'Nombre': 'Extra Gruyere',
        'Precio': 2900,
        'Descripcion': 'Picada de solo queso para 4 personas. Contiene Queso gruyere, mar del plata, queso fresco, cheddar. Pan en rodajas',
        'categoria': 'soloqueso',
        'id': '2',
    },
    {
        'imagen': 'img/especial.jpg',
        'Nombre': 'Picada especial',
        'Precio': 2500,
        'Descripcion': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis modi iusto a nostrum dolores optio recusandae quibusdam in, perferendis ex neque nam tempora debitis dignissimos, nulla voluptatibus quod, ipsum reprehenderi Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere optio debitis voluptatem magnam assumenda doloribus sit! Ea, quam! Rem facilis provident magni illum amet ab id obcaecati voluptas ducimus',
        'categoria': 'sintaac',
        'id': '3',
    },
    {
        'imagen': 'img/sprite-225.jpg',
        'Nombre': 'Sprite sin azúcar 2,25 lts',
        'Precio': 700,
        'Descripcion': 'Gaesosa Sprite sin azúcar de 2,25 lts',
        'categoria': 'bebidas',
        'id': '4',
    },

    {
        'imagen': 'img/solo-queso-2.jpg',
        'Nombre': 'Solo Queso Familiar',
        'Precio': 3000,
        'Descripcion': 'Picada de solo queso para 4 personas. Contiene Queso gruyere, mar del plata, queso fresco, cheddar, Adler. Pan en rodajas, scons. ',
        'categoria': 'soloqueso',
        'id': '5',
    },
    {
        'imagen': 'img/light-15.jpg',
        'Nombre': 'Coca cola light 1,5 lts',
        'Precio': 500,
        'Descripcion': 'Coca cola light 1,5 lts',
        'categoria': 'bebidas',
        'id': '6',
    },
    {
        'imagen': 'img/imperial-golden-710.jpg',
        'Nombre': 'Cerveza Imperial Golden',
        'Precio': 250,
        'Descripcion': 'Cerveza en lata Imperial golden. 710cm3',
        'categoria': 'bebidas',
        'id': '7',
    },
    {
        'imagen': 'img/imperial-lagger-710.jpg',
        'Nombre': 'Cerveza Imperial Lagger',
        'Precio': 250,
        'Descripcion': 'Cerveza en lata Imperial lagger. 710cm3',
        'id': '8',
    },
	{
        'imagen': 'img/familiar.jpg',
        'Nombre': 'Picada Familiar',
        'Precio': 3500,
        'Descripcion': 'Cerveza en lata Imperial lagger. 710cm3',
        'id': '9',
    },
];

let filtrosDiv = d.createElement('div');
filtrosDiv.setAttribute('id', 'filtrosDiv')
carrito.appendChild(filtrosDiv);

let btnQueso = d.createElement('button');
btnQueso.innerHTML = 'Solo queso';
filtrosDiv.appendChild(btnQueso);
btnQueso.className = 'filtros';
btnQueso.dataset.filtro = 'soloqueso';
btnQueso.dataset.oferta = 'img/oferta-solo-queso.jpg';
btnQueso.dataset.tablet = 'img/ofertas-tab-q.png';
btnQueso.dataset.mobile = 'img/ofertas-mob-q.png';

let btnSinTaac = d.createElement('button');
btnSinTaac.innerHTML = 'Sin TAAC';
filtrosDiv.appendChild(btnSinTaac);
btnSinTaac.className = 'filtros';
btnSinTaac.dataset.filtro = 'sintaac';
btnSinTaac.dataset.oferta = 'img/oferta-sin.jpg';
btnSinTaac.dataset.tablet = 'img/ofertas-tab-sin.png';
btnSinTaac.dataset.mobile = 'img/ofertas-mob-sin.png';

let btnBebidas = d.createElement('button');
btnBebidas.innerHTML = 'Bebidas';
filtrosDiv.appendChild(btnBebidas);
btnBebidas.className = 'filtros';
btnBebidas.dataset.filtro = 'bebidas';
btnBebidas.dataset.oferta = 'img/oferta-bebidas.jpg';
btnBebidas.dataset.tablet = 'img/ofertas-tab-beb.png';
btnBebidas.dataset.mobile = 'img/ofertas-mob-beb.png';

// Div row
let div1 = d.createElement("div");
div1.className = 'row';
div1.setAttribute('id','contenedorProductos');
carrito.appendChild(div1);

function Recorrer(parametro) {
	div1.innerHTML = "";
	for (let producto of parametro) {

		let div2 = d.createElement("div");
		div2.className = 'col-md-4 borde-verde producto';
		div2.style.margin = "20px auto";
		div1.appendChild(div2);
	
		let img = d.createElement("img");
		img.src = producto.imagen;
		div2.appendChild(img);
	
		// Texto producto
	
		let divTexto = d.createElement('div');
		divTexto.className = 'divTexto'
		div2.appendChild(divTexto);
	
		let h3 = d.createElement('h3');
		h3.innerHTML = producto.Nombre
		divTexto.appendChild(h3);
	
		let p = d.createElement('p');
		p.innerHTML = 'Precio $ '
		p.innerHTML += producto.Precio
		divTexto.appendChild(p);
	
		// Ver Descripción
	
		let verDescr = d.createElement('p');
		verDescr.innerHTML = '<b>Ver descripcion</b>';
		verDescr.addEventListener ('click', (e) => {
			let dOculta = d.createElement('p');
			dOculta.innerHTML = producto.Descripcion;
			div2.appendChild(dOculta);
	
			verDescr.remove();
	
			let verMenos = d.createElement('p');
			verMenos.innerHTML = '<b>Ver menos</b>';
			div2.appendChild(verMenos);
			
			verMenos.addEventListener('click', (e) => {
				dOculta.remove();
				verMenos.remove();
				div2.appendChild(verDescr);
			})
			
		});
		
		divTexto.appendChild(verDescr);
		
	
		//botones
	
		let divBotones = d.createElement('div');
		div2.appendChild(divBotones);
		divBotones.setAttribute('class', 'divBotones')
	
		let btn = d.createElement('button');
		btn.innerHTML = 'Agregar';
		divBotones.appendChild(btn);
		btn.className = 'agregar';
		btn.dataset.identifiacdor = producto.id;
		btn.dataset.precio = producto.Precio;
		btn.dataset.nombre = producto.Nombre;
	
		let btnQuitar = d.createElement('button');
		btnQuitar.innerHTML = 'Quitar';
		divBotones.appendChild(btnQuitar);
		btnQuitar.className = 'quitar';
		btnQuitar.dataset.identificador = producto.id;
		btnQuitar.dataset.precio = producto.Precio;
		btn.dataset.nombre = producto.Nombre;
	
		// Modal con Descrpcion del producto cuando click en la imagen
	
		img.addEventListener ('click', (e) => {
	
			let divModal = d.createElement('div');
			divModal.className = 'big';
			divModal.addEventListener ('click', (e) => {
				d.querySelector('.big').remove();
			})
			d.body.appendChild(divModal);
	
			let divContainer = d.createElement('div');
			divContainer.className = 'container';
			divModal.appendChild(divContainer);
	
			let divRow = d.createElement('div');
			divRow.className = 'row';
			divContainer.appendChild(divRow);
	
			let divCol9 = d.createElement('div');
			divCol9.className = 'col-md-9 mt-5 text-center';
			divRow.appendChild(divCol9);
	
			let divCol3 = d.createElement('div');
			divCol3.className = 'col-md-3 mt-5 text-center';
			divRow.appendChild(divCol3);
		
			let imagenModal = d.createElement('img');
			imagenModal = img.cloneNode();
			divCol9.appendChild(imagenModal);
		
			let p3 = d.createElement('p');
			p3.innerHTML = producto.Descripcion;
			divCol3.appendChild(p3);
	
			let p4 = d.createElement('p');
			p4.innerHTML = `Precio: $${producto.Precio}`;
			divCol3.appendChild(p4);
	
			let cerrar = d.createElement('a');
			cerrar.className = 'btn btn-secondary';
			cerrar.href = '#carrito';
			cerrar.innerHTML = 'Cerrarx';
			divCol3.appendChild(cerrar);
	
			cerrar.addEventListener('click', (e) => {
				d.querySelector('.big').remove();
			})
	
		})
		
	};
}

Recorrer(listadoDeProductos);



let btnsAgregar = d.querySelectorAll('.agregar');
let btnsQuitar = d.querySelectorAll('.quitar');

for (let btn of btnsAgregar) {
	btn.onclick = function() {
		let id = parseInt(this.dataset.identifiacdor);
		let precio = parseInt(this.dataset.precio); 
		let indice = carro.productos.indexOf(id);
		cont++;
		if (indice == -1) {
			carro.productos.push(id);
			carro.cantidad.push(1);
		} else {
			carro.cantidad[indice]++;
		}
		carro.total = parseInt(carro.total) + precio;
		mostrar.innerHTML = `	<p>Productos : ${carro.productos}</p>
								<p>Cantidad : ${carro.cantidad}</p>
								<p>Total : ${carro.total}</p>`;
		circuloRojo.innerHTML = cont;
		localStorage.carro = JSON.stringify(carro);
	}
}



for (let btnq of btnsQuitar) {

	btnq.onclick = function() {
		console.log('hola')
		let id = parseInt(this.dataset.identificador);
		let precio = parseInt(this.dataset.precio); 
		let indice = carro.productos.indexOf(id);
		if (indice != -1) {
			if(carro.cantidad[indice] > 0) {
				carro.cantidad[indice]--;
				carro.total = parseInt(carro.total)-precio;
				--cont;
			};
		}
		mostrar.innerHTML = `	<p>Productos : ${carro.productos}</p>
								<p>Cantidad : ${carro.cantidad}</p>
								<p>Total : ${carro.total}</p>`;
		circuloRojo.innerHTML = cont;
		localStorage.carro = JSON.stringify(carro)

		}	
}

let verCarrito = d.createElement('button');
verCarrito.className = 'agregar';
verCarrito.id = 'verCarrito'
verCarrito.innerHTML = 'Ver Detalle de Carrito';
carrito.appendChild(verCarrito);

verCarrito.addEventListener ('click', (e) => {

	let divModal = d.createElement('div');
	divModal.className = 'checkout';
	d.body.appendChild(divModal);

	let divContainer = d.createElement('div');
	divContainer.className = 'container';
	divModal.appendChild(divContainer);

	let h2 = d.createElement('h2');
	h2.innerHTML = 'Detalle del carrito de compras';
	h2.className = 'mt-5 mb-3';
	divContainer.appendChild(h2);

	let ul = d.createElement('ul');
	ul.className = 'ulDetalle';
	divContainer.appendChild(ul);

	for (let i = 0; i < carro.productos.length; i++) {
		let productoId = carro.productos[i];
		let cantidad = carro.cantidad[i];
		for (const prod of listadoDeProductos) {
			if(prod.id == productoId ) {
				console.log(prod.Nombre, prod.Precio, 'cantidad', cantidad)
				let li = d.createElement('li');
				let p = d.createElement('p')
				li.appendChild(p)
				p.innerHTML = `${prod.Nombre} $${prod.Precio} cantidad : ${cantidad}`
				li.dataset.cantidad = cantidad
				ul.appendChild(li)

				let img = d.createElement('img')
				img.src = prod.imagen;
				img.className = 'imgChica'
				li.appendChild(img)
			}
		}
	}

	for (const li of d.querySelectorAll('li[data-cantidad]')) {
		console.log(li)
		if(li.dataset.cantidad == 0) {
			li.remove()
		}

	}

	console.log('total', carro.total)

	let liTotal = d.createElement('li')
	liTotal.innerHTML = `Total : ${carro.total}`
	ul.appendChild(liTotal)

	let checkout = d.createElement('button');
	checkout.innerHTML = 'Checkout';
	checkout.className = 'agregar';
	divContainer.appendChild(checkout);

	let cerrar = d.createElement('button');
	cerrar.className = 'quitar';
	cerrar.innerHTML = 'Volver';
	divContainer.appendChild(cerrar);

	cerrar.addEventListener('click',(e) => {
		d.querySelector('.checkout').remove()
	})

	checkout.addEventListener('click', (e)=>{
		let divModal = d.createElement('div');
		divModal.className = 'checkout';
		divModal.id = 'pago';
		d.body.appendChild(divModal);
	
		let divContainer = d.createElement('div');
		divContainer.className = 'container';
		divModal.appendChild(divContainer);
	
		let h2 = d.createElement('h2');
		h2.innerHTML = 'Efectuar Pago';
		h2.className = 'mt-5';
		divContainer.appendChild(h2);
	
		let divRow = d.createElement('div');
		divRow.className = 'row';
		divContainer.appendChild(divRow);
	
		let divCol9 = d.createElement('div');
		divCol9.className = 'col-md-9 mt-5 text-center';
		divRow.appendChild(divCol9);
	
		let divCol3 = d.createElement('div');
		divCol3.className = 'col-md-3 mt-5';
		divCol3.id = 'importe'
		divRow.appendChild(divCol3);

		let formPago = d.createElement('form')
		formPago.id = 'formPago'
		divCol9.appendChild(formPago)

		let div1 = d.createElement('div')
		div1.id = 'div1'
		formPago.appendChild(div1)

		let div2 = d.createElement('div')
		div2.id = 'div2'
		formPago.appendChild(div2)

		let div3 = d.createElement('div')
		div3.id = 'div3'
		formPago.appendChild(div3)

		let div4 = d.createElement('div')
		div4.id = 'div4'
		formPago.appendChild(div4)

		let input1 = d.createElement('input')
		input1.innerHTML = 'Nombre y apellido'
		input1.id = 'input-nombre'
		input1.placeholder = 'Nombre y apellido'
		div1.appendChild(input1)

		let input2 = d.createElement('input')
		input2.innerHTML = 'Teléfono'
		input2.id = 'input-tel'
		input2.type = 'number'
		input2.placeholder = 'Ingrese su teléfono'
		div2.appendChild(input2)

		let input3 = d.createElement('input')
		input3.innerHTML = 'Lugar de entrega'
		input3.id = 'input-lugar'
		input3.placeholder = 'Lugar de Entrega'
		div3.appendChild(input3)

		let input4 = d.createElement('input')
		input4.innerHTML = 'Fecha de entrega'
		input4.type = 'date'
		input4.id = 'input-fecha'
		input4.placeholder = 'Fecha de entrega'
		div4.appendChild(input4)

		let select = d.createElement('select')
		formPago.appendChild(select)

		let option1 = d.createElement('option')
		option1.innerHTML = 'Efectivo'
		select.appendChild(option1)

		let option2 = d.createElement('option')
		option2.innerHTML = 'Tarjeta'
		select.appendChild(option2)

		let option3 = d.createElement('option')
		option3.innerHTML = 'Mercago Pago'
		select.appendChild(option3)

		let pagar = d.createElement('button')
		pagar.innerHTML = 'Pagar'
		pagar.className = 'agregar'
		pagar.type = 'button'
		formPago.appendChild(pagar)

		let volver = d.createElement('button');
		volver.className = 'quitar';
		volver.innerHTML = 'Volver';
		formPago.appendChild(volver);

		let h3 = d.createElement('h3')
		h3.innerHTML = 'Importe'
		h3.className = 'mb-5'
		divCol3.appendChild(h3)

		let p = d.createElement('p')
		p.innerHTML = 'Total a pagar'
		divCol3.appendChild(p)

		let montoTotal = d.createElement('p')
		montoTotal.innerHTML = `$ ${carro.total}`
		divCol3.appendChild(montoTotal)
	
		volver.addEventListener('click',(e) => {
			d.querySelector('#pago').remove()
		})

		pagar.addEventListener('click',(e) => {

			let pError1 = d.createElement('p')
			pError1.innerHTML = ''
			let pError2 = d.createElement('p')
			pError2.innerHTML = ''
			let pError3 = d.createElement('p')
			pError3.innerHTML = ''

			if(d.querySelector('#input-nombre').value === ''){			
			pError1.innerHTML = 'Completá con tu nombre y apellido'
			pError1.className ='pError'
			div1.appendChild(pError1)
			console.log(pError1)
			}  
			
			if(d.querySelector('#input-tel').value === '') {
				pError2.innerHTML = 'Tenés que ingresar tú número de teléfono'
				div2.appendChild(pError2)
				pError2.className ='pError'
				console.log(pError2)
			} 
			
			if(d.querySelector('#input-lugar').value === '') {
				pError3.innerHTML = 'Tenés que ingresar el lugar de entrega'
				div3.appendChild(pError3)
				pError3.className ='pError'
				console.log(pError3)
			}	
			
			if(d.querySelector('#input-lugar').value !== '' && d.querySelector('#input-tel').value !== '' && d.querySelector('#input-nombre').value !== '' ) {
				let divPago = d.createElement('div');
				divPago.className = 'checkout';
				divPago.id = 'divPago'
				body.appendChild(divPago);

				let imgGracias = d.createElement('img'); 
				imgGracias.src = 'img/gracias.png'
				imgGracias.className = 'mt-5 mb-3'
				divPago.appendChild(imgGracias)

				let h2 = d.createElement('h2');
				h2.innerHTML = 'Gracias por tu compra, el pago se realizó correctamente !'
				divPago.appendChild(h2)

				let a = d.createElement('a')
				a.innerHTML = 'Hacé click acá para seguir navegando'
				a.href = '#carrito'
				divPago.appendChild(a)

				a.addEventListener('click', (e) =>{
					d.querySelector('#divPago').remove()
					d.querySelector('#pago').remove()
					d.querySelector('.checkout').remove()
				})

			}

			
		})
	})


})




//FILTROS

for (let btn of d.querySelectorAll('.filtros')) {

	btn.addEventListener('click', function (e) {
		let filtro = this.dataset.filtro;
		let filtrarqueso = listadoDeProductos.filter(soloqueso);
		
		function soloqueso(producto) {			
			if(producto.categoria === filtro) {
				return true;
			}
	}
	Recorrer(filtrarqueso);

	let divModal = d.createElement('div');
	divModal.className = 'oferta';
	d.body.appendChild(divModal);
	let timeout
		timeout = setTimeout(alertFunc, 10000);	  
	  function alertFunc() {
		divModal.remove();
	  }

	let oferta = this.dataset.oferta;
	let tablet = this.dataset.tablet
	let mobile = this.dataset.mobile
	let figure = d.createElement('figure')
	let picture = d.createElement('picture')
	let source = d.createElement('source')
	let source2 = d.createElement('source')
	source.setAttribute('media', '(max-width: 768px)')
	source.setAttribute('srcset', tablet)
	source2.setAttribute('media', '(max-width: 445px)')
	source2.setAttribute('srcset', mobile)
	let imgOferta = d.createElement('img');
	imgOferta.src = oferta;
	picture.appendChild(source2)
	picture.appendChild(source)
	picture.appendChild(imgOferta)
	figure.appendChild(picture)
	divModal.appendChild(figure)

	let segundos = 10;
	let divRestante = d.createElement('div')
	divRestante.id = 'restante'
	let pRestante = d.createElement('p')
	divRestante.appendChild(pRestante)
	divModal.appendChild(divRestante)
	let res = d.querySelector('#restante p')
	res.innerHTML = `La oferta desaparecerá en ${segundos}`;


	let tempo = setInterval(()=>{
		--segundos;	
		res.innerHTML = `La oferta desaparecerá en ${segundos}`;
	},1000)

	if (segundos == 0) {
		clearInterval(tempo)
	}
	
} )}


/*
<figure>                  
<picture >
	<source media="(max-width: 576px)" srcset="img/banner-cel.jpg">
	<source media="(max-width: 768px)" srcset="img/banner-tablet.jpg">
	<img src="img/banner-1.jpg" class="d-block w-90" alt="banner-taste">
</picture>
</figure> */















