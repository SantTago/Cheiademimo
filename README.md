# Cheia de Mimo Home — vitrine premium para GitHub Pages

Site em HTML, CSS e JavaScript puro, sem instalação, compilação ou banco de dados. Inclui a logo **original**, as **22 fotografias originais**, catálogo manual, busca de produtos, sacola de compras, opção de frente/verso e pedido pelo WhatsApp. Mantém a identidade em creme, terracota, marrom e verde-sálvia.

## 1. Onde editar os produtos — IMPORTANTE

Abra **`script.js`** em um editor de texto e procure `const PRODUTOS = [`. Cada bloco `{ ... }` é **um produto independente**. O site exibe **somente** os blocos dessa lista cujo `ativo` seja `true`. **Não procura novos arquivos na pasta `produtos`**. É seguro guardar imagens extras nessa pasta sem publicá-las no catálogo.

Exemplo de produto de frente e verso:

```js
{
  id: 23,                            // Número único: não repita o de outro produto
  nome: "Jogo Americano Floral",     // Nome exibido na loja e no pedido
  categoria: "Jogo americano",
  descricao: "Impermeável • Disponibilidade sob consulta",
  preco: 29.90,                      // Preço deste produto, com ponto decimal
  frente: "produtos/floral-frente.jpg", // Foto principal (obrigatória)
  verso: "produtos/floral-verso.jpg",   // Foto secundária (opcional)
  exibirVerso: true,                 // Habilita o botão para trocar a foto
  ativo: true,                       // false para ocultar sem excluir
},
```

Para cadastrar outro, **copie o bloco completo**, cole antes de `];`, dê outro `id` e preencha as informações. Se desejar, exclua blocos antigos ou mude `ativo: false` para desativar algum.

### Frente e verso: dois ajustes simples

Se o produto tiver somente uma foto:

```js
frente: "produtos/modelo-23.jpg",
verso: "",
exibirVerso: false,
```

Se tiver frente e verso:

```js
frente: "produtos/modelo-23-frente.jpg",
verso: "produtos/modelo-23-verso.jpg",
exibirVerso: true,
```

Os botões **Frente** e **Verso** aparecem somente quando `exibirVerso` estiver em `true` **e** o campo `verso` tiver um caminho. Ao clicar, a imagem é trocada. Sem foto de verso, aparece somente a foto principal. Se a foto de verso estiver com endereço incorreto, o site mantém a foto anterior e mostra um aviso.

Você pode usar caminhos relativos, como `produtos/nome.jpg`, ou links completos `https://...` (se o provedor de imagens permitir o uso no site). Evite renomear arquivos já cadastrados sem atualizar seu caminho; maiúsculas e minúsculas fazem diferença no GitHub Pages. Formatos de foto recomendados: JPG, PNG ou WebP. Para fotos nítidas e leves, use aproximadamente 1200 px no maior lado e comprima antes de publicar. **Não é necessário remover ou modificar as fotos originais.**

**Atenção ao preço:** a sacola e a mensagem para o WhatsApp usam o preço individual de cada produto. As frases promocionais de R$ 29,90 no banner, na abertura e na introdução do catálogo são textos fixos em `index.html`. Se os valores deixarem de ser iguais, atualize esses textos para não anunciar um preço incorreto.

## 2. Número do WhatsApp

Ainda no começo de `script.js`, procure:

```js
const CONFIG = {
  whatsapp: "5591991143369",
  mensagemWhatsApp: "Olá! Gostaria de conhecer os produtos da Cheia de Mimo Home.",
};
```

Troque o número se necessário, sempre com **55 + DDD + número**, sem espaços, parênteses ou hífen. Isso atualiza o botão flutuante, o número no rodapé e o fechamento da sacola. O pedido abre o WhatsApp com nome, quantidade e subtotal dos itens. **Pagamento e entrega são combinados diretamente pelo atendimento; não existe pagamento automático neste site.**

## 3. Carrossel com 4 vídeos — NOVO

A seção **Inspirações** aparece no site mesmo antes de você enviar os vídeos. Cada espaço usa temporariamente uma **foto original** e o texto **Em breve**; somente exibe **Assistir vídeo** quando o arquivo MP4 correspondente estiver acessível. Não há vídeos falsos no ZIP.

