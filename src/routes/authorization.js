import { selectUser } from '@lib/db';
import { wrapHandler, sha256, jwtSign } from '@lib/utils';

const ERROR = JSON.stringify({er: true});
const send404 = res => {
    res.writeHead(404, {
        'Content-Type': 'application/json'
    });
    res.end(ERROR);
};

export const post = wrapHandler(async (req, res) => {
    const {login, password} = req.body.data; 
    const [selectedUser, userError] = await selectUser(login)
        .then(user => [user])
        .catch(error => [null, error]);

    if (!selectedUser) {
        if (userError) {
            throw userError;
        }
        return send404(res);
    }

    const hash = await sha256(password);
    if (selectedUser.user_pass !== hash) {
        return send404(res);
    }

    const token = await jwtSign({
        id: selectedUser.id,
        role: selectedUser.user_role
    });

    res.cookie('token', token, {
        maxAge: 3600 * 4 * 1000,
        httpOnly: true,
    });
    res.json({
        token
    });
});
