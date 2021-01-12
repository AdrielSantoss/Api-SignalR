import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Promocao } from 'src/app/core/promocao';
import { SignalrServiceService } from 'src/app/services/signalr-service.service';
@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.scss']
})
export class CadastrarProdutosComponent implements OnInit {

    loginForm = this.fb.group({
      empresa: ['', Validators.required],
      chamada: ['', Validators.required],
      regras: ['', Validators.required],
      enderecoUrl: ['', Validators.required],
  });

  constructor(private signalR: SignalrServiceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signalR.startConnection()
    this.signalR.invokeClientCallerMethod();
  }

  save(){
    try {
      this.signalR.invokeMethod("CadastrarPromocao", this.loginForm.value);
      this.router.navigate(["/promocoes"])

    } catch (error) {
      console.log(error) 
    }

  }

}
