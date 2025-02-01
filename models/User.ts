import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

interface RegisteredEvent {
  eventId: Schema.Types.ObjectId;
  registeredAt: number;
}

export interface User extends Document {
  userId: string;
  name: string;
  email: string;
  username: string,
  address: string,
  registeredEvents: RegisteredEvent[];
}

const userSchema = new Schema<User>({
  userId: {
    type: String,
    unique: true,
    required: true,
    default: () => uuid()
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  address: { 
    type: String, 
    required: true,
    unique:true
  },
  registeredEvents: [
    {
      eventId: { type: String },
      registeredAt: { type: Number, default: Date.now() }
    }
  ]
});

userSchema.pre<User>('save', function (next) {
  if (!this.userId) {
    this.userId = uuid();
  }
  next();
});

export default mongoose.models.User || mongoose.model<User>('User', userSchema);
