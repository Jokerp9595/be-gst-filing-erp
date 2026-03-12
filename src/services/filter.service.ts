export class FilterService {

    static searchValue(fieldSearch: string, type: string, field: string, value: any) {
        switch (type) {
            case "like":
                fieldSearch += (fieldSearch.length > 0 ? " AND " : "") + field + " LIKE '%" + value + "%'";
                break;
            case "equal":
                fieldSearch += (fieldSearch.length > 0 ? " AND " : "") + field + " = '" + value + "'";
                break;
            case "grater then equal to":
                fieldSearch += (fieldSearch.length > 0 ? " AND " : "") + field + " >= '" + value + "'";
                break;
            case "less then equal to":
                fieldSearch += (fieldSearch.length > 0 ? " AND " : "") + field + " <= '" + value + "'";
                break;
        }
        return fieldSearch;
    }

    static addFilterValue(filter: string, field: string, element: any) {
        switch (element.type) {
            case "contains":
                filter += (filter.length > 0 ? " OR " : "") + field + " LIKE '%" + element.value + "%'";
                break;
            case "equals":
                filter += (filter.length > 0 ? " OR " : "") + field + " = '" + element.value + "'";
                break;
            case "start with":
                filter += (filter.length > 0 ? " OR " : "") + field + " LIKE '" + element.value + "%'";
                break;
            case "end with":
                filter += (filter.length > 0 ? " OR " : "") + field + " LIKE '%" + element.value + "'";
                break;
        }
        return filter;
    }

}