# Olimpíadas 2026 — Súmulas

Site de súmulas para a olimpíada escolar (4 dias, vários esportes). Cada súmula
pode ser **preenchida no navegador** e **impressa em folha A4**.

## Como usar

1. Abra o arquivo `index.html` no navegador (duplo clique).
2. Escolha o esporte para abrir a súmula.
3. Preencha os campos. Use os botões no topo:
   - **🖨️ Imprimir** — gera a versão limpa em A4 (oculta menus e botões).
   - **💾 Salvar rascunho** — guarda o preenchimento neste navegador.
   - **🧹 Limpar** — apaga todos os campos.

> Para imprimir várias súmulas em branco, é só abrir o esporte e clicar em Imprimir
> sem preencher nada.

## Esportes incluídos

| Esporte | Arquivo | Destaques da súmula |
|---|---|---|
| Futsal | `sumulas/futsal.html` | gols, cartões, faltas acumuladas por tempo |
| Vôlei | `sumulas/volei.html` | pontos por set, sets vencidos |
| Basquete | `sumulas/basquete.html` | pontos por período, faltas coletivas |
| Handebol | `sumulas/handebol.html` | gols, exclusões de 2 min, cartões |
| Tênis de Mesa | `sumulas/tenis-de-mesa.html` | individual/duplas, pontos por set |
| Dança | `sumulas/danca.html` | avaliação por jurados e critérios |
| Xadrez | `sumulas/xadrez.html` | resultado, lances, tempo e motivo |
| Teste de Cooper | `sumulas/teste-cooper.html` | corrida de 12 min, distância e VO₂máx |

## Estrutura

```
index.html               -> página inicial (hub)
sumulas/                 -> uma súmula por esporte
assets/css/style.css     -> visual + regras de impressão A4
assets/js/sumula.js      -> imprimir, limpar, salvar e adicionar linhas
```

## Personalizar

- **Nome do evento / datas:** edite o `index.html` (cabeçalho e os "Dia 1..4").
- **Cores:** altere as variáveis no topo de `assets/css/style.css` (`--azul`, `--ouro`).
- **Adicionar esporte:** copie `sumulas/generica.html`, ajuste os campos e crie
  um novo cartão no `index.html`.

## Publicar online (opcional)

Por ser um site estático, pode ser hospedado de graça no **GitHub Pages**:
suba os arquivos e ative Pages nas configurações do repositório.
