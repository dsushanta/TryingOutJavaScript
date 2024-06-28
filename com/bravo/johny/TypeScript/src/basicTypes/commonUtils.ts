class CommonUtils {
    static reverseString(input: String): String {
        return input.split('').reverse().join('');
    }

    static reversePositionOfWordsInString(input: String): String {
        return input.split(' ').reverse().join(' ');
    }

    static reverseWordsInString(input: String): String {
        return input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    }
}

export { CommonUtils }