import { useOutletContext } from "react-router-dom";
import { ICompanyCashFlow } from "../../company";
import "./CashFlowStatement.css";
import React, { useEffect, useState } from "react";
import { getCashFlow } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

interface IProps {}

const config = [
    {
        label: "Date",
        render: (company: ICompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cashflow",
        render: (company: ICompanyCashFlow) => company.operatingCashFlow,
    },
    {
        label: "Investing Cashflow",
        render: (company: ICompanyCashFlow) => company.netCashUsedForInvestingActivites,
    },
    {
        label: "Financing Cashflow",
        render: (company: ICompanyCashFlow) => company.netCashUsedProvidedByFinancingActivities,
    },
    {
        label: "Cash At End of Period",
        render: (company: ICompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
        label: "CapEX",
        render: (company: ICompanyCashFlow) => company.capitalExpenditure,
    },
    {
        label: "Issuance Of Stock",
        render: (company: ICompanyCashFlow) => company.commonStockIssued,
    },
    {
        label: "Free Cash Flow",
        render: (company: ICompanyCashFlow) => company.freeCashFlow,
    },
];

const CashFlowStatement = ({}: IProps) => {
    const ticker = useOutletContext<string>();
    const [cashFlowData, setCashFlowData] = useState<ICompanyCashFlow[]>([]);

    useEffect(() => {
        const fetchCashFlow = async () => {
            const result = await getCashFlow(ticker);
            setCashFlowData(result!.data);
        };
        fetchCashFlow();
    }, []);

    return cashFlowData ? <Table config={config} data={cashFlowData}></Table> : <Spinner />;
};

export default CashFlowStatement;