# 🧩 QUIZ — 6 PERGUNTAS COM ARQUITETURA DE TENSÃO
**Squad:** Joe Sugarman (slippery slide) + Blair Warren (identidade) + Cialdini (consistência)

> **Princípio Sugarman:** Cada pergunta existe para puxar o cérebro pra próxima. A primeira é fácil ("entrega"), a última é a mais íntima ("compromisso").

---

## 🎬 TELA DE ABERTURA (pré-quiz)

### Headline
> ## **Diagnóstico 360°: em 30 segundos você descobre em qual dos 3 perfis de risco visual você se encaixa.**

### Sub
> Este diagnóstico foi desenvolvido com base nos sinais mais comuns de fadiga e perda visual identificados em **mais de 1.800 atendimentos** realizados pela Óticas Olhar 360° aqui em Camocim.

### Reassurance
> ✓ Leva 30 segundos · ✓ Não pede dados pessoais agora · ✓ Você pode pular qualquer pergunta

### CTA (botão amarelo solar #F5B41A)
> 🟡 **COMEÇAR MEU DIAGNÓSTICO 360° →**

---

## ❓ PERGUNTA 1 — A âncora fácil (Sugarman: "diga sim")

**No final de um dia normal, como seus olhos se sentem?**

- 🟢 Normais, sem cansaço
- 🟡 Um pouco pesados ou ardendo
- 🟠 Bem cansados, lacrimejando ou ardendo
- 🔴 Doloridos, embaçados, preciso fechar os olhos pra descansar

> *"Quase 7 em cada 10 pessoas que fazem este teste marcam laranja ou vermelho."*

**[Barra de progresso: 1/6]**

---

## ❓ PERGUNTA 2 — Quantificação (cria consciência de exposição)

**Quantas horas por dia, em média, você passa olhando para telas?**
*(celular + computador + TV + tablet)*

- 🟢 Menos de 2 horas
- 🟡 De 2 a 4 horas
- 🟠 De 4 a 8 horas
- 🔴 Mais de 8 horas por dia

> *"A OMS classifica acima de 6h/dia como exposição de alto risco para fadiga visual digital."*

**[Barra de progresso: 2/6]**

---

## ❓ PERGUNTA 3 — Sintoma de alerta (a tensão sobe)

**Você já percebeu sua visão ficando embaçada — mesmo que por alguns segundos?**

- 🟢 Nunca aconteceu
- 🟡 Raramente, talvez 1 ou 2 vezes
- 🟠 Algumas vezes por semana
- 🔴 Quase todos os dias

> *"Embaçamento recorrente é um dos primeiros sinais clínicos de erro refrativo não corrigido."*

**[Barra de progresso: 3/6]**

---

## ❓ PERGUNTA 4 — Comportamento compensatório (espelho da realidade)

**Você se pega apertando os olhos, afastando o celular ou aproximando do rosto pra ler melhor?**

- 🟢 Nunca
- 🟡 Às vezes, em letras muito pequenas
- 🟠 Com frequência, em vários momentos do dia
- 🔴 Toda hora — virou hábito

> *"Esse gesto é o cérebro tentando compensar uma falha que ele não consegue mais ignorar."*

**[Barra de progresso: 4/6]**

---

## ❓ PERGUNTA 5 — Tempo de negligência (gatilho de culpa leve)

**Quando foi seu último exame de vista?**

- 🟢 Nos últimos 12 meses
- 🟡 Entre 1 e 2 anos atrás
- 🟠 Faz mais de 2 anos
- 🔴 Não lembro / nunca fiz

> *"Oftalmologistas recomendam exame anual, mesmo sem sintomas. A maioria espera demais."*

**[Barra de progresso: 5/6]**

---

## ❓ PERGUNTA 6 — Sintoma sistêmico (o "click" emocional)

**Você sente dor de cabeça, enjoo ou tontura depois de muito tempo em telas ou leitura?**

- 🟢 Nunca
- 🟡 Raramente
- 🟠 Com frequência
- 🔴 Quase sempre — virou parte da minha rotina

> *"Dor de cabeça pós-tela é o sinal #1 que faz pessoas finalmente marcarem o exame."*

**[Barra de progresso: 6/6]**

---

## 🎬 TELA DE TRANSIÇÃO (delay de personalização — hack Sugarman/Cialdini)

> ### 🔄 **Analisando suas 6 respostas...**
>
> ⚙️ Cruzando seu padrão com 1.800+ diagnósticos da Óticas Olhar 360°...
> 🧠 Identificando sinais de fadiga e risco visual...
> 📊 Calculando seu perfil personalizado...
>
> *(Animação de 4-6 segundos com barra de progresso)*

---

## 🔒 TELA DE CAPTURA — WhatsApp (Cialdini: compromisso/coerência)

### Headline
> ## **Seu diagnóstico está pronto.**

### Sub
> Antes de te mostrar seu perfil completo + recomendações personalizadas + a oferta liberada para você, preciso saber pra onde enviar:

### Por que pedimos o WhatsApp (transparência aumenta conversão)
> 📱 Para enviar:
> ✅ Seu perfil de risco visual completo (PDF)
> ✅ Acesso à **oferta de Exame Grátis + Óculos de Sol com Grau de Brinde**
> ✅ Lembrete na hora de marcar (sem spam, palavra de honra)

### Form
- **Nome:** [_____________]
- **WhatsApp:** [_____________]
- ☑️ Aceito receber meu resultado pelo WhatsApp

### CTA (botão amarelo solar #F5B41A com texto azul petróleo)
> 🟡 **VER MEU RESULTADO 360° AGORA →**

### Micro-copy de segurança (sob o botão)
> 🔒 *Seus dados são privados. Nunca compartilhamos com ninguém. Você pode sair da lista a qualquer momento.*

---

# 📊 NOTAS TÉCNICAS PARA O DEV

1. **Pontuação:** 🟢=0pts | 🟡=1pt | 🟠=2pts | 🔴=3pts
2. **Faixas de Perfil:**
   - 0–5 pontos → **Perfil 1: Visão saudável, mas em alerta**
   - 6–11 pontos → **Perfil 2: Sinais de alerta visual**
   - 12–18 pontos → **Perfil 3: Alto risco — exame urgente**
3. **Barra de progresso:** sempre visível, animada
4. **Delay obrigatório:** 4–6s antes da captura (efeito personalização)
5. **Captura:** OBRIGATÓRIA antes do resultado (gatilho de coerência: já investiu 30s)
