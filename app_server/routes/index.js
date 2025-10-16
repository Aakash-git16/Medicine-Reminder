const express = require('express');
const router = express.Router();
const ctrlMedicines = require('../controllers/medicines');

router.get('/medicines', ctrlMedicines.getMedicines);
router.post('/medicines', ctrlMedicines.createMedicine);
router.put('/medicines/:id/take', ctrlMedicines.updateMedicine);
router.delete('/medicines/:id', ctrlMedicines.deleteMedicine);
router.delete('/medicines/all', ctrlMedicines.deleteAllMedicines);

module.exports = router;