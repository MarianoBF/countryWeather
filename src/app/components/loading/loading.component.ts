import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loadingMessage: string;
  constructor() {
    this.loadingMessage = "Cargando."
   }

  ngOnInit(): void {
    setInterval(()=>this.loadingMessage+=".", 300)
  }

}
