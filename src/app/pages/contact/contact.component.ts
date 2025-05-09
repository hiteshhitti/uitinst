import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  name = '';
  email = '';
  mobile = '';
  message = '';
  success = false;

  successMessage = '';
  errorMessage = '';

  private http = inject(HttpClient);

  onSubmit() {
    const endpoint = 'https://formspree.io/f/mkgrbgkr';
    const headers = new HttpHeaders({ 'Accept': 'application/json' });

    this.http.post(endpoint, this.formData, { headers }).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = '';
        this.formData = { name: '', email: '', mobile: '', message: '' };
      },
      error: () => {
        this.errorMessage = 'Something went wrong. Please try again later.';
        this.successMessage = '';
      }
    });
  }

  submitForm() {
    fetch(environment.formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        message: this.message
      })
    })
    .then(response => {
      if (response.ok) {
        this.success = true;
        this.successMessage = 'Your message has been sent!';
        this.errorMessage = '';
  
        // Clear form fields
        this.name = '';
        this.email = '';
        this.mobile = '';
        this.message = '';
  
        return; // ✅ Add this return to fix TypeScript error
      } else {
        return response.json().then(data => {
          this.success = false;
          this.successMessage = '';
          this.errorMessage = data?.error || 'Submission failed. Please try again.';
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      this.success = false;
      this.successMessage = '';
      this.errorMessage = 'Something went wrong. Please try again later.';
    });
  }
  

}
