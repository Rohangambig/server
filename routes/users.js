import express from 'express'
import {
    getUser,
    getUserFriends,
    addRemoveFreinds
} from '../controllers/user.js'

import {verifyToken } from '../middleware/auth.js'

const router  =  express.Router()

router.get('/:id',verifyToken,getUser);
router.get('/:id/freinds',verifyToken,getUserFriends);


router.patch('/:id/:freindId',verifyToken,addRemoveFreinds);

export default router;