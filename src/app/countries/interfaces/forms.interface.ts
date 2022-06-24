import { FormControl } from "@angular/forms";

export interface BorderForm {
    region?: FormControl<string>,
    country?: FormControl<string>,
    borders?: FormControl<string>,
}