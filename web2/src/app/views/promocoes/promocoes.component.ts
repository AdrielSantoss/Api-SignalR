import { Component, OnInit } from '@angular/core';
import { SignalrServiceService } from 'src/app/services/signalr-service.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {

  constructor(private signalR: SignalrServiceService) { }

  ngOnInit() {
    this.signalR.invokeClientOthersMethod();
  }

}
