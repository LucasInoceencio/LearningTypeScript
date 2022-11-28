import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    // Uma outra forma de declarar de array
    //private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // Outra forma de definir o retorno do método
    // lista(): readonly Negociacao[] {

    lista(): ReadonlyArray<Negociacao> {
        // Retorna uma nova lista com todos os itens da lista original
        // return [...this.negociacoes];

        // Retorna a própria lista, que é uma referência na memória
        // o que permite que façam alteração diretamente na lista original
        //return this.negociacoes;

        return this.negociacoes;
    }
}
