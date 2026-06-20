import type {FC} from "react";
import type {CharacterCard} from "../../types/types.ts";
import "./character-component.css";

const CharacterComponent: FC<CharacterCard> = ({children}) =>  {
    return <div className="simpson-card-block">
        <h2 className="simpson-name">Name: {children.name}</h2>
        <h2 className="simpson-surname">Surname: {children.surname}</h2>
        <h3 className="simpson-age">Age: {children.age}</h3>
        <p className="additional-info">Info: {children.info}</p>
        <img src={children.photo} alt={children.name}/>
    </div>
}

export default CharacterComponent;
