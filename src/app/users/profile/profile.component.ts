import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { deflateSync } from 'zlib';
import { User } from '../../shared/models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // users: User[];

  users$: Observable<User>;
  error$ = new Subject<boolean>();
  userSelect: User;

  constructor(
    private service: UsersService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.service.list().subscribe(dates => this.users = dates);
    this.users$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        // this.handleError();
        return EMPTY;
      })
    );
  }

  
  onEdit(id) {
    this.router.navigate(['editar', id]);
  }

  onDelete(user) {
    this.userSelect = user;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });

    this.service.remove(this.userSelect.id)
    .subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/'], { relativeTo: this.route });
      },
      error => {console.log(error)
      }
    );
  }

}
