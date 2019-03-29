import { Component } from '@angular/core';
import { sampleProducts } from './products';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';

interface ColumnSetting {
  field: string;
  title: string;
  format?: string;
  type: 'text' | 'numeric' | 'boolean' | 'date';
  Icon?: string;
  ToolTipText?: string;
}

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid
        [kendoGridBinding]="gridData"
        [filterable]="true"
        scrollable="none"
        >
        <kendo-grid-column
          *ngFor="let column of columns"
          field="{{column.field}}"
          title="{{column.title}}"
          format="{{column.format}}"
          filter="{{column.type}}"
          headerClass="{{column.Icon}}"
        >
         <ng-template kendoGridHeaderTemplate let-column let-columnIndex="columnIndex">
         {{column.field}}
          <span [ngClass]="{'k-icon k-i-question k-i-help' : column.headerClass === 'ToolTip'}"  (mouseenter)="onMouseEnter($event, column)"
                    (mouseleave)="onMouseLeave()"></span>
                </ng-template>
        </kendo-grid-column>
  </kendo-grid>
  `
})
export class AppComponent {
  public gridData: any[] = sampleProducts;

  public columns: ColumnSetting[] = [
    {
      field: 'ProductName',
      title: 'Product Name',
      type: 'text',
    }, {
      field: 'UnitPrice',
      format: '{0:c}',
      title: 'Unit Price',
      type: 'numeric',
    }, {
      field: 'FirstOrderedOn',
      format: '{0:d}',
      title: 'First Ordered',
      type: 'date',
      Icon:'ToolTip'
    }
  ];
}
