import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../helpers/hashHelper';
import { createSession } from '../helpers/sessionHelper';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Criação de novo usuário com senha hashed
  async registerUser(name: string, email: string, password: string) {
    const passwordHash = hashPassword(password);
    const user = await this.userRepository.addUser(name, email, await passwordHash);
    return user;
  }

  // Login de usuário
  async loginUser(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw new Error('Usuário não encontrado');

        console.log('Senha inserida:', password);
        console.log('Senha armazenada (hash):', user.passwordHash);
        console.log('Comparação de senha:', comparePassword(password, user.passwordHash)); // Deve retornar true

    const isPasswordValid = comparePassword(password, user.passwordHash);
      if (!isPasswordValid) throw new Error('Senha incorreta');
    createSession(user.id); // Cria a sessão
    return user;
  }
}