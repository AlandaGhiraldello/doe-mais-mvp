import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
// import { AlertModalService } from 'src/app/shared/alert-modal.service';


@Component({
  selector: 'app-forms-main-information',
  templateUrl: './forms-main-information.component.html',
  styleUrls: ['./forms-main-information.component.css']
})
export class FormsMainInformationComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  private loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsersService,
    private location: Location,
    // private modal:AlertModalService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {

    // this.form = this.fb.group({
    //   nome: [null, [Validators.required]]
    // })

    const user = this.route.snapshot.data['user'];

    this.form = this.formBuilder.group({
      id: [user.id],
      name: [user.name, [Validators.required]],
      email: [user.email, [Validators.required]],
      password: [user.password, [Validators.required, Validators.minLength(5)]],
      rg: [user.rg, [Validators.required]],
      sex: [user.sex, [Validators.required]],
      typeblood: [user.typeblood, [Validators.required]],
      gender: [user.gender, [Validators.required]],
      birthday: [user.birthday, [Validators.required]],
      phone: [user.phone, [Validators.required]],
      acceptTerms: [user.acceptTerms, [Validators.required]],
      acceptNotifications: [user.acceptNotifications, [Validators.required]]
    });

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');

      let msgSuccess = 'Conta criada com sucesso!';
      let msgError = 'Erro ao criar conta, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Conta atualizada com sucesso!';
        msgError = 'Erro ao atualizar conta, tente novamente!';
      }

      this.service.save(this.form.value).subscribe(
        success => {
          console.log(success)
          // this.modal.showAlertSuccess(msgSuccess);
          this.router.navigate(['perfil/1']);
        },
        error => {
          this.loading = false;
          console.log(error)
          // this.modal.showAlertDanger(msgError)
        }
      );

    }
  }

  // onCancel() {
  //   this.submitted = false;
  //   this.form.reset();
  //   // console.log('onCancel');
  // }

}
