import { Component, OnInit, OnDestroy, ChangeDetectorRef} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

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
   private currentPhoto: string;
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
        this.page.actionBarHidden = true;
        const id = this.route.snapshot.params["id"];
        this.shoe = this.shoeService.getShoe(id);
        this.currentPhoto = this.shoe.photos[0].file;
        this.photos = this.shoe.photos.length;
    }

    ngOnDestroy() {
        _application.off(_application.orientationChangedEvent);
    }
    
    show(photo: string) {
        this.currentPhoto = photo;
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
}
