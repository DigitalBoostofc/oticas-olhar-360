# 🎨 PROMPT PARA CLAUDE (claude.ai) — DESIGN DA LANDING PAGE
**Cole este prompt inteiro no Claude pelo navegador para gerar a landing page completa em HTML + Tailwind.**

---

## 📋 PROMPT COMPLETO (copiar daqui ⬇️)

```
Você é um designer de UI sênior especializado em landing pages de alta
conversão para o nicho de saúde/varejo local. Vou te dar um briefing
COMPLETO e quero que você gere uma landing page real, em HTML único
com Tailwind CSS via CDN, pronta para eu salvar como index.html e abrir
no navegador.

═══════════════════════════════════════════════════════════════════
📌 CLIENTE
═══════════════════════════════════════════════════════════════════

Nome: Óticas Olhar 360°
Localização: Camocim — Ceará (cidade litorânea, sol forte o ano todo)
Segmento: Ótica + exame de vista
Público: Multigeracional (jovens, adultos e idosos de Camocim e região)
Objetivo da landing: Capturar leads via quiz de 6 perguntas
                     → enviar WhatsApp ao final

═══════════════════════════════════════════════════════════════════
🎨 IDENTIDADE VISUAL (OBRIGATÓRIA — siga à risca)
═══════════════════════════════════════════════════════════════════

PALETA DE CORES:
- Amarelo Solar:    #F5B41A  → CTAs, destaques, brinde
- Azul Petróleo:    #3D5B7A  → Headlines, tipografia principal, fundos escuros
- Azul Teal:        #3FA9B9  → Acentos, ícones, hover, detalhes
- Branco:           #FFFFFF  → Background principal
- Cinza claro:      #F8F9FA  → Background alternado de blocos

LOGO: O logo é um olho azul-petróleo dentro de um círculo formado por
duas setas curvas teal/amarelas (representa "360°"). Use o seguinte
placeholder no HTML:
<div class="logo-placeholder">[LOGO ÓTICAS OLHAR 360°]</div>
(Vou substituir pela imagem real depois.)

TIPOGRAFIA:
- Headlines: Montserrat ExtraBold (800/900) ou Inter Black
- Corpo: Inter Regular ou Open Sans
- Importar via Google Fonts no <head>

TOM VISUAL: Profissional + acolhedor + moderno. Nada infantil. Nada
corporativo frio. Equilíbrio entre confiança técnica (saúde) e calor
humano (cidade do interior).

═══════════════════════════════════════════════════════════════════
🏗️ ESTRUTURA DA PÁGINA (8 seções, na ordem)
═══════════════════════════════════════════════════════════════════

────────────────────────────────────────────────
SEÇÃO 1 — HEADER FIXO (sticky no topo)
────────────────────────────────────────────────
- Fundo branco com sombra leve
- Logo à esquerda
- À direita: telefone/WhatsApp visível + botão pequeno "Fazer Diagnóstico"
- Em mobile: hamburger menu

────────────────────────────────────────────────
SEÇÃO 2 — HERO (above-the-fold, tela cheia)
────────────────────────────────────────────────
Layout: 2 colunas no desktop (texto esquerda, imagem/mockup direita).
        Empilhado no mobile.

Background: branco com um leve degradê suave para azul-teal-claro
            no canto direito superior.

Coluna esquerda:
  - Tag pill no topo (azul-teal claro): "✨ DIAGNÓSTICO GRATUITO · 30 SEGUNDOS"
  - H1 (Montserrat ExtraBold, azul petróleo, 48-64px desktop):
    "A maioria das pessoas em Camocim está forçando a vista
     todos os dias — e descobre tarde demais."
  - Sub (Inter, cinza-azulado, 18-20px):
    "Faça o Diagnóstico 360° de 30 segundos e descubra, em 6 perguntas
     simples, se seus olhos estão silenciosamente pedindo socorro."
  - CTA principal (botão grande):
    Cor: amarelo solar #F5B41A
    Texto: azul petróleo #3D5B7A, peso bold
    Conteúdo: "🟡 QUERO MEU DIAGNÓSTICO 360° AGORA →"
    Hover: leve elevação (shadow lg) + brilho
    Animação: pulse sutil
  - Linha de confiança abaixo (ícones check verdes pequenos):
    "✓ Análise gratuita   ✓ 100% online   ✓ Resultado na hora"
  - Texto pequeno cinza:
    "+1.847 pessoas em Camocim já fizeram esta semana"

Coluna direita:
  - Mockup de celular flutuante (use SVG ou div estilizada simulando
    iPhone) mostrando uma tela do quiz com:
    • Logo Olhar 360° no topo
    • Pergunta de exemplo: "Você sente cansaço nos olhos no fim do dia?"
    • 4 opções (verde/amarelo/laranja/vermelho)
    • Barra de progresso amarela "1/6"
  - Adicione 2-3 elementos decorativos flutuantes (círculos teal,
    asterisco amarelo) ao redor pra dar movimento

────────────────────────────────────────────────
SEÇÃO 3 — IDENTIFICAÇÃO DO PROBLEMA
────────────────────────────────────────────────
Background: branco
Centralizado, max-width 800px

H2 (azul petróleo): "Você se reconhece em algum desses sinais?"

Grid 2x3 de cards (desktop) / 1 coluna (mobile):
Cada card tem:
  - Ícone grande no topo (line-icon, cor azul teal)
  - Texto curto em destaque
Cards:
  1. 👁️ "Olhos pesados, ardendo ou lacrimejando no fim do dia"
  2. 📱 "Mais de 4 horas por dia em telas"
  3. 🤕 "Dores de cabeça frequentes sem explicação"
  4. 🔍 "Aperta os olhos pra ler placas e mensagens"
  5. 😴 "Acorda com a vista cansada"
  6. 📅 "Mais de 2 anos sem fazer exame de vista"

Box de alerta abaixo (fundo azul petróleo, texto branco):
  "⚠️ Marcou 2 ou mais? Sua visão está dando um aviso silencioso.
  E quando o aviso vira sintoma, o estrago pode já estar feito."

────────────────────────────────────────────────
SEÇÃO 4 — A VERDADE INCONVENIENTE
────────────────────────────────────────────────
Background: cinza claro #F8F9FA
H2 (azul petróleo, centralizado):
  "A maioria das pessoas só vai ao oftalmologista quando já não enxerga."

Parágrafo grande, max-width 700px, centralizado:
  "O olho humano é um órgão que se ADAPTA. Ele compensa, força,
   ajusta — até que um dia simplesmente para de compensar.
   Quando isso acontece, boa parte dos danos não tem mais como reverter."

4 estatísticas em linha (desktop) / coluna (mobile), com números grandes
em amarelo solar:
  • "70% das pessoas têm algum erro refrativo não corrigido"
  • "+8h/dia é o tempo médio em telas no Brasil"
  • "2 anos: tempo médio que se adia o exame de vista"
  • "85% dos casos têm solução simples se detectados cedo"

────────────────────────────────────────────────
SEÇÃO 5 — A SOLUÇÃO (apresentação do quiz)
────────────────────────────────────────────────
Background: azul petróleo #3D5B7A (texto branco)
Centralizado, padding generoso

Tag pill amarela: "🎯 EXCLUSIVO ÓTICAS OLHAR 360°"
H2 (branco): "Diagnóstico 360° em 30 Segundos"
Sub branco com 60% opacidade:
  "6 perguntas. Resultado personalizado. E uma surpresa pra quem
   se encaixa em um dos perfis de risco."

4 bullets em grid 2x2 (ícones amarelos):
  ✅ "Em qual dos 3 PERFIS DE RISCO você se encaixa"
  ✅ "Quais sinais do seu dia indicam fadiga visual"
  ✅ "O que fazer AGORA pra evitar problemas maiores"
  ✅ "Liberação do EXAME GRÁTIS + ÓCULOS DE SOL DE BRINDE"

CTA grande centralizado (amarelo solar com texto petróleo):
  "🟡 COMEÇAR MEU DIAGNÓSTICO 360° GRATUITO →"
Texto pequeno abaixo:
  "30 segundos · Resultado imediato · Sem compromisso"

────────────────────────────────────────────────
SEÇÃO 6 — PROVA SOCIAL (depoimentos)
────────────────────────────────────────────────
Background: branco
H2 (azul petróleo): "+1.800 pessoas em Camocim já confiaram na Olhar 360°"

Grid de 3 cards de depoimento (desktop) / carrossel (mobile):
Cada card tem:
  - 5 estrelas amarelas no topo
  - Texto do depoimento em itálico
  - Avatar circular (placeholder colorido com inicial)
  - Nome em negrito (azul petróleo)
  - Idade + cidade em cinza

Card 1 — Maria L., 38 anos, Camocim:
  "Achei que era só cansaço de trabalho. Fiz o teste, fui na ótica
   e descobri que precisava de óculos pra perto. As dores de cabeça
   sumiram em uma semana."

Card 2 — Carlos R., 41 anos, Camocim:
  "Meu pai tem 67 e jurava que enxergava bem. Fiz ele responder o
   quiz no meu celular. Resultado: alto risco. Hoje usa multifocal
   e voltou a ler o jornal."

Card 3 — Juliana M., 29 anos, Camocim:
  "O óculos de sol com grau de brinde me convenceu. Mas o atendimento
   da Olhar 360° fez eu virar cliente fixa."

────────────────────────────────────────────────
SEÇÃO 7 — A OFERTA (Grand Slam Hormozi)
────────────────────────────────────────────────
Background: degradê amarelo claro pra branco (chamativo)
Layout em card grande centralizado, max-width 900px, sombra forte

Tag no topo: "🎁 OFERTA EXCLUSIVA AO COMPLETAR O QUIZ"

H2 (azul petróleo, grande):
  "Exame 360° GRÁTIS + Óculos de Sol com Grau de PRESENTE"

Stack de valor em tabela visual:
  ✅ Exame de vista completo                  R$ 200
  ✅ Óculos de sol com grau (na compra)       R$ 600
  ✅ Avaliação de fadiga visual digital       R$ 150
  ✅ Indicação personalizada de armação       R$ 100
  ✅ Garantia total de adaptação              R$ 200
  ✅ Atendimento prioritário sem fila         R$  80
  ✅ Pós-venda com manutenção 12 meses        R$ 120
  ─────────────────────────────────────────────────
  VALOR TOTAL DO PACOTE                       R$ 1.450
  SEU INVESTIMENTO PELO EXAME                 R$ 0
  (Você só paga se decidir levar o óculos principal)

Selo destacado abaixo (fundo azul petróleo, texto amarelo):
  "Atendimento aqui mesmo em Camocim — sem precisar viajar"

CTA principal (amarelo solar enorme, pulsante):
  "🟡 FAZER MEU DIAGNÓSTICO E LIBERAR MINHA OFERTA →"

Linha de escassez em vermelho:
  "⏰ Apenas 50 vagas para exame gratuito esta semana"

────────────────────────────────────────────────
SEÇÃO 8 — FAQ / QUEBRA DE OBJEÇÕES
────────────────────────────────────────────────
Background: cinza claro
H2 (azul petróleo, centralizado): "Ainda em dúvida? Pega aqui:"

Accordion de 4 perguntas:
  • "E se eu não precisar de óculos?"
  • "E se eu já uso óculos?"
  • "Quanto tempo demora o exame?"
  • "É realmente grátis ou tem pegadinha?"

(Conteúdo das respostas eu já tenho no copy 01-landing-page.md
 — use textos curtos e diretos pra cada uma.)

────────────────────────────────────────────────
SEÇÃO 9 — CTA FINAL (última chance)
────────────────────────────────────────────────
Background: azul petróleo #3D5B7A
Centralizado, padding gigante

H2 (branco, enorme):
  "Sua visão merece um olhar 360°."

Sub (branco 70% opacidade):
  "30 segundos pra descobrir. Uma vida inteira pra ver melhor."

CTA mega botão amarelo:
  "🟡 FAZER MEU DIAGNÓSTICO 360° AGORA →"

────────────────────────────────────────────────
SEÇÃO 10 — FOOTER
────────────────────────────────────────────────
Background: azul petróleo escuro (mais escuro que o petróleo padrão)
3 colunas (desktop) / empilhado (mobile):
  Col 1: Logo + slogan "Visão completa. Cuidado 360°."
  Col 2: Endereço + WhatsApp + horário em Camocim
  Col 3: Redes sociais + link de privacidade
Texto pequeno embaixo:
  "Este diagnóstico não substitui consulta médica oftalmológica.
   É uma triagem informativa para encaminhamento."

═══════════════════════════════════════════════════════════════════
⚙️ REQUISITOS TÉCNICOS
═══════════════════════════════════════════════════════════════════

✅ HTML único (index.html) com Tailwind CSS via CDN
✅ Importar Google Fonts: Inter + Montserrat
✅ MOBILE-FIRST e 100% responsivo (90% do tráfego virá de mobile)
✅ Animações suaves em scroll (use AOS via CDN ou animações CSS puras)
✅ Botão WhatsApp flutuante fixo no canto inferior direito (verde)
✅ Todos os CTAs têm a mesma cor amarela solar (#F5B41A) — consistência
✅ Use heroicons ou emojis para ícones (não dependa de bibliotecas pesadas)
✅ Performance: imagens em lazy loading, sem JS pesado
✅ Acessibilidade: contraste WCAG AA, alt texts, aria-labels
✅ Microinterações: hover nos botões, scroll suave entre âncoras

═══════════════════════════════════════════════════════════════════
🎯 PRIORIDADES DE DESIGN (em ordem de importância)
═══════════════════════════════════════════════════════════════════

1. CONVERSÃO acima de tudo — CTAs amarelos visíveis em qualquer scroll
2. CONFIANÇA — visual limpo, profissional, com prova social forte
3. URGÊNCIA SUTIL — escassez real, sem ser apelativo
4. IDENTIDADE 360° — o conceito do logo aparece na narrativa visual
5. MOBILE FIRST — testar tudo pensando em tela de 375px primeiro
6. VELOCIDADE — carregamento rápido, código enxuto

═══════════════════════════════════════════════════════════════════
📦 ENTREGA
═══════════════════════════════════════════════════════════════════

Me devolva UM ÚNICO arquivo HTML completo, autocontido, que eu possa:
1. Salvar como index.html
2. Abrir direto no navegador
3. Ver a landing 100% funcional

Sem frameworks de build. Sem npm. Sem React. Apenas HTML + Tailwind CDN
+ JS vanilla mínimo se necessário para o accordion do FAQ.

Comece a gerar a landing agora. Capricha — é uma ótica de cidade do
interior que está apostando alto nessa página.
```

---

## 💡 INSTRUÇÕES PARA VOCÊ USAR ESSE PROMPT

1. Copie **TODO** o bloco de código acima (do `Você é um designer...` até `Capricha — é uma ótica...`)
2. Vá em **claude.ai** no navegador
3. Cole o prompt em uma conversa nova
4. O Claude vai gerar o HTML completo em um único bloco
5. Copie o HTML, salve como `index.html` e abra no navegador
6. Se quiser ajustar algo, peça refinamentos pontuais (ex: "deixa o hero com background mais azul" ou "aumenta o tamanho do CTA do hero")

---

## 🎯 DICAS DE REFINAMENTO (para iteração no Claude)

Se a primeira versão não vier perfeita, peça assim:
- *"Refaça apenas o hero — quero o mockup do celular maior e mais central"*
- *"O bloco da oferta tá fraco visualmente. Adiciona um selo dourado de garantia."*
- *"Adiciona uma seção antes do FAQ com 'como funciona' em 3 passos."*
- *"Os depoimentos estão sem alma. Adiciona fotos placeholder mais humanas."*

**— Cyrus, Copy Master Chief ✍️**
