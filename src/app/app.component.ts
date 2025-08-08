import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterApp';
  count=0

  handleCounter(val:string){
    if(val==="minus"){
      this.count = this.count-1
    }else if(val==="plus"){
       this.count = this.count+1
    }else if(val==="zero"){
       this.count = 0
    }
  }
}
