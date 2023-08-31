export class TaxPayer {
    constructor(public pin: string, public usertType: string,
        public companyName: string, public taxStation: string,
        public postalCode: string,  public city: string,
        public physicalAddress: string, public email: string,
        public phoneNumber: string, public productType: number[]) {
    }
 }