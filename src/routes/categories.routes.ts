import { Request, Response, Router } from "express";
import { v4 as uuidV4 } from 'uuid';

export const categoriesRoutes = Router();


const categories = [

];

categoriesRoutes.post("/categories", (req: Request, res: Response) => {
    const { name, description } = req.body;
    const category = {
        id: uuidV4(),
        name,
        description,
    }

    categories.push(category);
    res.status(201).json({ message: "Categoria Criada com sucesso" });
});

categoriesRoutes.get("/categories", (req: Request, res: Response) => {
    res.status(200).json(categories);
});



