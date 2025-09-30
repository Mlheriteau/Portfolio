import { Component, ElementRef, ViewChild } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  sendMessage(event: Event) {
    event.preventDefault();

    if (!this.contactForm) return;

    const formEl = this.contactForm.nativeElement;
    const button = formEl.querySelector('button') as HTMLButtonElement;

    // Disable button temporarily to prevent multiple clicks
    button.disabled = true;

    emailjs.sendForm(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      formEl,
      environment.emailJsPublicKey
    ).then(
      (result) => {
        // Change button style after success
        button.classList.add('sent');
        button.textContent = 'Message envoyé !';

        // Reset the form
        formEl.reset();
      },
      (error) => {
        alert('Une erreur est survenue, veuillez réessayer.');
        console.error(error.text);

        // Reactivate the button if error
        button.disabled = false;
      }
    );
  }

  // Scroll and focus on the form (for the link "Via le formulaire")
  scrollToForm() {
    if (this.contactForm) {
      const formEl = this.contactForm.nativeElement;
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = formEl.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  }
}
