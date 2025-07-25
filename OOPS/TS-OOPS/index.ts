// Interface
interface Notifier {
  sendNotification(message: string): void;
}


class EmailNotifier implements Notifier {
  sendNotification(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}


class SMSNotifier implements Notifier {
  sendNotification(message: string): void {
    console.log(`SMS sent: ${message}`);
  }
}


function triggerNotification(notifier: Notifier): void {
  notifier.sendNotification("Your code was accepted!");
}


const email = new EmailNotifier();
const sms = new SMSNotifier();

triggerNotification(email); 
triggerNotification(sms);   

