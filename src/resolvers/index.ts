import {ZipModel} from '../models/zip.model';

export const resolvers = {
    Query: {
        searchZip: async (_: any, {zipCode}: any) => {
            const item = await ZipModel.findOne({zip: zipCode}).lean();
            if (!item) {
                throw new Error('Item not found')
            }
            return item;
        }
    }
}
