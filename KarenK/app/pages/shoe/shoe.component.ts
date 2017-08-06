import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChildren, ElementRef, QueryList, AfterViewInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";
import { Image } from "ui/image";
import { SwipeDirection, SwipeGestureEventData, PanGestureEventData } from "ui/gestures";

import { Shoe } from "../../shared/shoes/shoe";
import { ShoeService } from "../../shared/shoes/shoes.service";
import { Device } from "../../shared/device";

import * as _application from 'application';
import animationModule = require("ui/animation");

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
    private hpx:number;
    
    @ViewChildren("dragImage") dragImages: QueryList<ElementRef>;
    prevDeltaX: number;
    prevDeltaY: number;

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
    }

    ngAfterViewInit(): void {
        let i = 0;
        this.dragImages.forEach(el => el.nativeElement.translateX = Device.actualWidth * (i++))
    }

    ngOnDestroy() {
        _application.off(_application.orientationChangedEvent);
    }
    
    show(index: number) {
        this.currentPhotoIndex = index;
        this.move(this.currentPhotoIndex, 1000);
        console.log("v1");
    }

    move(index: number, milliseconds: number) {
        let definitions = new Array<animationModule.AnimationDefinition>();
        let i = 0;
        this.dragImages.forEach(item => {
            definitions.push({
                target: item.nativeElement,
                translate: {x: (i - index) * Device.actualWidth, y: 0},
                duration: milliseconds
            });
            i++;
        });
        var animationSet = new animationModule.Animation(definitions);

        animationSet.play().then(() => {
            // Animation finished
        })
        .catch((e) => {
            console.log(e.message);
        });
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

    onPan(args: PanGestureEventData) {
        if (args.state === 1) {
            this.prevDeltaX = 0;
            this.prevDeltaY = 0;
        } else if (args.state === 2) {
            this.dragImages.forEach(el => el.nativeElement.translateX += args.deltaX - this.prevDeltaX);
            this.prevDeltaX = args.deltaX;
        } else if (args.state === 3) {
            if(args.deltaX < 0 && args.deltaX < Device.actualWidth / -3) {
                // go right
                if(this.currentPhotoIndex < (this.shoe.photos.length-1)) {
                    this.currentPhotoIndex++;
                }
            } else if(args.deltaX > 0 && args.deltaX > (Device.actualWidth / 3)) {
                // go left
                if(this.currentPhotoIndex > 0) {
                    this.currentPhotoIndex--;
                }
            }
            this.move(this.currentPhotoIndex, 500);
        }
    }
}
