import {Request, Response} from 'express';

interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [
  {id: 1, name: 'Vinicius Henrique', age: 22},
  {id: 2, name: 'Bruno Fabre', age: 23},
];

export default class UsersController {

 // Listar
 public index(request: Request, response: Response): Response {
  return response.json(users);
 }

 //Consultar
 public show(request: Request, response: Response): Response {
  const { id } = request.params;
  const user_id = Number(id);

  const user = users.find((item) => item.id === user_id);

  return response.json(user);
 }

 //Criação
 public create(request: Request, response: Response): Response {
  const { id, name, age } = request.body;

  users = [...users, {id, name, age}];

  return response.json('sucesso')
 }

 // Atualização
 public update(request: Request, response: Response): Response {
  const { id } = request.params;
  const user_id = Number(id);
  
  const { name, age } = request.body;

  users = users.map((item) => item.id === user_id ? {id: user_id, name, age} : item);
  
  return response.json('alterado')
 }
 
 //Exclusão
 public delete(request: Request, response: Response): Response {
  const { id } = request.params;
  const user_id = Number(id);

  users = users.filter((item) => item.id !== user_id);

  return response.json('Deletado');
 }

}



