export abstract class View<T> {
    protected element: HTMLElement;
    private scape = false;

    constructor(selector: string, scape?: boolean) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
            if (scape)
                this.scape = scape;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM.`);
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}