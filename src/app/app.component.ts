import { Component, OnInit } from '@angular/core';
import { EngineService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'engineTest';
  constructor(private engineService: EngineService) {}

  ngOnInit(): void {}

  createEngine() {
    this.engineService.start().subscribe((res) => {
      console.log('engine started', res);
      setTimeout(() => {
        console.log('check status');
        // this.engineService.status(res).subscribe(status=>{

        // })
      }, 1100);
    });
  }
}
