const router = require('express').Router();
let feedback_Schema = require('../models/feedback');

router.route('/addfeedback').post((req, res) => {
    const { name, feedbacks} = req.body;
    const feedback = new feedback_Schema({ name, feedbacks });
    feedback.save()
        .then(() => res.json('Payment Add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route("/allfeedback").get(async (req, res) => {
    feedback_Schema.find()
        .then(feedback => res.json(feedback))
        .catch(err => res.status(400).json('No Data'))
});



module.exports = router;