const { Router } = require('express');
const router = Router();
const path = require('path');

const Fit = require('../models/FitData');

router.get('/', async (req, res) => {
    const fits = await Fit.find();
    res.json(fits);
});

router.post('/', async (req, res) => {
    const newFit = new Fit( req.body );
    console.log(newFit);
    await newFit.save();
    res.json({ message: 'Noted champ!'});
});

router.delete('/:id', async (req, res) => {
    const fit = await Fit.findByIdAndDelete(req.params.id);
    console.log(fit);
    res.json({ message: 'Right, off we go.'});
});


module.exports = router;

