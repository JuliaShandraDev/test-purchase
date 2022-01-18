import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  constructor() { }
  inputs = [
    {
      title: "firstName",
      type: "text",
    },
    {
      title: "lastName",
      type: "text",
    },
    {
      title: "phone",
      type: "tel",
    },
    {
      title: "email",
      type: "email",
    },
    {
      title: "country",
      type: "text",
    },
    {
      title: "state",
      type: "text",
    },
    {
      title: "city",
      type: "text",
    },
    {
      title: "street1",
      type: "text",
    },
    {
      title: "street2",
      type: "text",
    },
    {
      title: "zip code",
      type: "number",
    },
    {
      title: "card number",
      type: "number",
    },
    {
      title: "ccv",
      type: "number",
    },
    {
      title: "exp.date",
      type: "date",
    },
    {
      title: "card type",
      type: "text",
    }
  ]
  ngOnInit(): void {
  }

}
