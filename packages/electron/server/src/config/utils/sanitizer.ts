export class Sanitizer {

    static trimStrings(object: {[key: string]: any}): void {
        for (const key in object) {
            if (typeof object[key] === 'string') {
                object[key] = object[key].trim();
            }
        }
    }
    
}