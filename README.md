# 🍪 Biscoito da Sorte

Um aplicativo web divertido que mostra **frases inspiradoras e motivacionais**, como um biscoito da sorte virtual. Ideal para momentos de reflexão e descontração!  

[🔗 Veja o app online](https://ferreira2006.github.io/biscoito-da-sorte/)

---

## 🖥️ Funcionalidades

- Clique no biscoito para **quebrá-lo** e receber uma frase aleatória.  
- **Som** de biscoito quebrando ao clicar.  
- **Histórico** das últimas 5 frases exibidas.  
- **Modo escuro** toggle para alternar entre claro e escuro.  
- **Spinner discreto** enquanto as frases carregam.  
- Frases carregadas a partir do arquivo `frases.txt` (obrigatório).  

---

## 📂 Estrutura do projeto

```
biscoito-da-sorte/
│
├─ index.html # Página principal
├─ js/
│ └─ app.js # Script principal do app
├─ assets/
│ ├─ icons/biscoito.png # Imagem do biscoito
│ ├─ sons/som-biscoito.mp3 # Som do biscoito
│ └─ frases.txt # Lista de frases (uma por linha)
├─ css/
│ └─ style.css # Estilos do app, incluindo modo escuro
└─ README.md

```

---

## ⚡ Como usar

1. Abra `index.html` no navegador.  
2. Clique no biscoito para **receber uma frase aleatória**.  
3. As últimas 5 frases são exibidas no histórico abaixo do biscoito.  
4. Clique no botão **Limpar histórico** para resetar.  
5. Use o botão **Modo Escuro** para alternar o tema.

---

## 💡 Observações

- O arquivo `frases.txt` **deve existir** e conter uma frase por linha. Sem ele, o app não funciona.  
- O som do biscoito é pré-carregado para evitar atrasos no primeiro clique.  
- O botão do biscoito fica **desativado** até que as frases sejam carregadas.  

---

## 🎨 Personalização

- Adicione novas frases ao `frases.txt` (uma por linha).  
- Troque a imagem do biscoito (`biscoito.png`) por outra de sua preferência.  
- Modifique o som (`som-biscoito.mp3`) para outro efeito sonoro.  

---

## 🔧 Tecnologias

- HTML5  
- CSS3 (incluindo animações e modo escuro)  
- JavaScript (ES6+)  
- GitHub Pages para hospedagem  

---

## 📌 Deploy

O app está hospedado no GitHub Pages:

[https://ferreira2006.github.io/biscoito-da-sorte/](https://ferreira2006.github.io/biscoito-da-sorte/)
