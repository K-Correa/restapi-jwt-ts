import {Router} from 'express';
import { singup,singin,profile, testing } from "../controllers/authController";
import { TokenValidation} from '../libs/validateToken';

const router: Router = Router();

router.post('/singup', singup);
router.post('/singin', singin);
router.get('/profile', TokenValidation ,profile);
router.get('/testing', TokenValidation, testing);

export default router;