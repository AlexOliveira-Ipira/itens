import bEditar from "../../recursos/img/bEditar.png"
import './styles.css'

function BotaoEditar(){
    return(
            <div className="btnEditar">
                <img src={bEditar} alt="Botão de Edição" />
            </div>
    )
}

export default BotaoEditar;