import User from '../models/user';

export const register = async (req, res) => {
    console.log(req.body);

    const { name, email, password } = req.body;

    // Validation
    if (!name) return res.status(400).send('Name is required.');
    if (!password) return res.status(400).send('Password is required.');
    if (password.length < 6) return res.status(400).send('Password length must be at least 6 characters.');

    try {
        const userExists = await User.findOne( { email }).exec();
        if (userExists) return res.status(400).send('Email already in use.');
    } catch (err) {
        console.log('FETCH USER FAILED', err);
        return res.status(500).send('Email validation failed.');
    }

    // Clear to save!
    const user = new User(req.body);

    try {
        await user.save();
        console.log('USER CREATED', user);
        return res.json({ ok: true });
    } catch (err) {
        console.log('CREATE USER FAILED', err);
        return res.status(400).send('Error')
    }
};
