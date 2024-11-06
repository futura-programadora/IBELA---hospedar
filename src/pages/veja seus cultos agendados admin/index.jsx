import { useState } from 'react';
import React from 'react';
import styles from './estilo.module.css'

function CultosAgendados() {
    const [count, setCount] = useState(0);

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <a href="javascript:history.back()" className={styles.backIcon}>
                    <span className="material-icons">arrow_back</span> {/* Ícone de voltar */}
                </a>
            </header>
            <section className={styles.cultosAgendados}>
                <h2 id={styles.naoTemCultosAgendados}>Você não agendou nenhum culto ainda</h2>
                {/* Onde vai aparecer os textos do admin depois que postados */}
            </section>
        </section>
    )
}

export default CultosAgendados