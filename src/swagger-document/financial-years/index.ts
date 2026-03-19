
import tags from '../tag-constant';
import components from './components';
import financialYearAdd from './add';
import financialYearUpdate from './update';
import financialYearStatus from './status';
import financialYearSelectAll from './select-all';
import financialYearSelectActiveByTypeId from './select-active';
import financialYearSelectById from './select-by-id';

const financialYears = {
    ...components,
    tags: [
        {
            name: tags.financialYear,
            description: 'Financial Year CRUD API'
        }
    ],
    paths: {
        '/FinancialYear/Add': {
            ...financialYearAdd
        },
        '/FinancialYear/Update': {
            ...financialYearUpdate
        },
        '/FinancialYear/Status': {
            ...financialYearStatus
        },
        '/FinancialYear/SelectAll': {
            ...financialYearSelectAll
        },
        '/FinancialYear/SelectActive/{financialYearId}': {
            ...financialYearSelectActiveByTypeId
        },
        '/FinancialYear/SelectById/{financialYearId}': {
            ...financialYearSelectById
        }    
    }
};

export default { ...financialYears };