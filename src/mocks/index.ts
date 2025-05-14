import CamisetaPreta from '/camiseta-1.png'
import CamisetaPretaCostas from '/camiseta-1-costas.png'
import CamisetaRoxa from '/camiseta-2.png'
import CamisetaRoxaCostas from '/camiseta-2-costas.png'
import Caneca from '/caneca-1.png'
import CanecaCostas from '/caneca-2.png'

export const products = [
  {
    id: 1,
    name: "Camiseta Dev em Dobro",
    image: CamisetaPreta,
    price: 89,
    color: "preta",
    size: "M",
    description: "Esse produto é muito bonito",
    category: 'Camiseta'
  },
  {
    id: 2,
    name: "Camiseta Dev em Dobro",
    image: CamisetaRoxa,
    price: 89,
    color: "roxa",
    size: "M",
    description: "Esse produto é muito bonito",
    category: 'Camiseta'
  },
  {
    id: 3,
    name: "Caneca Dev em Dobro",
    image: Caneca,
    price: 29,
    color: 'branca',
    size: null,
    description: "Esse produto é muito bonito",
    category: 'Caneca'
  },
  {
    id: 4,
    name: "Camiseta Dev em Dobro",
    image: CamisetaPretaCostas,
    price: 89,
    color: "preta",
    size: "G",
    description: "Esse produto é muito bonito",
    category: 'Camiseta'
  },
  {
    id: 5,
    name: "Caneca Dev em Dobro",
    image: CanecaCostas,
    price: 29,
    color: "branca",
    size: null,
    description: "Esse produto é muito bonito",
    category: 'Caneca'
  },
  {
    id: 6,
    name: "Camiseta Dev em Dobro",
    image: CamisetaRoxaCostas,
    price: 89,
    color: "roxa",
    size: "P",
    description: "Esse produto é muito bonito",
    category: 'Camiseta'
  },
]

// Objeto: Estrutura de dados onde a gente pode armazenar conjuntos de chave e valor
// Array: Estrutura de dados onde armazenamos uma lista de elementos/itens de forma ordenada (índice)
