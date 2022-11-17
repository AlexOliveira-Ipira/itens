import './styles.css'
import logo from '../../recursos/img/logo.png'

function Header() {
  return (
     <header>
        <div className="contener-logo">
            <img src={logo} alt="Imagem da Logomarca"/>
            <h1>Cadastro de Itens</h1>
            <p>
                Desenvolvido por
                <a href="https://github.com/AlexOliveira-Ipira" target="_blank" >@AlexOliveia</a> 
            </p>
        </div>
    </header>       
  )
}

export default Header;
