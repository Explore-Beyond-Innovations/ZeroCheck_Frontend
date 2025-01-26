import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export interface Event extends Document {
  eventId: string;
  name: string;
  startDate: number; // in timestamp
  endDate: number;
  location: string;
  description: string;
  cost: number;
  capacity: number;
  tags: string[];
  attendees: string[];
}

const eventSchema = new Schema<Event>({
  eventId: {
    type: String,
    unique: true,
    required: true,
    default: () => uuid()
  },
  name: { type: String, required: true },
  startDate: { type: Number, required: true },
  endDate: { type: Number, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number },
  capacity: { type: Number },
  tags: { type: [String] },
  attendees: { type: [String], default: [] }
});

eventSchema.pre<Event>('save', function (next) {
  if (!this.eventId) {
    this.eventId = uuid();
  }
  next();
});

export default mongoose.models.Event ||
  mongoose.model<Event>('Event', eventSchema);
