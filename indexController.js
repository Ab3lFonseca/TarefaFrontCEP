
document.getElementById('confirmBut').addEventListener('click', function() {
                const cep = document.getElementById('cepInput').value;
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('ruaInput').value = data.logradouro;
                        document.getElementById('bairroInput').value = data.bairro;
                        document.getElementById('ruaInput').style.display = 'block';
                        document.getElementById('bairroInput').style.display = 'block';
                        document.getElementById('numeroInput').style.display = 'block';
                    })
                    .catch(error => console.error('Erro ao buscar CEP:', error));
            });
    