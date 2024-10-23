import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

import { UcCardModule } from "../app/uc-card/uc-card.module";

@Component({
  selector: "storybook-card",
  standalone: true,
  imports: [CommonModule, UcCardModule],
  template: `<uc-card-container>
    <uc-card-header header [title]="title" />
    <uc-card-content content [content]="content" />
    <uc-card-footer footer [text]="link" />
  </uc-card-container>`,
  //styleUrls: ['./button.css'],
})
export class CardComponent {}
