const request = require('request');

function carteiras() {
  let options = {
    method: 'GET',
    url: 'https://api.infomoney.com.br/carteiras-acompanhamento',
    headers: {
      'cache-control': 'no-cache',
      Connection: 'keep-alive',
      Origin: 'https://www.infomoney.com.br',
      'Content-Type': 'application/json; charset=utf-8',
      Referer:
        'https://www.infomoney.com.br/mercados/ferramentas/carteira-de-acompanhamento',
      'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'User-Agent':
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function contacoes() {
  // tem que ser minúsculo sem o [Índice]
  const carteira = 'ibovespa'; //'ibrx50';

  const options = {
    method: 'GET',
    url:
      'https://api.infomoney.com.br/carteiras-acompanhamento/getstockfollow/0/0/' +
      carteira,
    headers: {
      'cache-control': 'no-cache',
      Connection: 'keep-alive',
      Origin: 'https://www.infomoney.com.br',
      'Content-Type': 'application/json; charset=utf-8',
      Referer:
        'https://www.infomoney.com.br/mercados/ferramentas/carteira-de-acompanhamento',
      'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'User-Agent':
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

module.exports = {
  carteiras,
  contacoes
};
