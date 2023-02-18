import { wrapHandler, getCookies, jwtVerify } from '@lib/utils';

export const get = wrapHandler(async (req, res) => {
    const user = {
        isAdmin: false,
        //isEditor: false,
    };
    const {token} = getCookies(req);
    if (token) {
        const payload = await jwtVerify(token);
        switch (payload.role) {
            case 'admin':
                user.isAdmin = true;
                break;
            // case 'editor':
            //     user.isEditor = true;
            //     break;
        }
    }

    res.json(user);
});
