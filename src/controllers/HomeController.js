import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: 'Bruno',
      sobrenome: 'Mestres',
      email: 'bruno@',
      idade: 21,
      peso: 25.6,
      altura: 35.6,
    });

    res.json(aluno);
  }
}

export default new HomeController();
