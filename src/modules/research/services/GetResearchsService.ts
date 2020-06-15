import { inject, injectable } from 'tsyringe';
import Research from 'modules/research/infra/typeorm/entities/Research';
import IResearchRepository from '../repositories/IResearchRepository';

@injectable()
class GetResearchsService {
  constructor(
    @inject('ResearchRepository')
    private researchRepository: IResearchRepository,
  ) {}

  public async execute(): Promise<Research[]> {
    const researchs = await this.researchRepository.findAll();
    return researchs;
  }
}

export default GetResearchsService;
