import { Component, OnInit } from '@angular/core';
import { TESTIMONIALS, Testimonial } from '../shared/meta/testimonials.data';
import { ParallaxConfig } from 'ngx-parallax';
@Component({
  selector: 'sms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config: ParallaxConfig = { initialValue: -50, ratio: .05 };
  testimonials: Testimonial[] = TESTIMONIALS;
  constructor() { }

  ngOnInit(): void {
  }

}
