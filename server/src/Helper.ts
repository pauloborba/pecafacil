export class Helper {
    static createInstanceFromJson<T>(objType: { new(): T; }, json: any) {
        const newObj = new objType();
    
        for (const prop in json) {
            if (json.hasOwnProperty(prop)) {
                if (newObj[prop] == null) {                    
                    newObj[prop] = json[prop];
                }
                else {
                    newObj[prop] = Helper.createInstanceFromJson(newObj[prop], json[prop]);
                }
            }
        }
    
        return newObj;
    }
}