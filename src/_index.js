
/**
* write function format  1234567890 to 123 456 7890, 666-0000064369123 to 666-000 006 4369123
 * first 9 digits are separated by space
**/
function formatTrackingNumber(trackingNumber) {
    if (trackingNumber.length > 3 && trackingNumber.length < 15) {
        return trackingNumber.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    } else {
        return trackingNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
    }
}


console.log("666-0000064369".length)
console.log(formatTrackingNumber("666-0000064369")); // 666-000 006 4369
console.log(formatTrackingNumber("666-0000064369123")); // 666-0000064369123
console.log(formatTrackingNumber("12345678901234567890")); // 123 456 789 01234567890

