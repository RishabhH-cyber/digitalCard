import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shared-carousel',
  templateUrl: './shared-carousel.component.html',
  styleUrls: ['./shared-carousel.component.scss']
})
export class SharedCarouselComponent implements OnInit {
  constructor(private modalService: BsModalService) { }
  images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs here
  ];
  bsModalRef: BsModalRef | undefined;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  imageSet: string = '';

  updateVariable(): void {
    this.imageSet = 'Updated Value';
  }

  openImageCarouselModal(template: any) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  ngOnInit(): void {
  }

}
