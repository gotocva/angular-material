import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
