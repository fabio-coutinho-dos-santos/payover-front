import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSidenav,{static: true}) sidenav!: MatSidenav;

  constructor(
    private elementRef:ElementRef,
    private observer:BreakpointObserver
    ) { }

  ngOnInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over'
        this.sidenav.close()
        this.elementRef.nativeElement.style.setProperty('--padding-css', "5%");
      }else{
        this.sidenav.mode='side'
        this.sidenav.open()
        this.elementRef.nativeElement.style.setProperty('--padding-css', "20%");
      }
    });
  }

}
