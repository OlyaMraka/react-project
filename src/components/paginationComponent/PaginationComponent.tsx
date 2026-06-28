import type {FC} from "react";
import {useSearchParams} from "react-router-dom";
import "./pagination-component.css";

const PaginationComponent: FC = () => {
    const [query, setQuery] = useSearchParams({skip: "0"})

    const onPrevButtonClick = () => {
        const currentSkip = query.get("skip");

        if (currentSkip) {
            let numberSkip = +currentSkip;

            if (numberSkip > 0) {
                numberSkip -= 26;
                setQuery({skip: numberSkip.toString()})
            }
        }
    }

    const onNextButtonClick = () => {
        const currentSkip = query.get("skip");

        if (currentSkip) {
            let numberSkip = +currentSkip;

            if(numberSkip <= 208) {
                numberSkip += 26;
                setQuery({skip: numberSkip.toString()})
            }
        }
    }

    return (
        <div className="pagination-block">
            <button onClick={onPrevButtonClick} className="prev-button">Previous</button>
            <button onClick={onNextButtonClick} className="next-button">Next</button>
        </div>
    );
};

export default PaginationComponent;