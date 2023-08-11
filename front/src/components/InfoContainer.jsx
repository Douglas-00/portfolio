import {AiFillPhone, AiTwotoneMail, AiFillEnvironment} from "react-icons/ai"

import "../styles/components/infocontainer.sass"

const InfoContainer = () =>{
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
            <div>
                <h3>Telefone</h3>
                <p>+55 11 95059-2791</p>
            </div>
        </div>
        <div className="info-card">
            <AiTwotoneMail id="email-icon"/>
            <div>
                <h3>E-mail</h3>
                <p>alvesdouglas547@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localização</h3>
                <p>Vargem Grande Paulista / SP</p>
            </div>
        </div>
    </section>
}

export default InfoContainer;