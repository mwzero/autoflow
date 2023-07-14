import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

declare function flowy(canvas: any, drag: any, release: any, snapping: any) :any;
declare function initializeFlow() :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'autoflow';

  @ViewChild("canvas", { static: false })
  canvas!: ElementRef;

  //blocklist = '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                  <div class="blockico"><span></span><img src="assets/eye.svg"></div><div class="blocktext">                        <p class="blocktitle">New visitor</p><p class="blockdesc">Triggers when somebody visits a specified page</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/action.svg"></div><div class="blocktext">                        <p class="blocktitle">Action is performed</p><p class="blockdesc">Triggers when somebody performs a specified action</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/time.svg"></div><div class="blocktext">                        <p class="blocktitle">Time has passed</p><p class="blockdesc">Triggers after a specified amount of time</p>          </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme"><img src="assets/grabme.svg"></div><div class="blockin">                    <div class="blockico"><span></span><img src="assets/error.svg"></div><div class="blocktext">                        <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers when a specified error happens</p>              </div></div></div>';

  rightcard = false;
  tempblock:any | undefined;
  tempblock2 :any | undefined;


  ngAfterViewInit(): void {
    //flowy(this.canvas.nativeElement , this.drag, this.release, this.snapping);

    document.addEventListener("DOMContentLoaded", function(){

      console.log('keys pressed');
      initializeFlow();

    });

  }
  /*
  snapping(drag: any, first: any) {
    return true;
  }
  
  drag(block: any) {
    block.nativeElement.classList.add("blockdisabled");
    this.tempblock2 = block;
  }
  
  release() {
    if (this.tempblock2) {
        this.tempblock2.nativeElement.classList.remove("blockdisabled");
    }
  }
  */

}
