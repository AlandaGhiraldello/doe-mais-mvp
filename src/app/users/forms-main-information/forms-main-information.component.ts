import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
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
    private fb: FormBuilder,
    private service: UsersService,
    private location: Location,
    // private modal:AlertModalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // this.form = this.fb.group({
    //   nome: [null, [Validators.required]]
    // })

    const user = this.route.snapshot.data['user'];

    this.form = this.fb.group({
      id: [user.id],
      nome: [user.name, [Validators.required]],
      email: [user.email, [Validators.required]],
      senha: [user.password, [Validators.required]],
      cpf: [user.rg, [Validators.required]],
      sexo_biologico: [user.sex, [Validators.required]]
    });

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onsubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');

      let msgSuccess = 'Conta criada com sucesso!';
      let msgError = 'Erro ao criar conta, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Conta criada com sucesso!';
        msgError = 'Erro ao criar conta, tente novamente!';
      }

      this.service.save(this.form.value).subscribe(
        success => {
          // this.modal.showAlertSuccess(msgSuccess);
            this.location.back();
        },
        error => {
          this.loading = false;
          // this.modal.showAlertDanger(msgError)
        }
      );

    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }

}
