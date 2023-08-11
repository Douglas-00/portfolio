import SocialNetworks from './SocialNetworks';
import InfoContainer from './InfoContainer';

import Avatar from '../img/perfil.jpg'

import '../styles/components/sidebar.sass'




const Sidebar = () =>{
    return <aside id="sidebar">Sidebar
        <img src={Avatar} alt="Imagem Perfil" srcSet=""></img>
        <p className="title">Desenvolvedor FullStack</p>
        <SocialNetworks />
        <InfoContainer />
        <a href="" className="btn">Download curriculo</a>
    </aside>
}
export default Sidebar;