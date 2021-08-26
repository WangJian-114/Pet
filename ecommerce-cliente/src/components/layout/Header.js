import Navegacion from './Navegacion';
import MenuMovil from './Menu-movil';


const Header = ({ titulo }) => {
    return ( 
        <header>
            <div className="contenedor contenedor-header">

                <MenuMovil />

                <div className="logo">
                    <h1><span>PET</span> {titulo}</h1>
                </div>

                <Navegacion />
                
            </div>

            
        </header>
    );
}
 
export default Header;