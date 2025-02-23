import mongoose, {Schema, model} from "mongoose"

const userSchema = new Schema(
    {
        username : {type: String, maxLength: 120, required: true},
        favorites: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "movies", 
            },    
        ],
    },
    {
        timestamps: true,
    }

)

/* - **User and Admin Discrimination**:
  - Create a base schema for users with fields for:
    - `username` (String, required).
    - `favorites` (Array of ObjectIds referencing movies).
  - Add a discriminator for the admin role, with additional fields like:
    - `isAdmin` (Boolean, default: true).
    - `permissions` (Array of Strings, e.g., ["manage_movies", "moderate_reviews"].)
 */