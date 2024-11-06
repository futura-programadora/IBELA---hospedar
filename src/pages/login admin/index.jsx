import { useState, useRef } from 'react';
import React from 'react';
import Logo from '../../assets/logo do IBELA.png';
import styles from './estilo.module.css';
import api from '../../services/api';

function LoginAdmin() {
    const inputEmail = useRef();
    const inputAddress = useRef();
    const [error, setError] = useState('');

    async function handleAdminLogin(event) {
        event.preventDefault();
        try {
            const response = await api.post('/admin/login', {
                email: inputEmail.current.value,
                address: inputAddress.current.value,
            });

            console.log('Login de administrador bem-sucedido:', response.data);
            // Redireciona para a página inicial após o login bem-sucedido
            window.location.href = '/inicio-admin';
        } catch (err) {
            setError('E-mail ou endereço inválidos.');
        }
    }

    return (
        <section className={styles.containerLoginAdmin}>
            <section className={styles.imageSectionLoginAdmin}>
                <img src={Logo} alt="Imagem de login" />
            </section>
            <section className={styles.formSectionLoginAdmin}>
                <form className={styles.formLoginAdmin} onSubmit={handleAdminLogin}>
                    <h2 className={styles.Administrador}>Administrador</h2>
                    {error && <p className={styles.error}>{error}</p>}
                    <label htmlFor="email">
                        <span className="material-symbols-outlined">drafts</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="E-mail"
                        ref={inputEmail}
                    />
                    <label htmlFor="address">
                        <span className="material-symbols-outlined">lock</span>
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        placeholder="Endereço"
                        ref={inputAddress}
                    />
                    <button type="submit">Entrar</button>
                    <section className={styles.additionalOptions}>
                        <a href="/">Logar como usuário</a>
                    </section>
                </form>
            </section>
        </section>
    );
}

export default LoginAdmin;
