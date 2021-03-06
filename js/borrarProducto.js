function borrarProducto(id, nombre){
    Swal.fire({
        title: `¿Estas seguro de eliminar el producto ${nombre}?`,
        text: "¡Esta accion no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
        }).then((result) => {
        if (result.isConfirmed) {
            confirmarEliminar(id, nombre);
        }
    })
}

function confirmarEliminar(id, nombre){
    const url = `https://kameshop-api.herokuapp.com/productos/${id}`;
    var token = localStorage.getItem('token')
    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8", 
            "Authorization": 'BEARER '+token //Agregado
        }
    })
    .then(response => response.json())
    .then(json => {    
        Swal.fire({
            text:'¡Eliminado!',
            title:`El producto ${nombre} ha sido eliminado`,
            icon:'success'
        }).then(function(){
            window.location.href = "https://daw2-lopezcarod22.github.io/kameshop.github.io";
        })
    })
    .catch(err => console.log(err));
}

export {borrarProducto}