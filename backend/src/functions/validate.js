function validateUrl(value) {
    return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w_])?\??(?:[-\+=&;%@.\w_])#?(?:[\w]*))?)/i.test(
      value
    );
  }
  
  module.exports = { validateUrl };