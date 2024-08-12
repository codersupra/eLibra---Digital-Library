import express from 'express'

const router = express();

const username = "Suprajit"
router.get(`/${username}`, (req, res)=>{
    res.status(201).send(`${username}`)
})

export default router;