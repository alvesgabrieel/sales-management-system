// helpers/username-valid.ts

export function isUsernameValid(username: string): boolean {
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(username);
  }
  