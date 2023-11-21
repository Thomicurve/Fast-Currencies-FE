import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({providedIn: 'root'})
export class AlertService {
  
  showSuccessAlert(title: string, text: string = "") { 
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      iconColor: '#fff',
      icon: 'success',
      title: title,
      text: text,
      background: '#a5dc86',
      color: '#fff',
      timer: 1500,
      showConfirmButton: false,
      timerProgressBar: true,
    })
  }

  showErrorAlert(title: string, text: string = "") {
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      iconColor: '#fff',
      icon: 'error',
      text: text,
      title: title,
      background: '#f27474',
      color: '#fff',
      timer: 3000,
      showConfirmButton: false,
      timerProgressBar: true,
    })
  }
}