import { useState } from 'react';
import React from 'react';
import styles from './estilo.module.css'

function BibliotecaCultos() {
    const [count, setCount] = useState(0);

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <a href="javascript:history.back()" className={styles.backIcon}>
                    <span className="material-icons">arrow_back</span> {/* Ícone de voltar */}
                </a>
            </header>
            <section className={styles.bibliotecaDeCultos}>
                <h2 id={styles.naoTemCultosFeitos}>Você não tem nenhum culto salvo</h2>
                {/* Onde vai aparecer os cultos feitos */}
            </section>
        </section>
    )
}

export default BibliotecaCultos