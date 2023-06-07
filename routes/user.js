import { Router } from 'express';
import { usuarioGet, usuarioPost, usuarioPut, usuarioDelete } from '../controllers/user.js';
export const router= Router();

router.get('/', usuarioGet);

router.post('/', usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/', usuarioDelete);
