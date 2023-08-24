const router = require('express').Router();
const bcrypt = require('bcryptjs');
let guider_Schema = require('../models/guider');

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, nic, phone } = req.body;
        const hashedPass = await bcrypt.hash(password, 10);

        const existingUser = await guider_Schema.findOne({ email });
        if (existingUser) {
            return res.json({
                message: 'Email is Already Used'
            })
        }

        const guider = new guider_Schema({
            name, email, password: hashedPass, nic, phone
        });

        await guider.save();
        return res.json({ message: 'Guider Added' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering user');
    }
});
router.route("/update/").put(async (req, res) => {
    const { name, email, password, nic, phone } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const guider = {
        name, email, password: hashedPass, nic, phone
    }
    const update = await guider_Schema.findOneAndUpdate({ email: email }, guider).then(() => {
        res.status(200).send({ status: "Guider Updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating Data", error: err.message });
    });
});

router.route("/getguider/:userName").get(async (req, res) => {
    guider_Schema.find({ email: req.params.userName })
        .then(guider => res.json(guider))
        .catch(err => res.status(400).json('No Data'))
});


router.route("/deleteguider/:userName").delete(async (req, res) => {
    guider_Schema.findOneAndDelete({ email: req.params.userName })
        .then(() => {
            res.status(200).send({ status: "Payment Deleted" });

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Deleting Data", error: err.message });
        });
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await guider_Schema.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: false });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: false });
        }

        const userTypeSearch = await guider_Schema.find({ email, status: 'Approved' });

        if (!userTypeSearch) {
            return res.status(400).json({ message: false });
        }

        return res.status(200).json({ message: true });

    } catch (error) {
        console.log(error);
        res.status(500).send('Error logging in');
    }
});

module.exports = router;