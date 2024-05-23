function getProductos() {
        const respuesta = fetch(`https://api.mercadolibre.com/sites/MLA/search?q=farmacia&limit=20#options`);

        //2 invocar
        respuesta
            .then(response => response.json())
            .then(response => renderProd(response))//fulfilled
            .catch(error => dibujarError(error))//rejected
      }

      function renderProd(response) {
        const productos = response.results;
        let rows = '';
        for(let prod of productos) {
            rows += `
            <tr>
                <td>${prod.title}</td>
                <td>
                  <img src="${prod.thumbnail}" alt="" class="img-fluid">
                </td>
            </tr>
            `
        }
        // document.getElementById("productos").innerHTML = rows;
        document.querySelector('#productos').innerHTML = rows;
    }    