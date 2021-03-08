import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialModules = [
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatTabsModule,
    MatSnackBarModule,
    MatListModule,
    ScrollingModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...materialModules,
    ],
    exports: [
        ...materialModules,
    ]
})
export class SharedModule { }
