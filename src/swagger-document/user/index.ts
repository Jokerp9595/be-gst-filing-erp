
import tags from '../tag-constant';
import components from './components';
import userAdd from './add';
import userUpdate from './update';
import userStatus from './status';
import userSelectAll from './select-all';
import userSelectActiveByTypeId from './select-active';
import userSelectById from './select-by-id';
import userSelect from './select-user';

const user = {
    ...components,
    tags: [
        {
            name: tags.user,
            description: 'User CRUD API'
        }
    ],
    paths: {
        '/User/Add': {
            ...userAdd
        },
        '/User/Update': {
            ...userUpdate
        },
        '/User/Status': {
            ...userStatus
        },
        '/User/SelectAll': {
            ...userSelectAll
        },
        '/User/SelectActive/{userTypeId}': {
            ...userSelectActiveByTypeId
        },
        '/User/SelectById/{userId}': {
            ...userSelectById
        },
        '/User/SelectUser': {
            ...userSelect
        },     
    }
};

export default { ...user };