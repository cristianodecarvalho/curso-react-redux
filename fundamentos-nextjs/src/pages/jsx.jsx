export default function Jsx() {

    const titulo = <h1>Jsx é um Conceito Central</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }
    return (
        <div>
            {titulo}
            {subtitulo()}
            <p>{JSON.stringify({nome: 'Joao', idade: 30})}</p>
        </div>
    )
}