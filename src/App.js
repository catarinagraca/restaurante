import React, { useState } from "react";
import "./App.css";
import PopupPizza from "./PopupPizza";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const ementa = {
    "Segunda-feira": {
      almoco: "Marry me Chicken",
      jantar: "Arroz de Pato",
    },
    "Terça-feira": {
      almoco: "Salmão ao molho de manteiga com arroz e bróculos",
      jantar: "Quiche",
    },
    "Quarta-feira": {
      almoco: "Panados de peru com arroz de cenoura",
      jantar: "stir fry de frango com pimentos cogumelos e arroz basmati",
    },
    "Quinta-feira": {
      almoco: "Hamburguer H3",
      jantar: "Sushi variado",
    },
    "Sexta-feira": {
      almoco: "Steak com batata frita",
      jantar: "Pescada cozida com legumes",
    },
  };

  const [diaSelecionado, setDiaSelecionado] = useState(null);

  return (
    <div className="App">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>🍽 Restaurante Catarina</h1>
        <p>Bem-vinda ao restaurante Catarina!</p>
        <p>Escolhe um dia da semana para veres a ementa:</p>
      </motion.header>

      <div className="botoes">
        {Object.keys(ementa).map((dia) => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={dia}
            className={`botao-dia ${diaSelecionado === dia ? "ativo" : ""}`}
            onClick={() => setDiaSelecionado(dia)}
          >
            {dia}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {diaSelecionado && (
  <motion.div
    key={diaSelecionado}
    className="ementa-dia"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
    <h2>{diaSelecionado}</h2>

    <div className="prato">
      <p><strong>Almoço:</strong> {ementa[diaSelecionado].almoco}</p>
      <a
        className="botao-sugestao"
        href={`mailto:catarinagraca40@gmail.com?subject=Sugestão para o prato: ${ementa[diaSelecionado].almoco}&body=Olá Chefe Catarina,%0D%0A%0D%0AEu gostaria de sugerir uma alteração para o prato "${ementa[diaSelecionado].almoco}".%0D%0A%0D%0AObrigado!`}
      >
        Sugerir edição à chefe
      </a>
    </div>

    <div className="prato">
      <p><strong>Jantar:</strong> {ementa[diaSelecionado].jantar}</p>
      <a
        className="botao-sugestao"
        href={`mailto:catarinagraca40@gmail.com?subject=Sugestão para o prato: ${ementa[diaSelecionado].almoco}&body=Olá Chefe Catarina,%0D%0A%0D%0AEu gostaria de sugerir uma alteração para o prato "${ementa[diaSelecionado].almoco}".%0D%0A%0D%0AObrigado!`}
      >
        Sugerir edição à chefe
      </a>
    </div>
  </motion.div>
)}

      </AnimatePresence>
      {/* <PopupPizza />*/}
    </div>
    
  );
}

export default App;
