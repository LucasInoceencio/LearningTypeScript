TYPESCRIPT

No index.html a gente faz referência a um único script, e o próprio navegador vai lendo esse script e conforme ele for precisando, ele vai buscando os demais scripts e executando os mesmos

Compilação é para traduzir o código typescript para javascript

O Typescript garante que nenhum código "errado" seja compilado, mas no fim ele gera um código javascript que contém as mesmas problemáticas quando não se usa Typescript. A diferença é que não terá nenhum lugar no seu código que estará fazendo algo errado, mas isso não impede que seja feito uma "interceptação" em runtime para fazer algo "errado"

Typescript fornece bastantes recursos de OO como herança e classe abstrata. Além disso tem tipo genéricos, modificadores protected, readonly e outros.

O modificador de acesso padrão é o public, ou seja, quando não colocamos nada significa é public.

No contexto de herança, a classe filha pode alterar o tipo do modificador de acesso de um método abstrato.