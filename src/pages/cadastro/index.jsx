import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/logo do IBELA.png';
import styles from './estilo.module.css';
import api from '../../services/api';
import Trash from '../../assets/trash.svg';

function Cadastro() {
    const [users, setUsers] = useState([]);
    const inputName = useRef();
    const inputAddress = useRef(); // Alterado para inputAddress
    const inputEmail = useRef();

    async function createUsers(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        
        try {
            await api.post('/usuarios', {
            name: inputName.current.value,
            address: inputAddress.current.value, // Salva o endereço
            email: inputEmail.current.value,
        });

            alert('cadastro bem sucedido!')
        } catch (error) {
            alert('Erro ao se cadastrar! Tente usar um email diferente.')
        }
    }

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`);
        getUsers();
    }

    return (
        <div>
            <section className={styles.containerCadastro}>
                <section className={styles.imageSectionCadastro}>
                    <img src={Logo} alt="Imagem de login" />
                </section>
                <section className={styles.formSectionCadastro}>
                    <form id={styles.registrationForm} onSubmit={createUsers}>
                        <h2 className={styles.cadastreSe}>Cadastre-se</h2>
                        <label htmlFor="userName">
                            <span className="material-icons">person_2</span>
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            required
                            placeholder="Nome de usuário"
                            ref={inputName}
                        />
                        <label htmlFor="address"> {/* Alterado para address */}
                            <span className="material-icons">lock</span>
                        </label>
                        <input
                            type="text" // Alterado para tipo texto
                            id="address" // Alterado para address
                            name="address" // Alterado para address
                            required
                            placeholder="Senha" // Placeholder atualizado
                            ref={inputAddress} // Alterado para inputAddress
                        />
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
                        <button type="submit">Cadastrar</button>
                        <section className={styles.additionalOptions}>
                            <a href="/">Já tem uma conta? Faça o Login</a>
                            <a href="/login-admin">Logar como administrador</a>
                        </section>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default Cadastro;