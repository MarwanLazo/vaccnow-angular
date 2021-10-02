import { BranchModel } from "./BranchModel";
import { PaymentMethodEnum } from "./PaymentMethodEnum";


export class ScheduleVaccinationModel {
    id!: number;
    paymentMethod!: PaymentMethodEnum;
    email!: string;
    vacDesc!: string;
    vacTime!: Date;
    branch!: BranchModel;


}
