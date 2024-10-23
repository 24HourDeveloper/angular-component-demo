import { Component, Input } from "@angular/core";

@Component({
  selector: "uc-card-footer",
  standalone: true,
  imports: [],
  templateUrl: "./uc-card-footer.component.html",
  styleUrl: "./uc-card-footer.component.css",
})
export class UcCardFooterComponent {
  @Input() text = "";
}
