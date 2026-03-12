
import tags from '../tag-constant';
import components from './components';
import authenticationLogin from './login';
import authenticationChangePassword from './change-password';
import authenticationRefreshToken from './refresh-token';

const authentication = {
    ...components,
    tags: [
        {
            name: tags.authentication,
            description: 'Authentication API'
        }
    ],
    paths: {
        '/Authentication/Login': {
            ...authenticationLogin
        },
        '/Authentication/ChangePassword': {
            ...authenticationChangePassword
        },
        '/Authentication/RefreshToken': {
            ...authenticationRefreshToken
        }
    }
};

export default { ...authentication };