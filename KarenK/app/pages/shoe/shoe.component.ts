import { Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";
import { SwipeDirection, SwipeGestureEventData } from "ui/gestures";

import { Shoe } from "../../shared/shoes/shoe";
import { ShoeService } from "../../shared/shoes/shoes.service";
import { Device } from "../../shared/device";

import * as _application from 'application';

@Component({
    selector: "cg-item-page",
    providers: [ShoeService],
    moduleId: module.id,
    templateUrl: "./shoe.component.html",
    styleUrls: ['./shoe-common.css']
})
export class ShoeComponent implements OnInit {
   private shoe: Shoe;
   private currentPhotoIndex: number;
   private photos:number;
   private hpx:number;

    constructor(private shoeService: ShoeService,
                private route: ActivatedRoute,
                private page: Page,
                private cdRef:ChangeDetectorRef ) {
        _application.on(_application.orientationChangedEvent, this.setOrientation.bind(this));
        this.setThumbHeight();
    }

    ngOnInit(): void {
        this.page.actionBarHidden = false;
        const id = this.route.snapshot.params["id"];
        this.shoe = this.shoeService.getShoe(id);
        this.currentPhotoIndex = 0;
        this.photos = this.shoe.photos.length;
    }

    ngOnDestroy() {
        _application.off(_application.orientationChangedEvent);
    }
    
    show(index: number) {
        this.currentPhotoIndex = index;
    }

    getCurrentPhoto() {
        return this.shoe.photos[this.currentPhotoIndex].file;
    }

    setOrientation(args: _application.OrientationChangedEventData) {
        Device.height = this.page.getMeasuredWidth();
        Device.width = this.page.getMeasuredHeight();
        this.setThumbHeight();
        this.cdRef.detectChanges();
    }

    setThumbHeight() {
        this.hpx = Math.round(Device.height * 10 / 100);
    }

    onSwipe(args: SwipeGestureEventData) {
        switch(args.direction) {
            case SwipeDirection.left:
                if(this.currentPhotoIndex < (this.photos - 1)) {
                    this.currentPhotoIndex++;
                }
                break;
            case SwipeDirection.right:
                if(this.currentPhotoIndex > 0) {
                    this.currentPhotoIndex--;
                }
                break;
            default:
                break;
        }
    }
}
