function Square({ value, onSquareClick }) {                                           // Função que cria o "quadrado" do jogoda velha
    return <button className="square" onClick={onSquareClick}>{value}</button>;         //
}

export default Square;