import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../shared';
import { ProfileService } from '../profile.service';

@Component({
    templateUrl: './personal-info.component.html'
})
export class PersonalInfoComponent implements OnInit {
    public mouseOvered: boolean;
    public user: UserModel = new UserModel();
    public selectedFile: File;

    constructor(private profileService: ProfileService) { }

    public ngOnInit(): void {
        this.profileService.getCurrentUser()
            .subscribe(user => {
                this.user = user;
            });
    }

    public avatarChange(event: any) {
        if (event.target.files.length === 0)
            return;

        let selectedFile = event.target.files[0];

        if (selectedFile.type.match(/image\/*/) == null)
            return;

        var reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (_event) => {
            this.user.Avatar = <string>reader.result;
        }
    }

    public saveChanges(editForm: any) {
        if (editForm && editForm.valid) {
            this.profileService.updateCurrentUser(this.user)
                .subscribe(result => {

                });
        }
    }
}
