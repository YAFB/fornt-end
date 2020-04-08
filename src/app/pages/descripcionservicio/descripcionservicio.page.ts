import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-descripcionservicio',
  templateUrl: './descripcionservicio.page.html',
  styleUrls: ['./descripcionservicio.page.scss'],
})
export class DescripcionservicioPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
