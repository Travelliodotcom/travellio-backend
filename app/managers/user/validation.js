const { z } = require('zod');

const profileSchema = z.object({
    name: z.string().nonempty("Name is required"),
    guide: z.string(),
    email: z.string().email("Invalid email format").nonempty("Email is required"),
    rating: z.number(),
    profilePic: z.string(),
    gender: z.string().nonempty("Gender is required"),
    countries: z.array(z.string()),
    ethnicity: z.string(),
    biography: z.string(),
});

module.exports = { profileSchema };
