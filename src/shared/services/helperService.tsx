export default class HelperService {
    static isNullOrUndefined = (_value: any) => {
        return _value === undefined || _value === null;
    }

    static isValidNumber = (_value: number | null | undefined, _minValue: number = 0) => {
        return (_value && _value >= _minValue);
    }
    static isNotValidNumber = (_value: number | null | undefined, _minValue: number = 0) => {
        return !HelperService.isValidNumber(_value, _minValue);
    }
}