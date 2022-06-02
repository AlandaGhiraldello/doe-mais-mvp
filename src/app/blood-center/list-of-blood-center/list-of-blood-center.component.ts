import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BloodCenter } from 'src/app/shared/models/blood-center';
import { BloodCenterService } from '../blood-center.service';

@Component({
  selector: 'app-list-of-blood-center',
  templateUrl: './list-of-blood-center.component.html',
  styleUrls: ['./list-of-blood-center.component.css']
})
export class ListOfBloodCenterComponent implements OnInit {

  bloodCenters$: Observable<BloodCenter[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: BloodCenterService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {  
    this.bloodCenters$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        // this.handleError();
        return EMPTY;
      })
    );
  }

}
