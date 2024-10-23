import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UcCardContainerComponent } from "./uc-card-container/uc-card-container.component";
import { UcCardHeaderComponent } from "./uc-card-header/uc-card-header.component";
import { UcCardContentComponent } from "./uc-card-content/uc-card-content.component";
import { UcCardFooterComponent } from "./uc-card-footer/uc-card-footer.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UcCardContainerComponent,
    UcCardHeaderComponent,
    UcCardContentComponent,
    UcCardFooterComponent,
  ],
  exports: [
    UcCardContainerComponent,
    UcCardHeaderComponent,
    UcCardContentComponent,
    UcCardFooterComponent,
  ],
})
export class UcCardModule {}
