function search() {
  const query = document.getElementById('search').value;
  const searchResults = document.getElementById('search-results');

  // Simples exemplo de busca
  if (query) {
    searchResults.innerHTML = `<p>Não temos isso no momento :( </p>`;
  } else {
    searchResults.innerHTML = `<p>Por favor, insira um termo de pesquisa.</p>`;
  }
}