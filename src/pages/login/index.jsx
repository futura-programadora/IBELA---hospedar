import React, { useState, useRef } from 'react';
import Logo from '../../assets/logo do IBELA.png';
import styles from './estilo.module.css';
import api from '../../services/api';

function Login() {
    const inputEmail = useRef();
    const inputAddress = useRef(); 
    const [error, setError] = useState('');

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const response = await api.post('/usuario/login', {
                email: inputEmail.current.value,
                address: inputAddress.current.value,
            });
            console.log('Login bem-sucedido:', response.data);
            
            // Redireciona para a página inicial após o login bem-sucedido
            window.location.href = '/inicio'; // Altere para o caminho da sua página inicial
        } catch (err) {
            setError('Usuário ou endereço inválidos.');
        }
    }

    return (
        <div>
            <section className={styles.containerLogin}>
                <section className={styles.imageSectionLogin}>
                    <img src={Logo} alt="Imagem de login" />
                </section>
                <section className={styles.formSectionLogin}>
                    <form id={styles.loginForm} onSubmit={handleLogin}>
                        <h2 className={styles.loginHeader}>Login</h2>
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
                            <span className="material-icons">lock</span>
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            placeholder="Senha"
                            ref={inputAddress}
                        />
                        <button type="submit">Entrar</button>
                        <section className={styles.additionalOptions}>
                            <a href="/cadastro">Não tem uma conta? Cadastre-se</a>
                            <a href="/login-admin">Logar como administrador</a>
                        </section>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default Login;
