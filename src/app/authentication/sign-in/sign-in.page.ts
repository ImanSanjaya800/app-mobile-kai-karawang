import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  
  form = {
    username: '',
    password: ''
  }

  constructor(
    private router : Router,
    private service : ApiService
  ) { }

  ngOnInit() {
  }

  onSubmit(){

    if(this.form.username != '' &&  this.form.password != ''){
      this.service.UserLogin(this.form)
      .subscribe( (data:any ) => {
        if(data['message'] === 'Sussess : Login successful'){
          // berhasil login
          console.log("Success ==> "+ JSON.stringify(data));
          localStorage.setItem('message', data['message']);
          localStorage.setItem("username",this.form.username);
          localStorage.setItem("password",this.form.password);
          this.router.navigate(["/home"]);  
        }
      },
      err => {
        console.error('Gagal login: ', err);
        localStorage.setItem('message', 'Terjadi Kesalahan');
        // this.presentAlert('Gagal Login', 'Login gagal. Silahkan cek kembali jaringan internet anda.');
      })
    }

  }

}
