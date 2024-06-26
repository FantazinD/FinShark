import React from "react";
import "./Card.css";
import { ICompanySearch } from "../../company";

interface IProps {
    id: string;
    searchResult: ICompanySearch;
}

const Card: React.FC<IProps> = ({ searchResult }: IProps): JSX.Element => {
    return (
        <div className="card">
            <img src="" alt="Company Logo" />
            <div className="details">
                <h2>{`${searchResult.name} (${searchResult.symbol})`}</h2>
                <p>{`${searchResult.currency}`}</p>
            </div>
            <p className="info">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
        </div>
    );
};

export default Card;
