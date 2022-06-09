import React, {memo} from 'react'
import {Typography, Card} from '../../../components'
import { CardFootContentStyled} from "./style";
import Github from "../../../assets/images/github.png"
import Linkedin from "../../../assets/images/linkedin.png"
import Instagram from "../../../assets/images/instagram.png"

function Footer({updateAt}){

    return (
        <Card>
            <CardFootContentStyled>
                <Typography variant="body2" component="text" color="#0000" > Atualizado em: {updateAt} </Typography>
                <div>
                    <p>Feito por Élen Brodt</p>
                    <a href="https://github.com/elenbrodt" >
                        <img src={Github} alt="github-icon" width="30px"/>
                    </a>
                    <a href="https://www.linkedin.com/in/elenbrodt/" >
                        <img src={Linkedin} alt="linkedin-icon" width="30px"/>
                    </a>
                    <a href="https://www.instagram.com/minhaelen/" >
                        <img src={Instagram} alt="instagram-icon" width="30px"/>
                    </a>
                </div>
            </CardFootContentStyled>
        </Card>
    )
}

export default memo(Footer)