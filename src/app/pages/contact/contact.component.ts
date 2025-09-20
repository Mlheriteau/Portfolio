import { Component, ElementRef, ViewChild } from '@angular/core';
import emailjs from 'emailjs-com';
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

    if (this.contactForm) {
      emailjs.sendForm(
        environment.emailJsServiceId,
        environment.emailJsTemplateId,
        this.contactForm.nativeElement,
        environment.emailJsPublicKey
      ).then(
        (result) => {
          alert('Votre message a été envoyé avec succès !');
          this.contactForm.nativeElement.reset();
        },
        (error) => {
          alert('Une erreur est survenue, veuillez réessayer.');
          console.error(error.text);
        }
      );
    }
  }

  focusForm() {
    if (this.contactForm) {
      this.contactForm.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = this.contactForm.nativeElement.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  }
}
