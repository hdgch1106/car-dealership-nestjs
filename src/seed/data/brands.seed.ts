import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: "Volvo",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "BMW",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Mercedes Benz",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Audi",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Porsche",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Ferrari",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Lamborghini",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Bugatti",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Maserati",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Alfa Romeo",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Bentley",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Rolls Royce",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Jaguar",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Land Rover",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Mini",
        createdAt: new Date().getTime(),
    },
]

