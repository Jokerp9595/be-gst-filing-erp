"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterService = void 0;
class FilterService {
    static searchValue(fieldSearch, type, field, value) {
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
    static addFilterValue(filter, field, element) {
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
exports.FilterService = FilterService;
//# sourceMappingURL=filter.service.js.map