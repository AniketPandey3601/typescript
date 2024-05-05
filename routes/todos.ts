import { Router } from 'express';
import {Todo} from '../models/todo'

const router = Router();

const todos:Todo[] = []

router.get('/' , (req,res,next)=>{

    res.status(200).json({todos:todos})

})

router.post('/' , (req,res , next)=>{
  const newtodo :Todo = {
    id:new Date().toISOString(),
    text : req.body.text

  };

  todos.push(newtodo)

})
export default router;