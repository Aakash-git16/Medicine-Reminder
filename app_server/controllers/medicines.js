const mongoose = require('mongoose');
const Medicine = mongoose.model('Medicine');

const getMedicines = (req, res) => { Medicine.find().exec().then(meds => res.status(200).json(meds)).catch(err => res.status(404).json(err)); };
const createMedicine = (req, res) => { Medicine.create({ name: req.body.name, dosage: req.body.dosage, time: req.body.time, status: 'upcoming' }).then(med => res.status(201).json(med)).catch(err => res.status(400).json(err)); };
const updateMedicine = (req, res) => { Medicine.findByIdAndUpdate(req.params.id, { status: 'taken' }, { new: true }).then(med => res.status(200).json(med)).catch(err => res.status(404).json(err)); };
const deleteMedicine = (req, res) => { Medicine.findByIdAndDelete(req.params.id).then(() => res.status(204).send()).catch(err => res.status(404).json(err)); };
const deleteAllMedicines = (req, res) => { Medicine.deleteMany({}).then(() => res.status(204).send()).catch(err => res.status(500).json(err)); };

module.exports = { getMedicines, createMedicine, updateMedicine, deleteMedicine, deleteAllMedicines };
