import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  ngAfterViewInit() {
    jQuery(".nav a").on("click", function(){
      jQuery(".nav").find(".active").removeClass("active");
      jQuery(this).addClass("active");
    });
  }
}