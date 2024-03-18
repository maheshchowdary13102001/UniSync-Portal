import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ui-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.scss'
})
export class UiHeaderComponent {
  logoPath: string = 'assets/graduation.png';
  headerList = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about' 
    },
    {
      title: 'Services',
      dropdownItems: [
        { title: 'Service 1', link: '/services/service1' },
        { title: 'Service 2', link: '/services/service2' },
        { title: 'Service 3', link: '/services/service3' }
      ]
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ]
}
