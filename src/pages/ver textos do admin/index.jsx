import { useState } from 'react';
import React from 'react';
import styles from './estilo.module.css'

function VerTextos() {
    const [count, setCount] = useState(0);

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <a href="javascript:history.back()" className={styles.backIcon}>
                    <span className="material-icons">arrow_back</span> {/* Ícone de voltar */}
                </a>
                <h2>Registros do administrador</h2>
            </header>
            <section className={styles.registros}>
                {/* Onde vão aparecer os textos do admin depois que postados */}
            </section>
        </section>
    );
}

export default VerTextos