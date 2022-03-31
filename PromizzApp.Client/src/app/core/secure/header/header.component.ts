import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CoreService } from '../../core.service';
import { PubsubService } from '../../pupsub.service';
import { PromiseAddModalComponent } from '../../../promises/promise-add/promise-add-dialog.component';
import { InviteDialogComponent } from '../../../shared/dialogs/invite-dialog.component';
import { UserModel } from '../../../shared';

@Component({
  selector: 'secure-header',
  templateUrl: './header.component.html',
  host: { 'class': 'secure-header' }
})
export class SecureHeaderComponent implements OnInit {
  public isScroling: boolean = false;
  public currentUser: UserModel = new UserModel();

  constructor(
    private modalService: NgbModal,
    private coreService: CoreService,
    private pubsubService: PubsubService
  ) { }

  public ngOnInit() {
    this.loadCurrentUser();
  }

  public loadCurrentUser() {
    this.coreService.getCurrentUser()
      .subscribe((user: UserModel) => {
        this.currentUser = user;
        this.pubsubService.setUser(user);
      });
  }

  public openPromiseModal() {
    const modalRef = this.modalService.open(PromiseAddModalComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  public openInviteDialog() {
    const modalRef = this.modalService.open(InviteDialogComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  @HostListener("window:scroll", [])
  public onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 0) {
      this.isScroling = true;
    }
    if (number === 0) {
      this.isScroling = false;
    }
  }
}
