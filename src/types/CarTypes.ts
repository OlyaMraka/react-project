export type Car = {
    id: number;
    brand: string;
    price: number;
    year: number;
}

export type CarComponentProps = {
    car: Car
}

export type MyFormProps = {
    brand: string;
    price: number;
    year: number;
}
