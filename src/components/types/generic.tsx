export interface IState {
    _id: string;
    state: string;
    confirmedCases: number;
    casesOnAdmission: number;
    discharged: number;
    death: number;
}

export interface ISystemData {
    totalSamplesTested: string | number;
    totalConfirmedCases: number;
    totalActiveCases: number;
    discharged: number;
    death: number;
    states: Array<IState>
}