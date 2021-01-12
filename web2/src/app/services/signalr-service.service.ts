import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Promocao } from '../core/promocao';

@Injectable({
  providedIn: 'root'
})
export  class SignalrServiceService {

  constructor() { }
  private hubConnection: signalR.HubConnection

   startConnection (){
    this.hubConnection = new signalR.HubConnectionBuilder() //abrindo conexão e indicando o Hub
                            .withUrl('https://localhost:5001/PromoHub')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  invokeClientCallerMethod(){
    this.hubConnection.on("CadastradoSucesso", ()=>{
      return console.log("cadastrado realizado com sucesso meu padrinho");
    });
  }

  public invokeClientOthersMethod = ()=>{
    this.hubConnection.on("ReceberPromocao", (promocao)=>{
      return console.log(promocao);

    });
  }

  invokeMethod(method: string, params?: Promocao){
      this.hubConnection.invoke(method, params).then(function(){
        console.log("cadastrado");
      }).catch(function(err){
        console.log(err);
      })
  }
}
