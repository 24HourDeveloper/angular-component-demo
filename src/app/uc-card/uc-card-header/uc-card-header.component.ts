import { Component, Input } from "@angular/core";

@Component({
  selector: "uc-card-header",
  standalone: true,
  imports: [],
  templateUrl: "./uc-card-header.component.html",
  styleUrl: "./uc-card-header.component.css",
})
export class UcCardHeaderComponent {
  @Input() title = "";
}
