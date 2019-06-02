import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from './contact.service';

@Component({
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
    public contactForm: FormGroup;
    public submitted: boolean = false;
    public mailChimpResponse: any;

    constructor(
        private contactService: ContactService,
        private router: Router,
        private formBuilder: FormBuilder
    ) { }

    public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });

        this.contactForm.controls.email.valueChanges.subscribe((value: any) => {
            if (this.submitted) {
                this.mailChimpResponse = null;
            }
        });
    }

    get f() { return this.contactForm.controls; }

    public submit() {
        this.mailChimpResponse = null;
        this.submitted = true;

        if (this.contactForm.invalid || !this.contactForm.value.email) {
            return;
        }

        this.contactService.mailChimpSubscribe(this.contactForm.value.email, this.getPlanNameByUrl())
            .subscribe((res) => {
                this.formatMailChimpResponse(res);
            }, error => {
                console.log(error);
            });
    }

    private getPlanNameByUrl(): string {
        var url = this.router.url;

        if (!url) {
            return '';
        }

        if (url.indexOf('contact1') !== -1) {
            return 'Free Plan';
        }

        if (url.indexOf('contact2') !== -1) {
            return 'Premium Plan';
        }

        if (url.indexOf('contact3') !== -1) {
            return 'Business Plan';
        }

        return '';
    }

    private formatMailChimpResponse(response: any) {
        if (response) {
            var jsonResponse = response.json();

            if (jsonResponse.result === 'error') {
                jsonResponse.msg = 'You’re already subscribed!'
            }

            this.mailChimpResponse = jsonResponse;
        }
    }
}
