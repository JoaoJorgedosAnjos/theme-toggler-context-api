import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Card = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <div style={{color:theme.color,backgroundColor:theme.background}}>
            <h1>Título do card</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores ad enim fuga ut nostrum quas, soluta repellendus rerum harum non dolorum saepe quam veniam est, accusantium praesentium aliquam totam!</p>
        </div>
    )
}