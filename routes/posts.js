import express from 'express';
import {getFeedPosts,getUserPosts,likePost} from '../controllers/posts.js'
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Reading 
router.get('/',verifyToken,getFeedPosts);  // gives us all the post which is present in the database
router.get('/:userId/posts',verifyToken,getUserPosts); // get the individual user posts

// update
router.patch('/:id/like',verifyToken,likePost); // like the post

export default router;