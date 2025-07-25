var EmailNotifier = /** @class */ (function () {
    function EmailNotifier() {
    }
    EmailNotifier.prototype.sendNotification = function (message) {
        console.log("Email sent: ".concat(message));
    };
    return EmailNotifier;
}());
var SMSNotifier = /** @class */ (function () {
    function SMSNotifier() {
    }
    SMSNotifier.prototype.sendNotification = function (message) {
        console.log("SMS sent: ".concat(message));
    };
    return SMSNotifier;
}());
function triggerNotification(notifier) {
    notifier.sendNotification("Your code was accepted!");
}
var email = new EmailNotifier();
var sms = new SMSNotifier();
triggerNotification(email);
triggerNotification(sms);
