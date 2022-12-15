import { DeepPartial } from "../src";

type Employee = {
    name: string;
    age: number;
    address: {
        number: number;
        street: string;
    };
};

const myHouseNumber: DeepPartial<Employee> = { address: { number: 52 } };
