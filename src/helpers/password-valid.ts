// helpers/password-valid.ts

export const isPasswordValid = (password: string) => 
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
  