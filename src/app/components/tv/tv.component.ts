import { Component } from '@angular/core';
import { TvServicesService } from '../../services/tv-services.service';
import { BehaviorSubject } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {
  allTV: any[] = [];
  currentPage!: BehaviorSubject<number>;
  page!: number;
  totalPages!: number;
  constructor(private tvServ: TvServicesService) {
    this.currentPage = new BehaviorSubject<number>(this.page);
  }
  
  ngOnInit() {

    this.currentPage.subscribe((newPage) => {
    this.tvServ.getAllTV(newPage).subscribe((response) => {
      this.allTV=response.results;
      this.page = response.page;
      this.totalPages = response.total_pages;
    });
  });
}

  nextPage() {
    if (this.page < this.totalPages) {
      this.currentPage.next(++this.page);
    }
  }
  prevPage() {
    if (this.page > 1) {
      this.currentPage.next(--this.page);
    }
  }


}
