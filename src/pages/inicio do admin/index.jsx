import { useState } from 'react';
import React from 'react';
import styles from './estilo.module.css'

function InicioAdmin() {
    const [count, setCount] = useState(0);

    return (
        <section className={styles.containerInicioAdmin}>
            <section className={styles.headerInicioAdmin}>
                <div className={styles.userInicioAdmin}>
                    <a href="">
                        <span className="material-icons">person_2</span>
                    </a>
                </div>
                <div className={styles.notificationInicioAdmin}>
                    <a className={styles.iconeNotificacoesAdmin} href="/notificacoes">
                        <span className="material-icons">cirque notifications</span>
                    </a>
                </div>
            </section>
            <section id="lives-agendadas">
                <a id={styles.textoCultosAgendadosInicioAdmin} href="https://studio.youtube.com/channel/UCepJYuazMk2UcJKrlhcSdVg/livestreaming/manage" target='blank'>Veja seus cultos agendados</a>
            </section>
            <section id={styles.comecarInicioAdmin}>
                <a id={styles.comecarLiveInicioAdmin} href="https://studio.youtube.com/channel/UCepJYuazMk2UcJKrlhcSdVg/livestreaming" target='blank'>
                    <span className="material-icons">subscriptions</span>
                    
                </a>
                <p>Comece um culto agora</p>
            </section>
            <section className={styles.agendarLiveInicioAdmin}>
                <a id={styles.agendarLiveInicio} href="https://studio.youtube.com/channel/UCepJYuazMk2UcJKrlhcSdVg/livestreaming/manage" target='blank'>
                    <span className="material-symbols-outlined">calendar_clock</span>
                </a>
                <p>Agendar um culto</p>
            </section>
            <section className={styles.bookInicioAdmin}>
                <a className={styles.bookIconInicioAdmin} href="https://www.youtube.com/channel/UCepJYuazMk2UcJKrlhcSdVg/community" target='blank'>
                    <span className="material-icons">book</span>
                </a>
            </section>
        </section>
    )
}

export default InicioAdmin