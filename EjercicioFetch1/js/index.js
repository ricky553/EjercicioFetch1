fetch('https://api.escuelajs.co/api/v1/users')
.then(response => response.json())
.then(data => {
    let cardContent = '';
    for (let item of data) {
        cardContent += `<div class="col">
                            <div class="card">
                                <img src="${item.avatar}" class="card-img-top" alt="avatar">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><strong>Nombre de usuario: </strong>${item.name}</li>
                                        <li class="list-group-item"><strong>Correo electrónico: </strong>${item.email}</li>
                                        <li class="list-group-item"><strong>Contraseña: </strong>${item.password || 'No disponible'}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`;
    }

    document.getElementById('cardList').innerHTML = `
    <div class="row row-cols-1 row-cols-md-3 g-4">
        ${cardContent}
    </div>`;

})