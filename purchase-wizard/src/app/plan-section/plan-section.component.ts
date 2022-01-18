import { Component, OnInit } from '@angular/core';
import {ICard} from "../shared/card/interfaces";

@Component({
  selector: 'app-plan-section',
  templateUrl: './plan-section.component.html',
  styleUrls: ['./plan-section.component.scss']
})
export class PlanSectionComponent implements OnInit {

  constructor() { }
  cards = [
    {
      points: ["best price", "common choice", "user friendly"],
      price: 10
    },
    {
      points: ["smart price", "smart choice", "temporary access"],
      price: 15
    },
    {
      points: ["expensive price", "ultimate choice", "unlimited access"],
      price: 20
    }
  ]
  prices: number[] = this.cards?.map((card: ICard)=> card.price);
  highestPrice: number = Math.max.apply(null, this.prices);
  mostExpensiveCard: ICard | unknown = this.cards.find((card:ICard) => card.price === this.highestPrice)

  ngOnInit(): void {
    console.log("1!!!", this.highestPrice)
  }

}
