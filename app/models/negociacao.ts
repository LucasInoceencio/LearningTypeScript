export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number) { }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    // Essa abordagem previne que o desenvolver manipula a _data que está privada
    // pois é retornado uma nova data que não tem referência com a data original
    // Mesmo a propriedade _data sendo privada, é possível chamar métodos da data,
    // como o _data.setDate(x);
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}