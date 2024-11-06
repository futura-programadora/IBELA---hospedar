import React, { useState } from 'react';  // Corrigir a importação do useState
import styles from './estilo.module.css';

function Inicio() {
    const [linkCulto, setLinkCulto] = useState('');

    const handleAdicionarLink = () => {
        try {
            const url = new URL(linkCulto);
            if (url.hostname === 'www.youtube.com' || url.hostname === 'youtu.be') {
                window.location.href = linkCulto;
            } else {
                alert('URL inválida. Por favor, insira um link válido do YouTube.');
            }
        } catch (error) {
            alert('URL inválida. Por favor, insira um link válido do YouTube.');
        }
    };

    async function copyPixKey() {
        try {
            const pixKey = document.getElementById('pix-key').textContent;
            await navigator.clipboard.writeText(pixKey);
            alert('Chave Pix copiada para a área de transferência!');
        } catch (err) {
            alert('Falha ao copiar a chave Pix: ' + err);
        }
    }

    return (
        <section className={styles.containerInicio}>
            {/* Cabeçalho */}
            <section className={styles.headerInicio}>
                <div className={styles.userInicio}>
                    <a className={styles.usuarioInicio} href="#">
                        <span className="material-icons">person_2</span>
                    </a>
                </div>
                <div className={styles.bookIconInicio}>
                    <a className={styles.livroInicio} href="https://www.youtube.com/@IgrejaBiblicaDoEvangelhoAlpha" target='blank'>
                        <span className="material-icons">book</span>
                    </a>
                </div>
            </section>
            <h2 className={styles.tituloInicio}>bem vindo a Igreja Bíblica do Evangelho Livre Alpha</h2>
            <p className={styles.versiculoBiblicoAdicional}>13 irmãos, não penso que eu mesmo já o tenha alcançado, mas uma coisa faço: esquecendo-me das coisas que ficaram para trás e avançando para as que estão adiante, 14 prossigo para o alvo, a fim de ganhar o prêmio do chamado celestial de Deus em Cristo  Jesus. Filipenses 3.13-14</p>
            {/* Link e Transmissão ao vivo */}
            <section className={styles.liveSectionInicio}>
                <div className={styles.linkInicio}>
                    <a className={styles.CalendarioInicio} href="https://www.youtube.com/@IgrejaBiblicaDoEvangelhoAlpha" target='blank'>
                        <span className="material-symbols-outlined">calendar_clock</span>
                    </a>
                </div>
                <div className={styles.liveInicio}>

                    <p className={styles.paragrafoInicio}>Transmissão ao Vivo</p>
                    {/* Aqui vai o player da live */}
                </div>
            </section>
            {/* Colaborador */}
            <section className={styles.collaboratorSection}>
                <p className={styles.paragrafoInicio}>Fique atento, você pode receber uma oportunidade</p>
                <a href="https://youtube.com/live/sQ-L2jtN46c?feature=share" id="participate-button">
                    <button>Participar da Live</button>
                </a>
            </section>
            <br /><br />
            {/* Link para live específica */}
            <section className={styles.linkSectionInicio}>
                <input
                    type="text"
                    placeholder="Adicionar link do culto"
                    value={linkCulto}
                    onChange={(e) => setLinkCulto(e.target.value)}
                />
                <button id="invite-link-button" onClick={handleAdicionarLink}>Entrar no culto</button>
                <br /><br />
                <div className={styles.pixOptionInicio}>
                    {/* Chave Pix visível */}
                    <span id="pix-key">317.143.718.08</span>
                    {/* Botão para copiar a chave Pix */}
                    <button className={styles.copyButtonInicio} onClick={copyPixKey}>Copiar Chave Pix</button>
                </div>
            </section>
        </section>
    );
}

export default Inicio;
