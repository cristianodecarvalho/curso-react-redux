import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Múdulos</h1>
            </div>
        </Layout>
    )
}