export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isValidPrice = (price: number): boolean => {
    return price > 0;
  };

  export const isValidName = (name: string): boolean => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return name.length >= 3 && nameRegex.test(name);
};