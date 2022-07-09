import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['select', 'name', 'value', 'date', 'actions'];
  dataSource: MatTableDataSource<any[]> | null = null;
  selection = new SelectionModel<any>(true, []);
  totalRecords!: number;

  @Input() data!: any[] | null;
  // @Input() searchValue: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data!);

    setTimeout(() => {
      this.dataSource!.paginator = this.paginator;
      this.dataSource!.sort = this.sort;
    });

    // if (this.searchValue) {
    //   this.search(this.searchValue);
    // }
  }

  // search(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource!.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource!.paginator) {
  //     this.dataSource!.paginator.firstPage();
  //   }
  // }

  onPaginationChange({ pageIndex, pageSize }: any): void {
    // const skip = pageIndex * pageSize;
    // const take = pageIndex > 0 ? pageIndex * pageSize : pageSize;
    // this.loadUsers(skip, take);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.totalRecords;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource!.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
