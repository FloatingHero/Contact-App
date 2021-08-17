import bcrypt from 'bcrypt';

class Hash {

    encryptPass(password) {
        if (password !== '' || password !== null || password !== undefined) {
            return bcrypt.hashSync(password, 10);
        } else {
            console.error('Algo ha salido más');
            return null;
        }
    }

    matchPass(password, hashedPassword) {
        try {
            return bcrypt.compareSync(password, hashedPassword);
        } catch (err) {
            throw err;
        }

    }

}

export default new Hash;