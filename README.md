# Tarefa Front - Consulta de CEP

Este projeto é uma aplicação web simples desenvolvida para consultar informações de endereço a partir de um CEP brasileiro, utilizando a [API ViaCEP](https://viacep.com.br/).

## 🚀 Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Digite um CEP válido no campo de entrada.
3. Clique no botão **Confirmar**.
4. Os campos de rua, número (manual) e bairro serão preenchidos com as informações retornadas pela API.

## 📁 Estrutura do Projeto

- `index.html` — Estrutura da interface web.  
- `style.css` — Estilos visuais aplicados à página.  
- `indexController.js` — Lógica de integração com a API e manipulação da interface.

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **API ViaCEP** – [https://viacep.com.br](https://viacep.com.br)

## ⚠️ Observações

- O campo **número** deve ser preenchido manualmente, pois a API não retorna essa informação.
- É necessário estar conectado à internet para que a requisição à API ViaCEP funcione corretamente.

---

Desenvolvido para fins educacionais e de prática em integração com APIs públicas.