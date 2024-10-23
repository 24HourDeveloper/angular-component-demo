import { Component, Input } from "@angular/core";

@Component({
  selector: "uc-card-content",
  standalone: true,
  imports: [],
  templateUrl: "./uc-card-content.component.html",
  styleUrl: "./uc-card-content.component.css",
})
export class UcCardContentComponent {
  @Input() content = "";
}
