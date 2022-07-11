export interface Medication {
    id?: number;
    name?: string;
    clientId?: string;
    duration?: number;
    dose?: number;
    medicationId?: string;
    form?: string;
    manufacturer?: string;
    countOfRemainder?: number;
    countOfSupply?: number;
    email?: string;
    strength?: string;
    isGiven?: boolean;
    timeGiven?: Date;
}