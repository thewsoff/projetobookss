import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../helpers/hashHelper';
import { createSession } from '../helpers/sessionHelper';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

 
  async registerUser(name: string, email: string, password: string) {
    const passwordhash = hashPassword(password);
    const user = await this.userRepository.addUser(name, email, passwordhash);
    return user;
  }


  async loginUser(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw new Error('Usuário não encontrado');

        console.log('Senha inserida:', password);
        console.log('Senha armazenada (hash):', user.passwordhash);
        console.log('Comparação de senha:', comparePassword(password, user.passwordhash));

    const isPasswordValid = comparePassword(password, user.passwordhash);
      if (!isPasswordValid) throw new Error('Senha incorreta');
    createSession(user.id); 
    return user;
  }
}