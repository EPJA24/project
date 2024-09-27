import { z } from 'zod';

export const schema = z.object({
  username: z.string().min(6, 'Username must be more than 6 characters long').nonempty('Please specify an username'),
  password: z.string().min(8, 'The password must be longer than 8 characters').nonempty('Please specify an password'),
});
