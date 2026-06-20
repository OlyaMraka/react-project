import type {FamilyType} from "../../types/types.ts";
import type {FC} from "react";
import CharacterComponent from "../characterComponent/CharacterComponent.tsx";
import "./family-component.css";

const FamilyComponent: FC<FamilyType> = ({simpsons}) => {
    return <div className="simpson-family-block">
        <h2 className="block-title">Simpson family</h2>
        <div className="simpsons-block">
            {
                simpsons.map((simpson, index) => (<CharacterComponent key={index}>{simpson}</CharacterComponent>))
            }
        </div>
    </div>
}

export default FamilyComponent;
