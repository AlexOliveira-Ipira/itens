import BotaoEditar from '../BotaoEditar';
import './styles.css'

function Card(){
    return(
        <div className="card">
            <h2 className="titulo-itens">Itens</h2>                    
                
                <div className="contener-calendario">
                    <input type="date" className="calendario"/>
                </div>

                <div className="contener-calendario">
                    <input type="date" className="calendario"/>
                </div>

                <div className="dados">
                    <table className="container-tabelas">                
                        <thead>
                            <tr>                               
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Item</th>
                                <th>Valor</th>
                                <th>Editar</th>
                            </tr>                                
                        </thead>

                    <tbody>
                        <tr>                                  
                            <td className="show992">1</td>
                            <td className="show576">08/07/2022</td>
                            <td>Caneta</td>
                            <td>R$ 1,00</td>
                            <td>
                                <div className="btnEditar">
                                    <BotaoEditar/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">2</td>
                            <td className="show576" >08/07/2022</td>
                            <td>Caderno</td>
                            <td>R$ 40,00</td>
                            <td>
                                <div className="btnEditar">
                                    <BotaoEditar/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">3</td>
                            <td className="show576" >08/07/2022</td>
                            <td>Papel Oficio</td>
                            <td>R$ 35,00</td>
                            <td>
                                <div className="btnEditar">
                                    <BotaoEditar/>
                                </div>
                            </td>
                            
                        </tr>
                    </tbody>

                </table>

            </div>    

        </div>               
    )
}

export default Card;