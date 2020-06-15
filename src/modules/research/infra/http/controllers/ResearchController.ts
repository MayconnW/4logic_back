import { Request, Response } from 'express';

import { container } from 'tsyringe';
import ResearchCreateService from 'modules/research/services/CreateResearchService';
import GetResearchsService from 'modules/research/services/GetResearchsService';

class ResearchController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { month, year, customers } = req.body;

    const createResearch = container.resolve(ResearchCreateService);

    const research = await createResearch.execute({
      month,
      year,
      rating: customers,
    });

    return res.json(research);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const getResearchs = container.resolve(GetResearchsService);
    const researchs = await getResearchs.execute();

    return res.json({ researchs });
  }
}

export default new ResearchController();
