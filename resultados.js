// ******************************** EXERCÍCIOS *******************************
// teste denilson

// 1- Crie uma função que liste todos os IDs  e os nomes dos produtos em estoque.

function listarProdutosEmEstoque(produtos) {
  return produtos.map(produto => ({ id: produto.id, nome: produto.nome }));
}

console.table(listarProdutosEmEstoque(produtos));


// 2- Crie uma função que liste todos os produtos em estoque, de acordo com a curva ABC (A, B ou C) selecionada pelo usuário.

function listarPorCurvaABC(produtos, curva) {
  return produtos
    .filter(produto => produto.curva_abc === curva.toUpperCase())
    .map(produto => ({ id: produto.id, nome: produto.nome, curva_abc: produto.curva_abc }));
}

console.table(listarPorCurvaABC(produtos, "A"));

// 3- Crie uma função que liste todos os produtos em estoque, de acordo com a rotatividade selecionada pelo usuário.

function listarPorRotatividade(produtos, rotatividade) {
  return produtos
    .filter(produto => produto.rotatividade === rotatividade.toLowerCase())
    .map(produto => ({ id: produto.id, nome: produto.nome, rotatividade: produto.rotatividade }));
}

console.table(listarPorRotatividade(produtos, "alta"));

// 4- Crie uma função que liste todos os produtos com base na seleção de rotatividade (alta, média ou baixa) e curva ABC (A, B ou C) pelo usuário.

function listarCurvaRotatividade(rotatividade, curva) {
let selecaoProdutos = produtos.filter((produto) => produto.rotatividade == rotatividade && produto.curva_abc == curva);
return selecaoProdutos
}
console.table(listarCurvaRotatividade("alta", "C"));


// 5- Crie uma função que identifique quais produtos precisam ser repostos com base nos critérios de rotatividade e curva ABC mencionados acima.

const estoque_minimo = {
  alta:  { A: 100, B: 80,  C: 60 },
  media: { A: 50,  B: 40,  C: 30 },
  baixa: { A: 20,  B: 15,  C: 10 },
};

function listarProdutosParaReposicao(produtos) {
  return produtos
    .filter(produto => {
      const minimo = estoque_minimo[produto.rotatividade][produto.curva_abc];
      return produto.estoque < minimo;
    })
    .map(produto => {
      const minimo = estoque_minimo[produto.rotatividade][produto.curva_abc];
      return {
        id: produto.id,
        nome: produto.nome,
        rotatividade: produto.rotatividade,
        curva_abc: produto.curva_abc,
        estoque_atual: produto.estoque,
        estoque_minimo: minimo,
        quantidade_repor: minimo - produto.estoque,
      };
    });
}

console.log(listarProdutosParaReposicao(produtos));

// 6- Crie uma função que calcule o valor total do estoque, considerando o preço de compra e a quantidade em estoque de cada produto.

function calcularValorTotalEstoque(produtos) {return produtos.reduce((total, produto) => {return total + (produto.preco_compra * produto.estoque);
  }, 0);
}

console.log(`Valor total do estoque: R$ ${calcularValorTotalEstoque(produtos).toFixed(2)}`);

// 7- Crie uma função que aplique um desconto de 10% no preço de venda de todos os produtos de baixa rotatividade e curva C e exiba a nova lista de produtos com os preços atualizados.
function aplicarDescontoBaixaRotatividadeCurvaC(produtos) {
  return produtos
    .filter(produto => produto.rotatividade === "baixa" && produto.curva_abc === "C")
    .map(produto => ({...produto, preco_venda_original: produto.preco_venda,
      preco_venda: parseFloat((produto.preco_venda * 0.90).toFixed(2)),
      desconto_aplicado: "10%"
    }));
}

console.table(aplicarDescontoBaixaRotatividadeCurvaC(produtos));

// 8- Crie uma função que permita ao usuário adicionar um novo produto ao estoque, solicitando as informações necessárias (nome, preço de compra, preço de venda, quantidade em estoque, rotatividade e curva ABC).

function adicionarNovoProduto(novoProduto) {
  produtos.push(novoProduto);
  console.log("Cadastro concluído com sucesso!");
  console.table(produtos);
}

adicionarNovoProduto({ id: produtos.length + 1, nome: "Vela Preta (8 un)", preco_venda: 7.0, preco_compra: 4.0, estoque: 40, rotatividade: "baixa", curva_abc: "C" });

adicionarNovoProduto({ id: produtos.length + 1, nome: "Pilhas AAA (2 un)", preco_venda: 16.0, preco_compra: 9.5, estoque: 85, rotatividade: "baixa", curva_abc: "B" });

// 9- Crie uma função que permita ao usuário remover um produto do estoque, solicitando o id a ser removido.

// 10- Crie uma função que permita ao usuário atualizar as informações de um produto existente no estoque, solicitando o id do produto e as novas informações a serem atualizadas.

