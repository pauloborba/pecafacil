export class Helper {
    static Parse(obj: any, val: any) {
        let keys = Object.keys(val);
        for(let key in keys) {
            obj[key] = val[key];
        }
    }
}