# New Reforce Academia

Landing page em React, TypeScript e Tailwind CSS com Vite. Inclui header, hero, planos, horários, equipe, galeria, avaliações e banner final com contatos e rodapé. Fontes locais Anton, Inter e Caveat; ícones SVG Lucide.

## Executar

Requer Node.js 24 (validado com 24.19) e pnpm 11.25.0.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

O carregador nativo da configuração evita restrições do esbuild ao procurar diretórios ancestrais no ambiente Windows. O desenvolvimento usa a porta disponível indicada pelo Vite.

## Publicação no Netlify

Importe o repositório `strikercslago/Academia-New-Reforce` no Netlify, selecionando a branch `main`. O arquivo `netlify.toml` configura o comando `pnpm build` e a pasta publicada `dist`; Node 24 e a versão do pnpm também estão definidos no projeto. Não são necessárias variáveis secretas para o site atual.

Depois da conexão, novos pushes em `main` podem gerar publicações automáticas. Os arquivos de referência originais e as capturas de QA permanecem apenas no ambiente local; todas as imagens usadas pelo site estão em `public/`.

## Edição do conteúdo

- `src/data/plans.ts`: nomes, valores, descrições e ícones dos nove planos.
- `src/data/contact.ts`: WhatsApp e Instagram. O número informado foi preservado como `555494061628`, sem acrescentar dígitos. Se `whatsapp` ficar vazio, os botões usam o Instagram e adaptam o rótulo.
- `src/components/`: header, menu móvel, hero, benefícios, planos e contato.
- `src/styles/globals.css`: cores, composição, recortes e breakpoints.
- `src/data/openingHours.ts`: horários fornecidos no briefing da etapa 2.
- `src/data/gallery.ts`: fotografias e enquadramentos da equipe, equipamentos, galeria e imagem institucional.
- `src/data/navigation.ts`: âncoras compartilhadas pelo menu desktop e mobile.
- `src/styles/closing-sections.css`: estilos isolados das novas seções e ajustes da navegação.

Cada card abre o WhatsApp com uma mensagem específica. Não há envio automático. Valores apresentados são de referência, sem assumir periodicidade de cobrança, fidelidade ou condições contratuais.

## Imagens

Hero e Planos continuam com os enquadramentos dos previews da primeira etapa. A marca também foi aproveitada do preview, sem redesenho. Todo texto de interface, botão, preço e ícone permanece em HTML/SVG.

As seções finais agora usam as fotos enviadas pelo usuário em alta resolução, convertidas em WebP nas larguras 480 e 960 px com srcset. Os arquivos originais, o cartão da equipe e a prancha de elementos visuais foram preservados em references/. Não houve geração ou reconstrução de rostos. As publicações com frases aparecem integralmente na galeria, com texto alternativo correspondente. A galeria contém cinco imagens distintas e mantém controles de setas, teclado e toque.

O endereço confirmado é Rua Aldino Graeff, 67 — Boqueirão, Passo Fundo/RS, CEP 99025-500. Os dados e URLs do mapa estão centralizados em src/data/contact.ts. O painel incorpora Google Maps por consulta do endereço e oferece um link de rotas. Enquanto o serviço externo carrega, mostra a imagem real do mapa enviada pelo usuário, sem coordenadas inventadas. Na validação local o serviço não respondeu; a imagem alternativa e o link permanecem disponíveis.

## Verificação

- Build de produção e TypeScript.
- Navegador Edge via Playwright em 320, 360, 390, 430, 768, 1024, 1280, 1440 e 1920 px.
- Nove planos e valores, apenas um H1, imagens carregadas e ausência de overflow horizontal.
- Menu: abrir, fechar por Escape com retorno do foco, fechar ao navegar e clicar fora.
- Âncora de planos, URLs individuais de contato e ausência de exceções JavaScript.
- Foco visível, link para pular ao conteúdo e redução de movimento.

Os links usam os dados fornecidos. A existência de uma conta ativa no WhatsApp não foi confirmada por envio de mensagem.

### Etapa 2

Validada em 320, 390, 768, 1024, 1440 e 1920 px: ordem das seis seções, imagens carregadas, âncoras válidas, ausência de textos cortados e overflow horizontal, menu com Escape e retorno do foco, setas e limites do carrossel, Home/End e gesto de toque em contexto móvel. Sem exceções JavaScript. Build e TypeScript aprovados.

`HeroSection.tsx`, `PlansSection.tsx` e `globals.css` foram preservados integralmente (verificação SHA-256). A navegação foi ampliada para as seções implementadas; em tablet passa a usar o menu expansível para acomodar os novos links.

### Etapa 3 — Avaliações

- `src/data/reviews.ts`: 24 avaliações transcritas dos anexos, incluindo notas, datas relativas históricas e informações dos autores. Todas as notas visíveis nos 24 cards são cinco estrelas, conferidas individualmente. Alex Lang consta apenas na lista do briefing e fica fora da seção até recebermos uma captura com sua nota e data.
- O resumo de 4,8 e 79 avaliações é estático, conforme o anexo; não há consulta automática ao Google. O botão usa exatamente o link oficial fornecido pelo usuário e abre o perfil da academia, onde se pode avaliar.
- `ReviewsSection`, `ReviewCard`, `InfiniteReviewsMarquee` e `GoogleReviewsSummary` são componentes HTML; nenhum card é uma imagem. `src/styles/reviews.css` contém somente estilos da nova seção.
- As faixas ficam entre galeria e contato. As seções e estilos anteriores não foram alterados.
- Velocidades configuradas em `ReviewsSection.tsx`: 65 px/s para a direita e 55 px/s para a esquerda. O componente recebe `reviews`, `direction`, `speed` e `label`.
- Cada faixa mede a largura do conjunto, repete apenas para continuidade e aplica `translate3d` em `requestAnimationFrame` baseado no tempo decorrido. `ResizeObserver` conserva a posição proporcional no redimensionamento. As cópias técnicas ficam ocultas para leitores de tela.
- Arraste por Pointer Events em ambos os sentidos; `touch-action: pan-y` preserva a rolagem vertical. Setas, botão de pausa e barra de espaço oferecem controle pelo teclado. Perda de foco cancela o arraste; documento oculto ou faixa fora da tela cancela os frames. Movimento reduzido inicia as faixas paradas e permite retomada explícita.

Validações: 320, 360, 390, 430, 768, 1024, 1280, 1440 e 1920 px; 24 avaliações acessíveis sem duplicação; sem cortes de texto ou overflow; velocidades e direções independentes; pausa durante arraste; mouse nos dois sentidos; retorno contínuo; navegação por teclado; gesto horizontal e rolagem vertical móvel; passagem por ciclos completos sem lacunas; suspensão fora da tela e por visibilidade da aba; TypeScript e build. Scripts e capturas locais ficam em `qa/` (ignorado no Git).
