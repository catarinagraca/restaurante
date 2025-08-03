import React, { useState, useEffect } from "react";

const PopupPizza = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
    }, 5000); // aparece a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const esconderPopup = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h1 style={{ marginBottom: 10, color: "#e63946" }}>PIZZAAAAAAAAA</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/ilustracao-de-desenho-animado-de-pizza-desenhada-a-mao_23-2150625906.jpg" // pizza cartoon engraçada
          alt="Pizza divertida"
          style={{ width: 200, height: 200, marginBottom: 15 }}
        />
        {/* Botão secreto camuflado */}
        <button onClick={esconderPopup} style={styles.botaoSecreto}>
          {/* Botão invisível */}
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  popup: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    textAlign: "center",
    position: "relative",
    width: 300,
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  },
  botaoSecreto: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 20,
    height: 30,
    opacity: 10, // invisível
    cursor: "pointer",
  },
};

export default PopupPizza;
