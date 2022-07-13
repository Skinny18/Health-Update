import React from "react";
import "./info.css";
import myhealth from '../imagens/myhealth.png'

function Info(){
    return(
        <>
            <div className="info-div">
            <img id="img1" height="80" src={myhealth}/>

            <details>
                <summary className="summary">Quem Somos?</summary>

                    <p id="p2">
Somos da equipe SosTech formado por universitarios do Centro Universitatio fametro. No nosso estudo analisamos o processo de verificação de dados pessoais relacionados à saúde da vítima de acidente de trânsito, através de uma aplicação web que tem seu enfoque em dados como: tipo sanguíneo, alergias, doenças crônicas, uso de remédios controlados, dentre outros. Tendo como objetivo agilidade e diminuição no tempo de resposta para obtenção de dados cruciais para o atendimento de pessoas que venham a passar por um trauma. 


                    </p>

            </details>

            <details>

                <summary className="summary">Porque voce deve usar o MyHealth?</summary>

                    <p id="p2">
    
Constatou-se através de pesquisas e comparações de dados que o website My Health pode vir a ser uma ferramenta a otimizar a obtenção de dados cruciais quando trata-se de vítimas de acidentes de trânsito, visto que seu intuito tende a ser uma etiqueta móvel que facilitará e agilizará o primeiro atendimento em casos de acidentes de trânsito, deixando ciente o socorrista de observações importantes relacionadas a saúde do mesmo. 
                    </p>    

            </details>

            <details>
                <summary className="summary">Usabilidade no dia-a-dia</summary>

                    <p id="p2">
Na nossa aplicacao haverá um formulário com perguntas sobre a saúde do paciente que deverá ser respondido pelo usuário após a criação de um perfil no Website, caso haja alguma mudança no estado de saúde o questionário poderá ser modificado e atualizado. É recomendado atualizar as informações a cada 6 meses. A implementação do software My Health tem como objetivo a diminuição no tempo de resposta para obtenção de dados de vítimas de acidentes de trânsito.
                    </p>
            </details>

            </div>

        </>
    )
}

export default Info;