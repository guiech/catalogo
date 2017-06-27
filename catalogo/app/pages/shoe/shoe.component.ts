import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Shoe } from "../../shared/shoes/shoe";
import { ShoeService } from "../../shared/shoes/shoes.service";

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

    constructor(
        private shoeService: ShoeService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params["id"];
        this.shoe = this.shoeService.getShoe(id);
        this.currentPhoto = this.shoe.photos[0];
    }

    show(photo: string) {
        console.log("click photo");
        this.currentPhoto = photo;
    }
}
