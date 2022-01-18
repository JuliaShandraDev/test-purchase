import { Component, Input} from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {ICard} from "./interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card?: ICard;
  @Input() isHighestPrice?: boolean;
  faCoffee = faCoffee;


  ngOnInit(): void {
    console.log(this.isHighestPrice)
  }

}
