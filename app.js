
class Item {
    constructor(nombre, precio, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
  }
  

  const pocion = new Item("Poción de Vida", 100, "pocion.png");
  const espada = new Item("Espada", 180, "espada.png");
  const escudo = new Item("Escudo", 90, "escudo.png");
  
  
  const inventario = [];
  
 
  let oro = 500;
  

  const elOro = document.querySelector("#oro span");
  elOro.innerText = oro; 
  const elInventario = document.getElementById("inventario");
  
 
  function comprar(itemDelJuego) {
  
    if (oro - itemDelJuego.precio >= 0) {
      inventario.push(itemDelJuego);
      oro -= itemDelJuego.precio; 
      actualizarHTML();
    } else {
      alert(`No tenés el oro suficiente para comprar ${itemDelJuego.nombre}.`);
    }
  }
  
  
  function vender(nombreDelItem) {
 
    const itemEncontrado = inventario.find((item) => item.nombre == nombreDelItem);
  
   
    if (itemEncontrado) {
    
      oro += itemEncontrado.precio;
    
      const indice = inventario.indexOf(itemEncontrado);
      inventario.splice(indice, 1);
    
      actualizarHTML();
    }
  }
  

  function actualizarHTML() {
    elInventario.innerHTML = "";
    for (const itemDelJuego of inventario) {
      const li = `
      <li onclick="vender('${itemDelJuego.nombre}')">
        <img src="img/${itemDelJuego.imagen}" alt="${itemDelJuego.imagen}" />
      </li>
      `;
     
      elInventario.innerHTML += li;
    }
  
    elOro.innerText = oro;
  }