import crypto from 'crypto';

export const hashPassword =  (password: string): string => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

export const comparePassword = (password: string, hash: string): boolean =>{ 
  return hashPassword(password) === hash;
};

/*
import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; // Define o número de rounds para gerar o salt
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
*/