export function romanToInteger(str) {
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let result = 0;
    let right;
    let left;

    for (let i = 0; i <= str.length - 1; i++) {
        right = transformations(str[i]);
        left = transformations(str[i + 1]);

        if (right < left) {
            result -= right;
        } else {
            result += right;
        }
    }
    return result;
}
function transformations(chr) {
    switch (chr) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}
