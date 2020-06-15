import { Request, Response } from 'express';
import StorageFileService from 'modules/storage/services/StorageFileService';
import { container } from 'tsyringe';

class StorageController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { filename, originalname, mimetype } = req.file;

    const storageFileService = container.resolve(StorageFileService);

    const file = await storageFileService.execute({
      filename,
      originalname,
      mimetype,
    });

    return res.json({ file });
  }
}

export default new StorageController();
