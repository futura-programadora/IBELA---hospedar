import { useState } from 'react';
import React from 'react';
import styles from './estilo.module.css'

function Notificacoes() {
    const [count, setCount] = useState(0);

    return (
        <section className={styles.containerNotificacoes}>
            <header className={styles.headerNotificacoes}>
                <a href="javascript:history.back()" className={styles.backIconNotificacoes}>
                    <span className="material-icons">arrow_back</span> {/* Ícone de voltar */}
                </a>
            </header>
            <section className={styles.notificacoes}>
                <h2 id={styles.naoTemNotificacoes}>Você não tem nenhuma notificação no site,<br /> mas você pode conferir seu <strong>Youtube</strong></h2>
                {/* Onde vai aparecer os textos do admin depois que postados */}
            </section>
        </section>
    )
}

export default Notificacoes