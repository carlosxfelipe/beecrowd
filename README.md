# Repositório de Algoritmos do Beecrowd

Este repositório contém soluções para problemas disponíveis na plataforma
[Beecrowd](https://judge.beecrowd.com/pt), desenvolvidas em diversas linguagens
de programação. O objetivo deste repositório é compartilhar aprendizado,
melhorar habilidades em lógica de programação e resolver desafios variados.

## O que é o Beecrowd?

O Beecrowd é uma plataforma online que oferece problemas de programação para que
desenvolvedores de diferentes níveis possam praticar, competir e melhorar suas
habilidades. Com uma ampla variedade de desafios organizados por níveis de
dificuldade, o Beecrowd é amplamente utilizado por estudantes e profissionais
para aprender algoritmos, estruturas de dados e técnicas de programação
competitiva.

## Observação sobre TypeScript no Beecrowd

A plataforma **Beecrowd** executa códigos TypeScript no ambiente **Node.js**,
porém os exemplos deste repositório foram desenvolvidos exclusivamente para
rodar com **Deno** e **não são compatíveis** com Node.js ou Bun sem adaptações.

Para executar um arquivo, use:

```bash
deno run typescript/iniciante/1000.ts
```

No **Deno**, ao importar arquivos locais ou remotos, é obrigatório informar a
**extensão completa do arquivo**.\
Isso significa que, diferente do Node.js ou Bun, não é possível omitir `.ts`,
`.js` ou outra extensão suportada.

### Aviso sobre o VS Code

Se você não tiver a extensão oficial do Deno instalada no VS Code, pode aparecer
o seguinte erro nos arquivos TypeScript:

```
Cannot find module 'https://deno.land/std@0.224.0/fmt/colors.ts' or its corresponding type declarations.ts(2307)
```

Para resolver, instale a extensão
[Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
e habilite-a no workspace.

#### Ajuste no settings.json

Após habilitar a extensão, você deve ajustar o seu `settings.json` para garantir que o formatador padrão do TypeScript utilize a extensão do Deno:

```json
"[typescript]": {
  "editor.defaultFormatter": "denoland.vscode-deno"
  // "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Formatação Automática (deno fmt)

O Deno possui um formatador nativo de código. Para formatar os arquivos TypeScript automaticamente, basta acessar a pasta `typescript` e usar o comando `deno fmt`:

```bash
cd typescript/
deno fmt
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se à vontade
para usar e modificar o conteúdo conforme necessário.
