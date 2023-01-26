import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AdvancedService } from '@sinequa/components/advanced';

@Component({
  selector: 'app-advanced-form-range',
  templateUrl: './advanced-form-range.component.html'
})
export class AdvancedFormRangeComponent implements OnInit {

  form: UntypedFormGroup;

  code = `<sq-advanced-form-range
    [form]="form"
    [field]="'size'">
</sq-advanced-form-range>`;

  code2 = `form: UntypedFormGroup;

ngOnInit() {
    this.form = this.formBuilder.group({});
    this.form.addControl('size',
        this.advancedService.createRangeControl('size',
            [this.advancedService.validators.range('size')]
    ));
}`;

  constructor(private formBuilder: UntypedFormBuilder,
    private advancedService: AdvancedService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.form.addControl('size', this.advancedService.createRangeControl('size',
      [this.advancedService.validators.range('size')]
    ));
  }

}
