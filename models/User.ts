import mongoose, { Schema, Document } from 'mongoose';

interface RegisteredEvent {
  eventId: Schema.Types.ObjectId;
  registeredAt: Date;
}

export interface User extends Document {
  name: string;
  email: string;
  registeredEvents: RegisteredEvent[];
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  registeredEvents: [
    {
      eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
      registeredAt: { type: Date, default: Date.now }
    }
  ]
});

export default mongoose.models.User || mongoose.model<User>('User', userSchema);
