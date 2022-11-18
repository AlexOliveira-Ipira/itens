import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { itensModel } from "../../models/itensModel";
import { BASE_URL } from "../../util/request";
import BotaoEditar from '../BotaoEditar';
import './styles.css';

function Card(){
    const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate()-365)));
    const [maxDate, setMaxDate] = useState(new Date());

    const [itens, setItens] = useState<itensModel[]>([]);

    useEffect(() => {

        const dmin = minDate.toISOString().slice(0,10);
        const dmax = maxDate.toISOString().slice(0,10);


        axios.get(`${BASE_URL}/itens?minDate=${dmin}&maxDate=${dmax}`)
        .then(response => {
            setItens(response.data.content);
        })
    },[minDate , maxDate]);

    return(
        <div className="card">
            <h2 className="titulo-itens">Itens</h2>                    
                
                <div className="contener-calendario">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="calendario"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div className="contener-calendario">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="calendario"
                        dateFormat="dd/MM/yyyy"
                    />
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
                        {
                            itens.map(itemDados => {
                                return (
                                        <tr key={itemDados.id}>                                  
                                            <td className="show992">{itemDados.id}</td>
                                            <td className="show576">{new Date(itemDados.datacad).toLocaleDateString()}</td>
                                            <td>{itemDados.nome}</td>
                                            <td>R$ {itemDados.vlrmed.toFixed(2)}</td>
                                            <td>
                                                <div className="btnEditar">
                                                    <BotaoEditar/>
                                                </div>
                                            </td>
                                        </tr>
                                )
                            })
                        }                                                                 
                    </tbody>
                </table>

            </div>    

        </div>               
    )
}

export default Card;