1. Abra a pasta `videos/` e insira seus vídeos reais, com nomes **exatamente** `Video1.mp4`, `Video2.mp4`, `Video3.mp4`, `Video4.mp4` (sem espaço ou acento; letras maiúsculas/minúsculas importam no GitHub Pages).
2. Os quatro slots estão cadastrados em `script.js`, em `const VIDEOS = [`. Troque título ou capa (`capa: "produtos/Produto 2.jpeg"`), caso deseje. Para esconder um slot, defina `ativo: false`.
3. Use MP4 H.264/AAC preferencialmente vertical 9:16 e comprimido. Os vídeos tocam somente após o visitante clicar, com controles, e os demais são pausados.
4. Você pode acrescentar mais vídeos copiando um item da lista `VIDEOS`, usando `Video5.mp4` etc., e colocando o arquivo correspondente na pasta.

O carrossel aceita arraste no celular, setas, marcadores e teclado. Se um vídeo não aparecer, confira grafia do nome, formato do arquivo e upload completo no GitHub.

## Faixa rotativa e abertura com logo — NOVO

A faixa superior se move continuamente da direita para a esquerda, sem parar quando o mouse passa sobre ela, e repete as mensagens sem emenda. **V4: corrigida a sobreposição de regras antigas de animação** (inclusive configurações globais de movimento). O movimento dura 14 s no computador e 12 s no celular por repetição completa. Para alterar a velocidade, edite `animation: faixa-esquerda 14s` ou `animation-duration: 12s` no **final** de `styles.css` (quanto menor, mais rápido). Há um pequeno botão de pausar/retomar à direita para quem preferir a faixa estática. As mensagens estão em `index.html` na classe `announcement-group`: **se editar a primeira, edite também a segunda com textos iguais**, pois ela é a cópia necessária para o loop.

A entrada mostra a logo original durante aproximadamente 1 segundo. A abertura desaparece automaticamente mesmo se o JavaScript falhar; não existe carregamento artificial de vários segundos.

## Mapa de Imperatriz — NOVO

A seção Localização incorpora um **mapa real do OpenStreetMap** focado em Imperatriz (MA), com link para abrir o mapa completo. O marcador representa a **cidade**, não a localização real da loja, pois o endereço comercial exato ainda não foi informado. A visualização do mapa requer internet. Para substituir pelo endereço preciso, edite o iframe e o link em `index.html` após confirmar o endereço.

## WhatsApp flutuante — NOVO

O botão verde acompanha a rolagem, adapta-se à tela pequena e utiliza o mesmo número configurado em `script.js > CONFIG.whatsapp` que o carrinho e o rodapé. Confirme esse número antes de publicar.

## 4. Como publicar no GitHub Pages

1. Envie **o conteúdo desta pasta**, incluindo `index.html`, `styles.css`, `script.js`, `assets/`, `produtos/` e `videos/`, à **raiz** do repositório. Não envie apenas o `.zip`.
2. No GitHub, acesse **Settings → Pages → Build and deployment**.
3. Escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
4. Aguarde a publicação e abra o endereço fornecido pelo GitHub. Alterações futuras no catálogo exigem atualizar `script.js` e enviar as novas fotos, caso existam.

Também é possível abrir `index.html` diretamente em um navegador, mas o teste final deve ser feito no GitHub Pages, pois algumas restrições de arquivos locais podem variar entre navegadores.

## Estrutura

```text
index.html          Estrutura, textos institucionais e banner do site
styles.css          Visual, faixa realmente rotativa, intro, mapa e responsividade
script.js           CONFIG, PRODUTOS, VIDEOS e funcionamento da loja
assets/             Logo original (preservada sem alterações)
produtos/           Fotos originais (22 arquivos incluídos)
videos/             Pasta pronta para Video1.mp4 a Video4.mp4 + instruções
README.md           Este guia
```

**Atenção:** este pacote é um projeto de site, pronto para subir no GitHub Pages, mas **não foi publicado na sua conta**. Sua loja antiga permanece intacta até você enviar os novos arquivos para o repositório desejado.
